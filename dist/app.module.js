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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const session = require("express-session");
const app_controller_1 = require("./app.controller");
const usuario_model_1 = require("./models/usuario.model");
const venda_model_1 = require("./models/venda.model");
const categoria_model_1 = require("./models/categoria.model");
const produto_model_1 = require("./models/produto.model");
const vendaProduto_model_1 = require("./models/vendaProduto.model");
const usuario_service_1 = require("./services/usuario.service");
const produto_service_1 = require("./services/produto.service");
const categoria_service_1 = require("./services/categoria.service");
const usuario_controller_1 = require("./controllers/usuario.controller");
const produto_controller_1 = require("./controllers/produto.controller");
const categoria_controller_1 = require("./controllers/categoria.controller");
const autenticacao_controller_1 = require("./controllers/autenticacao.controller");
const administrador_controller_1 = require("./controllers/administrador.controller");
const cliente_controller_1 = require("./controllers/cliente.controller");
let AppModule = class AppModule {
    constructor() { }
    configure(consumer) {
        consumer
            .apply(session({
            secret: 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e',
            resave: false,
            saveUninitialized: false,
        }))
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123',
                database: 'ecommerce',
                entities: [usuario_model_1.Usuario, venda_model_1.Venda, categoria_model_1.Categoria, produto_model_1.Produto, vendaProduto_model_1.VendaProduto],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([usuario_model_1.Usuario, venda_model_1.Venda, categoria_model_1.Categoria, produto_model_1.Produto, vendaProduto_model_1.VendaProduto]),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            usuario_controller_1.UsuarioController,
            autenticacao_controller_1.AutenticacaoController,
            cliente_controller_1.ClienteController,
            administrador_controller_1.AdministradorController,
            produto_controller_1.ProdutoController,
            categoria_controller_1.CategoriaController
        ],
        providers: [usuario_service_1.UsuarioService, produto_service_1.ProdutoService, categoria_service_1.CategoriaService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
//# sourceMappingURL=app.module.js.map