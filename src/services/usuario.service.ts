import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../models/usuario.model';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ id });
  }

  findOneByLogin(login: string): Promise<Usuario> { 
    return this.usuarioRepository.findOneBy({ login } as FindOptionsWhere<Usuario>); 
  }

  create(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }

  async update(id: number, usuario: Usuario): Promise<void> {
    await this.usuarioRepository.update(id, usuario);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }

  
}
