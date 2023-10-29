import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/autenticacao/guard';

@Controller('usuarios')
export class UsuarioController {
  @UseGuards(JwtGuard)
  @Get('eu')
  selecionarMeuPerfil(@Req() req: Request) {
    return req.user;
  }
}
