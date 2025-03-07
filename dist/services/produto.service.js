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
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Produto_model_1 = require("../models/Produto.model");
let ProdutoService = class ProdutoService {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async encontrarTudo() {
        const produtos = await this.produtoRepository.find();
        console.log(produtos);
        return produtos;
    }
    async encontrarUm(id) {
        return this.produtoRepository.findOne({
            where: { id },
            relations: ['categoria'],
        });
    }
    encontrarUmPorNome(name) {
        return this.produtoRepository.findOneBy({ name });
    }
    async criar(produto) {
        return this.produtoRepository.save(produto);
    }
    async atualizar(id, produto) {
        await this.produtoRepository.update(id, produto);
    }
    async remover(id) {
        await this.produtoRepository.delete(id);
    }
};
exports.ProdutoService = ProdutoService;
exports.ProdutoService = ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Produto_model_1.Produto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutoService);
//# sourceMappingURL=produto.service.js.map