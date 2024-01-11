# React + TypeScript + Vite

Backend:

Partiu usar esse modelo de projeto e fazer:
Criar no DB usando comandos de linha em mysql:
tabela:
create table frases
(
id_frase int primary key auto_increment,
titulo_frase varchar(60),
frase varchar(255)
)
###Implementação OK!

Criar uma pasta separada para a api_frases;
usar o express(aprendido no curso de backend);
criar o CRUD no back-end.
###Implementação OK!

Frontend:

Criar o projeto em vite+react+ts;
Criar duas paginas:
Pagina principal
tela de exibição das frases;
botão: busca aleatória / Get;
###Implementação OK!

Pagina de cadastro:
Input para inserir autor(se houver);
Input para inserir o título(se houver);
Text area para inserir a frase;
###Implementação OK!

    botões:
    Inserir/Post;           Implementação OK!
    Buscar/Get;             Implementação OK!
    Atualizar/Put;
    Deletar/Delete/id;
    Deletar/Delete All;
