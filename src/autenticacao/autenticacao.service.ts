import { Injectable } from '@nestjs/common';
import { Usuario, Favorito } from '@prisma/client';

@Injectable({})
export class AutenticacaoService {
  entrar() {
    return { msg: 'Entrou' };
  }
  inscrever() {
    return { msg: 'Inscreveu' };
  }
}
