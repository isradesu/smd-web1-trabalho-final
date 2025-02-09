import { UsuarioService } from '../services/usuario.service';
import { Response } from 'express';
export declare class AutenticacaoController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    mostrarLogin(session: Record<string, any>, res: Response): void;
    login({ login, senha }: {
        login: string;
        senha: string;
    }, session: Record<string, any>, res: Response): Promise<void | Response<any, Record<string, any>>>;
    private validarSenha;
    logout(session: Record<string, any>, res: Response): void;
    session(session: Record<string, any>): string;
}
