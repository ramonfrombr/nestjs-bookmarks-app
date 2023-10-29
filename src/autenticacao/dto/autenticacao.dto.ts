import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AutenticacaoDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}
