import { UsuarioService } from '../services/usuario.service';
import { Response } from 'express';
export declare class ClienteController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    mostrar(session: Record<string, any>, res: Response): Promise<void | {
        usuario: import("../models/usuario.model").Usuario;
    }>;
}
