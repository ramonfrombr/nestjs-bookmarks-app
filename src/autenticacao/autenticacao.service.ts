import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AutenticacaoDTO } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AutenticacaoService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async inscrever(dto: AutenticacaoDTO) {
    // gerar senha hash

    const hash = await argon.hash(dto.senha);
    // salvar usuario no banco de dados

    try {
      const usuario = await this.prisma.usuario.create({
        data: {
          email: dto.email,
          senhaHash: hash,
        },
      });

      return this.criarToken(usuario.id, usuario.email);
    } catch (erro) {
      if (erro instanceof PrismaClientKnownRequestError) {
        if (erro.code === 'P2002') {
          throw new ForbiddenException('Credenciais já são usadas.');
        }
      }

      throw erro;
    }
  }

  async entrar(dto: AutenticacaoDTO) {
    // encontrar usuario pelo email
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        email: dto.email,
      },
    });
    // se usuario nao existir, mostrar erro
    if (!usuario) {
      throw new ForbiddenException('Credenciais incorretas.');
    }

    // comparar senhas
    const senhasIguais = await argon.verify(usuario.senhaHash, dto.senha);
    // se senha não for correta, mostrar erro
    if (!senhasIguais) {
      throw new ForbiddenException('Credenciais incorretas.');
    }

    // retornar o usuario
    return this.criarToken(usuario.id, usuario.email);
  }

  async criarToken(
    usuarioId: number,
    email: string,
  ): Promise<{ token_acesso: string }> {
    const dados = {
      sub: usuarioId,
      email,
    };

    const segredo = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(dados, {
      expiresIn: '15m',
      secret: segredo,
    });

    return {
      token_acesso: token,
    };
  }
}
