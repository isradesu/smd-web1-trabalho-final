import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria.model';
import { Response } from 'express';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    mostrar(session: Record<string, any>, res: Response): Promise<void | {
        categorias: Categoria[];
    }>;
    mostrarPesquisa(session: Record<string, any>, conteudo: string, res: Response): Promise<void | {
        categorias: Categoria[];
    }>;
    mostrarCriar(session: Record<string, any>, res: Response): Promise<void>;
    criar(categoria: Categoria, res: Response): Promise<void>;
    editar(id: number): Promise<{
        categoria: Categoria;
    }>;
    atualizar(id: number, categoria: Categoria, res: Response): Promise<void>;
    remover(id: number, res: Response): Promise<void>;
}
