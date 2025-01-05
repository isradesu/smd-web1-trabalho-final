import { Controller, Post, Body, Session, Get, Render, Res } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
//import { Usuario } from '../models/usuario.model';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('login')
  @Render('auth/login')
  showLogin() {
    return;
  }

  @Post('login')
  async login(@Body() { login, senha }: { login: string, senha: string }, @Session() session: Record<string, any>, @Res() res: Response) {
    const usuario = await this.usuarioService.findOneByLogin(login);
    if (usuario && usuario.senha === senha) {
      session.usuarioId = usuario.id;
      res.redirect(`/usuarios/${usuario.id}`);
    } else {
      res.send('Credenciais inválidas');
    }
  }

  @Post('logout')
  logout(@Session() session: Record<string, any>, @Res() res: Response) {
    session.usuarioId = null;
    res.redirect('/auth/login');
  }

  @Get('session')
  session(@Session() session: Record<string, any>): string {
    if (session.usuarioId) {
      return `Usuário logado com ID: ${session.usuarioId}`;
    }
    return 'Nenhum usuário logado';
  }
}
