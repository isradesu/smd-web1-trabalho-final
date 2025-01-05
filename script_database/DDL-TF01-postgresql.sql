create table usuario (
  id serial primary key,
  nome varchar(150) not null,
  email varchar(150) not null unique,
  login varchar(150) not null unique,  
  senha varchar(255) not null,
  endereco varchar(255),
  administrador boolean default false, 

  criado_em timestamp default current_timestamp 
);

create table venda (
  id serial primary key,
  data_hora timestamp not null,

  usuario_id int not null,
  foreign key (usuario_id) references usuario(id),

  criado_em timestamp default current_timestamp 
);

create table categoria (
  id serial primary key,
  nome varchar(150) not null,

  criado_em timestamp default current_timestamp 
);

create table produto (
  id serial primary key,
  foto varchar(255),
  descricao varchar(500) not null,
  preco decimal(10, 2) not null,
  quantidade int not null,

  categoria_id int not null,
  foreign key (categoria_id) references categoria(id),

  criado_em timestamp default current_timestamp 
);

create table venda_produto (
  id serial primary key,
  quantidade int not null,
  preco decimal(10, 2) not null,

  venda_id int not null,
  foreign key (venda_id) references venda(id),
  produto_id int not null,
  foreign key (produto_id) references produto(id),

  criado_em timestamp default current_timestamp 
);
