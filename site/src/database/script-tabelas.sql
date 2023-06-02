

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
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario (id));

select * from musica
join usuario on fkUsuario = id;

select estilo, mscMomento, idioma, artista, usuario, email, senha from musica
join usuario on fkUsuario = id;


