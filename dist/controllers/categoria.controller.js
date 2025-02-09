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
exports.CategoriaController = void 0;
const common_1 = require("@nestjs/common");
const categoria_service_1 = require("../services/categoria.service");
const categoria_model_1 = require("../models/categoria.model");
let CategoriaController = class CategoriaController {
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
    }
    async mostrar(session, res) {
        if (!session.administrador)
            return res.redirect('/autenticacao/login');
        const categorias = await this.categoriaService.encontrarTudo();
        return { categorias };
    }
    async mostrarPesquisa(session, conteudo, res) {
        if (!session.administrador)
            return res.redirect('/autenticacao/login');
        let categorias = await this.categoriaService.encontrarTudo();
        if (conteudo) {
            categorias = categorias.filter((categoria) => categoria.nome.toLowerCase().includes(conteudo.toLowerCase()));
        }
        return { categorias };
    }
    async mostrarCriar(session, res) {
        if (!session.administrador)
            return res.redirect('/autenticacao/login');
    }
    async criar(categoria, res) {
        await this.categoriaService.criar(categoria);
        return res.redirect(`/categoria`);
    }
    async editar(id) {
        const categoria = await this.categoriaService.encontrarUm(id);
        return { categoria };
    }
    async atualizar(id, categoria, res) {
        await this.categoriaService.atualizar(id, categoria);
        return res.redirect('/categoria');
    }
    async remover(id, res) {
        await this.categoriaService.remover(id);
        return res.redirect('/categoria');
    }
};
exports.CategoriaController = CategoriaController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('administrador/categoria/painel'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "mostrar", null);
__decorate([
    (0, common_1.Get)('pesquisar'),
    (0, common_1.Render)('administrador/categoria/painel'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Query)('conteudo')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "mostrarPesquisa", null);
__decorate([
    (0, common_1.Get)('criar'),
    (0, common_1.Render)('administrador/categoria/criar'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "mostrarCriar", null);
__decorate([
    (0, common_1.Post)('criar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categoria_model_1.Categoria, Object]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)('editar/:id'),
    (0, common_1.Render)('administrador/categoria/editar'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "editar", null);
__decorate([
    (0, common_1.Post)('atualizar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, categoria_model_1.Categoria, Object]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Get)('deletar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "remover", null);
exports.CategoriaController = CategoriaController = __decorate([
    (0, common_1.Controller)('categoria'),
    __metadata("design:paramtypes", [categoria_service_1.CategoriaService])
], CategoriaController);
//# sourceMappingURL=categoria.controller.js.map