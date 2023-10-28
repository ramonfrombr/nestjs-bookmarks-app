import { Injectable } from '@nestjs/common';

@Injectable({})
export class AutenticacaoService {
  entrar() {
    return { msg: 'Entrou' };
  }
  inscrever() {
    return { msg: 'Inscreveu' };
  }
}
