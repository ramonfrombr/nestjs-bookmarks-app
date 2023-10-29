import { Module } from '@nestjs/common';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FavoritoModule } from './favorito/favorito.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AutenticacaoModule, UsuarioModule, FavoritoModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
