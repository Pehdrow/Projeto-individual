Create database flautaTransversal;
use flautaTransversal;

 

CREATE TABLE usuario (
id INT PRIMARY KEY auto_increment,
usuario VARCHAR(100),
email VARCHAR(100),
senha VARCHAR(100));

CREATE TABLE musica(
idMusica INT PRIMARY KEY auto_increment,
estilo VARCHAR(50),
mscMomento VARCHAR(200),
idioma VARCHAR(50),
artista VARCHAR(200),
fkUsuario INT,
foreign key (fkUsuario) references usuario(id));

CREATE TABLE genero(
idGenero INT PRIMARY KEY auto_increment,
nomeGenero VARCHAR(100));

select * from usuario;



insert into genero values (null, 'Samba'), (null, 'Pop'), (null, 'Jazz'), (null, 'Bossa Nova'), (null, 'Rock'), (null, 'Música clássica');

select * from genero;

create table usuarioGenero (
	fkGenero int,
    fkUsuario int,
    foreign key (fkGenero) references genero(idGenero),
    foreign key (fkUsuario) references usuario(id),
    constraint pkUsuarioGenero primary key (fkGenero, fkUsuario)
);







select estilo, mscMomento, idioma, artista, usuario, email, senha from musica
join usuario on fkUsuario = id;

select nomeGenero ,count(id) as favoritos from genero left join usuarioGenero on
 fkGenero = idGenero left join usuario on fkUsuario = id group by nomeGenero;


