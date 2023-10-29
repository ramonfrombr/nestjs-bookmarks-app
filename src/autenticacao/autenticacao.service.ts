import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AutenticacaoDTO } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AutenticacaoService {
  constructor(private prisma: PrismaService) {}
  entrar() {
    return { msg: 'Entrou' };
  }

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

      delete usuario.senhaHash;

      // retornar usuario salvo
      return usuario;
    } catch (erro) {
      if (erro instanceof PrismaClientKnownRequestError) {
        if (erro.code === 'P2002') {
          throw new ForbiddenException('Credenciais já são usadas.');
        }
      }

      throw erro;
    }
  }
}
