import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nome: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ length: 150, unique: true })
  login: string;

  @Column()
  senha: string;

  @Column({ length: 255, nullable: true })
  endereco: string;

  @Column()
  administrador: boolean;

  @CreateDateColumn()
  criadoEm: Date;
}
