import { Repository } from 'typeorm';
import { Usuario } from 'src/models/usuario.model';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    encontrarTudo(): Promise<Usuario[]>;
    encontrarUm(id: number): Promise<Usuario>;
    encontrarUmPorLogin(login: string): Promise<Usuario>;
    criar(usuario: Usuario): Promise<Usuario>;
    atualizar(id: number, usuario: Usuario): Promise<void>;
    remover(id: number): Promise<void>;
}
