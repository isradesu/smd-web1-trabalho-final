import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.model';

@Entity()
export class Venda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataHora: Date;

  @ManyToOne(() => Usuario, usuario => usuario.id)
  usuario: Usuario;

  @CreateDateColumn()
  criadoEm: Date;
}
