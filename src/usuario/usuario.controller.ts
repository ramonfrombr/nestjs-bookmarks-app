import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('usuarios')
export class UsuarioController {
  @UseGuards(AuthGuard('jwt'))
  @Get('eu')
  selecionarMeuPerfil(@Req() req: Request) {
    return req.user;
  }
}
