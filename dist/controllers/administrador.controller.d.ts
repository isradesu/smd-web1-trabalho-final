import { UsuarioService } from '../services/usuario.service';
import { Response } from 'express';
export declare class AdministradorController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    mostrar(session: Record<string, any>, res: Response): Promise<void>;
}
