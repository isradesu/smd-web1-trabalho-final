import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Categoria } from './categoria.model';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  foto: string;

  @Column({ length: 500 })
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => Categoria, categoria => categoria.id)
  categoria: Categoria;

  @CreateDateColumn()
  criadoEm: Date;
}
