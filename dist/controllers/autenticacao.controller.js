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
exports.AutenticacaoController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../services/usuario.service");
const bcrypt = require("bcrypt");
let AutenticacaoController = class AutenticacaoController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    mostrarLogin(session, res) {
        if (session.usuarioId) {
            return res.redirect(`/usuarios/${session.usuarioId}`);
        }
        return;
    }
    async login({ login, senha }, session, res) {
        const usuario = await this.usuarioService.encontrarUmPorLogin(login);
        if (!usuario || !(await this.validarSenha(senha, usuario.senha))) {
            return res.send('Credenciais inválidas');
        }
        session.usuarioId = usuario.id;
        session.administrador = usuario.administrador;
        if (usuario.administrador) {
            return res.redirect(`/administrador`);
        }
        return res.redirect(`/cliente`);
    }
    async validarSenha(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
    logout(session, res) {
        session.usuarioId = null;
        res.redirect('/autenticacao/login');
    }
    session(session) {
        if (session.usuarioId) {
            return `Usuário logado com ID: ${session.usuarioId}`;
        }
        return 'Nenhum usuário logado';
    }
};
exports.AutenticacaoController = AutenticacaoController;
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Render)('autenticacao/login'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AutenticacaoController.prototype, "mostrarLogin", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AutenticacaoController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AutenticacaoController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('session'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AutenticacaoController.prototype, "session", null);
exports.AutenticacaoController = AutenticacaoController = __decorate([
    (0, common_1.Controller)('autenticacao'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], AutenticacaoController);
//# sourceMappingURL=autenticacao.controller.js.map