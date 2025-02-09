import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto.model';
import { CategoriaService } from '../services/categoria.service';
import { Response } from 'express';
export declare class ProdutoController {
    private readonly produtoService;
    private readonly categoriaService;
    constructor(produtoService: ProdutoService, categoriaService: CategoriaService);
    mostrar(session: Record<string, any>, res: Response): Promise<void>;
    mostrarCriar(session: Record<string, any>, res: Response): Promise<void | {
        categorias: import("../models/categoria.model").Categoria[];
    }>;
    criar(produto: Produto, res: Response): Promise<void>;
    editar(id: number, res: Response): Promise<void | Response<any, Record<string, any>>>;
    atualizar(id: number, produto: Produto, res: Response): Promise<void>;
    remover(id: number, res: Response): Promise<void>;
}
