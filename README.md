
# Projeto <b>Blogs API</b>!

## Introdução (Intro)

`English translation at the bottom of every section.`

O projeto Blogs API foi desenvolvido durante o módulo Backend do curso de Desenvolvimento Web da Trybe. O projeto consiste numa API RESTful onde é possível acessar um banco de dados com usuários, postagens e categorias, podendo resgatar os dados cadastrados e registrar novos dados, utilizando banco de dados MySQL e Sequelize.

<details>
 <summary>English translation</summary>
The Blogs API project was developed during the Backend module on Trybe's Web Development course. The project consists in a RESTful API where is possible to access a database with users, posts and post categories, enabling the user to read and register new data, using a MySQL database and Sequelize.
</details>

---

## Habilidades desenvolvidas (Developed skills)

Neste projeto nós: desenvolvemos endpoints que se conectam com o banco de dados seguindo o REST; Seguimos a arquitetura MSC para o intermédio da chamada a API e a conexão com o Banco de Dados; Validamos o login de usuários através de nome e senha, utilizando JWT; Trabalhamos com tabelas de relação 1:1, N:1 e N:N; Utilizamos o ORM Sequelize para intermediar a conexão do código Node.js com o banco de dados MySQL.

<details>
 <summary>English translation</summary>
In this project we: developed endpoints that connect themselves with the database following the REST architecture; Followed the MSC architecture to intermediate the API call and the DB connection; Validated user login through username and password, making use of JWT; Worked with 1:1, N:1 and N:N relations on the relational database; Used Sequelize ORM to intermediate the Node.js and MySQL connection.
</details>

---

## CRUD

CRUD são as quatro operações básicas utilizadas em bases de dados relacionais fornecidas aos utilizadores do sistema. É um acrônimo para **C**reate, **R**ead, **U**pdate and **D**elete (em português seria **Criar**, **Ler**, **Atualizar** e **Deletar**), que definem as operações feitas no banco de dados, de criar novos dados, ler dados já presentes no banco, atualizar dados previamente adicionados ao banco, e deletar estes mesmos dados.

<details>
 <summary>English translation</summary>
CRUD are the four basic operations used on relational databases provided to the system users. CRUD stands for Create, Read, Update and Delete, which define the operations of creating new data, reading data already registered on the DB, updating data also already registered and deleting that same data.
</details>

---

## MSC

MSC são camadas que facilitam a manutenção e legibilidade no código, uma vez que cada camada é responsável por apenas uma função. A sigla MSC signfica **M**odel, **S**ervice e **C**ontroller, onde a camada **Controller** é a responsável por enviar as requisições do usuário para o servidor e retornar as respostas de nossa API para o usuário, enquanto que a camada **Model** acessa o banco de dados, executando a operação desejada. Já o **Service** é responsável por fazer a intermediação entre as duas camadas, podendo agir como regulador das regras de negócio da aplicação e lançar erros em caso de algum problema na execução do código.

<details>
 <summary>English translation</summary>
MSC are the layers that eases the maintenance and legibility of the code, once each layer is responsable for a single function. MSC stands for Model, Service and Controller, where each Controller layer is responsible for sending the requests from the user to the server, and the responses from our API to the user, while the Model layer acesses the database, executing the wanted operation. The Service layer, on the other hand,  is responsible for intermediate both the previous layers, acting as a regulator of the business rules on our app, throwing errors, etc.
</details>

---

## ORM

Os ORMs ou **O**bject-**R**elational **M**appers visam diminuir o uso dos comandos e consultas SQL nas tabelas do banco de dados. Utilizando um framework baseado em ORM, conseguimos utilizar comandos SQL sem utilizar a linguagem do MySQL para tal. Nesse projeto utilizamos o **Sequelize**.

<details>
 <summary>English translation</summary>
The ORMs or Object-Relational Mappers aims to lower the use of SQL querys on consulting the database. Making use of a framework based on ORM, we can use SQL commands without the MySQL language. In this project we used Sequelize.
</details>

---

## Sequelize

O **Sequelize** é um ORM baseado em **Promises** para Node.js e pode ser utilizado para diversos bancos de dados. Neste projeto, utilizamos em conjunto com o MySQL.

<details>
 <summary>English translation</summary>
Sequelize is an ORM based on Promises for Node.js and can be used for several database technologies. In this project, we used it with MySQL.
</details>

---

## Funcionamento da aplicação (App's operation)

Para iniciar o projeto, é necessário instalar [Docker](https://docs.docker.com/engine/install/ubuntu/).

Antes de iniciar, entre na raiz do projeto pelo seu terminal e rode o comando `docker-compose up -d --build` para criar e inicializar os containers da aplicação. Para entrar no terminal do container, rode o comando `docker exec -it blogs_api bash`. Esses comandos devem ser executado via terminal dentro do diretório onde está o arquivo **docker-compose.yml**. Uma vez no container, instale as dependências do projeto com `npm i` e então, após a instalação bem sucedida, rode o comando `npm start` para inicializar o projeto. Altere a porta do MySQL ou do Node.js no docker-compose se necessário.

<details>
 <summary>English translation</summary>
To run the project you'll need to have Docker installed.

Before anything, on the project root folder, through your terminal, run the command line `docker-compose up -d --build` so you may create and initialize the app containers. To enter the container terminal, run the line `docker exec -it blogs_api bash`. These command lines are menat to be executed on the directory containing the **docker-compose.yml** file. Once inside the container, install the dependencies with `npm i` and then, after a successful installation, run the line `npm start`to initialize the app. Make sure you change the MySQL's or Node.js's port on docker-compose if needed.
</details>

---

## Histórico de Commits (Commits history)

O histórico de commits está preservado da forma como o projeto foi desenvolvido, sendo possível visualizar o caminho que trilhei e como resolvi o problema proposto pelo projeto.

<details>
 <summary>English translation</summary>
The commit history is preserved the way the project was firstly developed, providing a way to visualize the path I chose to take and how I solved the problem given by the project.
</details>

---
