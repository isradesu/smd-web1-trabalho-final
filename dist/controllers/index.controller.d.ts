import { ProdutoService } from '../services/produto.service';
export declare class IndexController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    mostrarLandingPage(session: Record<string, any>): Promise<{
        produtos: import("../models/produto.model").Produto[];
    }>;
}
