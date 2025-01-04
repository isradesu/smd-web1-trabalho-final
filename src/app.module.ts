import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Usuario } from './models/usuario.model';
import { Venda } from './models/venda.model';
import { Categoria } from './models/categoria.model';
import { Produto } from './models/produto.model';
import { VendaProduto } from './models/venda_produto.model';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { AuthController } from './controllers/auth.controller';
import * as session from 'express-session';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '123',
      database: 'ecommerce',
      entities: [Usuario, Venda, Categoria, Produto, VendaProduto],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Usuario, Venda, Categoria, Produto, VendaProduto]),
  ],
  controllers: [AppController, UsuarioController, AuthController],
  providers: [UsuarioService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
      }))
      .forRoutes('*');
  }
}
