import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticacaoDTO } from './dto';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(private autenticacaoService: AutenticacaoService) {}

  @Post('inscrever')
  inscrever(@Body() dto: AutenticacaoDTO) {
    return this.autenticacaoService.inscrever(dto);
  }

  @Post('entrar')
  entrar() {
    return this.autenticacaoService.entrar();
  }
}
