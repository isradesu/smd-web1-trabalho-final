import { Repository } from 'typeorm';
import { Categoria } from '../models/categoria.model';
export declare class CategoriaService {
    private readonly categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    encontrarTudo(): Promise<Categoria[]>;
    encontrarUm(id: number): Promise<Categoria>;
    encontrarUmPorNome(name: string): Promise<Categoria>;
    criar(categoria: Categoria): Promise<Categoria>;
    atualizar(id: number, categoria: Categoria): Promise<void>;
    remover(id: number): Promise<void>;
}
