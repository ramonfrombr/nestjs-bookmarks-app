import { Controller, Get, UseGuards } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { SelecionarUsuario } from 'src/autenticacao/decorator';
import { JwtGuard } from 'src/autenticacao/guard';

@UseGuards(JwtGuard)
@Controller('usuarios')
export class UsuarioController {
  @Get('eu')
  selecionarMeuPerfil(@SelecionarUsuario() usuario: Usuario) {
    return usuario;
  }
}
