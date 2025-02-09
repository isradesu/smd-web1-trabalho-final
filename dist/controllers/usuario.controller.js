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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../services/usuario.service");
const usuario_model_1 = require("../models/usuario.model");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    encontrarTodos() {
        return this.usuarioService.encontrarTudo();
    }
    mostrarCriar() {
        return;
    }
    async encontrarUm(id, session, res) {
        if (!session.usuarioId) {
            return res.redirect('/autenticacao/login');
        }
        const usuario = await this.usuarioService.encontrarUm(id);
        return usuario;
    }
    async criar(usuario, res) {
        usuario.administrador = usuario.administrador == 'on' ? true : false;
        await this.usuarioService.criar(usuario);
        return res.redirect('/autenticacao/login');
    }
    async atualizar(id, usuario, res) {
        await this.usuarioService.atualizar(id, usuario);
        res.redirect(`/usuarios/${id}`);
    }
    async remover(session, id, res) {
        await this.usuarioService.remover(id);
        session.usuarioId = null;
        res.redirect('/autenticacao/login');
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "encontrarTodos", null);
__decorate([
    (0, common_1.Get)('criar'),
    (0, common_1.Render)('usuario/criar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "mostrarCriar", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.Render)('usuario/perfil'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "encontrarUm", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_model_1.Usuario, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criar", null);
__decorate([
    (0, common_1.Post)('atualizar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, usuario_model_1.Usuario, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Post)('deletar/:id'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "remover", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map