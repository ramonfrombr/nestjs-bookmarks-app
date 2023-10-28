import { Controller, Post } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(private autenticacaoService: AutenticacaoService) {}

  @Post('inscrever')
  inscrever() {
    return this.autenticacaoService.inscrever();
  }

  @Post('entrar')
  entrar() {
    return this.autenticacaoService.entrar();
  }
}
