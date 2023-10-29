import { Module } from '@nestjs/common';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FavoritoModule } from './favorito/favorito.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AutenticacaoModule,
    UsuarioModule,
    FavoritoModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
