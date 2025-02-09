import { Controller, Get, Render, Session } from '@nestjs/common';
import { ProdutoService } from './services/produto.service';

@Controller()
export class AppController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @Render('index')
  async root(@Session() session: Record<string, any>) {
    const produtos = await this.produtoService.encontrarTudo();
    return { 
      produtos,
      session
    };
  }
}
