import { Venda } from './venda.model';
import { Produto } from './produto.model';
export declare class VendaProduto {
    id: number;
    quantidade: number;
    preco: number;
    venda: Venda;
    produto: Produto;
    criadoEm: Date;
}
