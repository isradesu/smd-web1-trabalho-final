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
exports.Venda = void 0;
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("./usuario.model");
let Venda = class Venda {
};
exports.Venda = Venda;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Venda.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Venda.prototype, "dataHora", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_model_1.Usuario, usuario => usuario.id),
    __metadata("design:type", usuario_model_1.Usuario)
], Venda.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Venda.prototype, "criadoEm", void 0);
exports.Venda = Venda = __decorate([
    (0, typeorm_1.Entity)()
], Venda);
//# sourceMappingURL=venda.model.js.map