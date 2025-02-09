import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Response } from 'express';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    encontrarTodos(): Promise<Usuario[]>;
    mostrarCriar(): void;
    encontrarUm(id: number, session: Record<string, any>, res: Response): Promise<void | Usuario>;
    criar(usuario: Usuario, res: Response): Promise<void>;
    atualizar(id: number, usuario: Usuario, res: Response): Promise<void>;
    remover(session: Record<string, any>, id: number, res: Response): Promise<void>;
}
