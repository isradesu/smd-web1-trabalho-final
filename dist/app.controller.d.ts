import { ProdutoService } from './services/produto.service';
export declare class AppController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    root(session: Record<string, any>): Promise<{
        produtos: import("./models/Produto.model").Produto[];
        session: Record<string, any>;
    }>;
}
