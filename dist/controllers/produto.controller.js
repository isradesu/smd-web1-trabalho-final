"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const produto_service_1 = require("../services/produto.service");
const produto_model_1 = require("../models/produto.model");
const categoria_service_1 = require("../services/categoria.service");
let ProdutoController = class ProdutoController {
    constructor(produtoService, categoriaService) {
        this.produtoService = produtoService;
        this.categoriaService = categoriaService;
    }
    async mostrar(session, res) {
        if (!session.administrador) {
            return res.redirect('/autenticacao/login');
        }
        const produtos = await this.produtoService.encontrarTudo();
        return res.render('administrador/produto/painel', { produtos });
    }
    async mostrarCriar(session, res) {
        if (!session.administrador)
            return res.redirect('/autenticacao/login');
        const categorias = await this.categoriaService.encontrarTudo();
        return { categorias };
    }
    async criar(produto, res) {
        await this.produtoService.criar(produto);
        return res.redirect('/produto');
    }
    async editar(id, res) {
        try {
            const produto = await this.produtoService.encontrarUm(id);
            const categorias = await this.categoriaService.encontrarTudo();
            const categoriasComSelecao = categorias.map(categoria => ({
                ...categoria,
                isSelected: categoria.id === produto.categoria.id,
            }));
            return res.render('administrador/produto/editar', {
                produto,
                categorias: categoriasComSelecao,
            });
        }
        catch (error) {
            console.error('Erro ao carregar a página de edição:', error);
            return res.status(500).send('Erro interno do servidor');
        }
    }
    async atualizar(id, produto, res) {
        await this.produtoService.atualizar(id, produto);
        return res.redirect('/produto');
    }
    async remover(id, res) {
        await this.produtoService.remover(id);
        return res.redirect('/produto');
    }
};
exports.ProdutoController = ProdutoController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "mostrar", null);
__decorate([
    (0, common_1.Get)('criar'),
    (0, common_1.Render)('administrador/produto/criar'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "mostrarCriar", null);
__decorate([
    (0, common_1.Post)('criar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_model_1.Produto, Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)('editar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "editar", null);
__decorate([
    (0, common_1.Post)('atualizar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, produto_model_1.Produto, Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Get)('deletar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "remover", null);
exports.ProdutoController = ProdutoController = __decorate([
    (0, common_1.Controller)('produto'),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService,
        categoria_service_1.CategoriaService])
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map