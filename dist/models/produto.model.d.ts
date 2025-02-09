import { Categoria } from './categoria.model';
export declare class Produto {
    id: number;
    foto: string;
    descricao: string;
    preco: number;
    quantidade: number;
    categoria: Categoria;
    criadoEm: Date;
}
