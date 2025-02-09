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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaProduto = void 0;
const typeorm_1 = require("typeorm");
const venda_model_1 = require("./venda.model");
const produto_model_1 = require("./produto.model");
let VendaProduto = class VendaProduto {
};
exports.VendaProduto = VendaProduto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VendaProduto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VendaProduto.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], VendaProduto.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => venda_model_1.Venda, venda => venda.id),
    __metadata("design:type", venda_model_1.Venda)
], VendaProduto.prototype, "venda", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produto_model_1.Produto, produto => produto.id),
    __metadata("design:type", produto_model_1.Produto)
], VendaProduto.prototype, "produto", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VendaProduto.prototype, "criadoEm", void 0);
exports.VendaProduto = VendaProduto = __decorate([
    (0, typeorm_1.Entity)()
], VendaProduto);
//# sourceMappingURL=vendaProduto.model.js.map