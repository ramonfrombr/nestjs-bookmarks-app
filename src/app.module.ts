import { Module } from '@nestjs/common';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FavoritoModule } from './favorito/favorito.module';

@Module({
  imports: [AutenticacaoModule, UsuarioModule, FavoritoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
