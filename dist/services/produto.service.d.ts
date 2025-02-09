import { Repository } from 'typeorm';
import { Produto } from '../models/Produto.model';
export declare class ProdutoService {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<Produto>);
    encontrarTudo(): Promise<Produto[]>;
    encontrarUm(id: number): Promise<Produto>;
    encontrarUmPorNome(name: string): Promise<Produto>;
    criar(produto: Produto): Promise<Produto>;
    atualizar(id: number, produto: Produto): Promise<void>;
    remover(id: number): Promise<void>;
}
