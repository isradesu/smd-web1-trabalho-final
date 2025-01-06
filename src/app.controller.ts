import { Controller, Get, Render, Session } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root(@Session() session: Record<string, any>) {    

    return { 
      message: 'Pagina de Apresentação (Landing page)' ,
      session
    };
  }
}


