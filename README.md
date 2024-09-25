# API Livraria

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Resumo do projeto

Projeto de API REST para prática de JavaScript.
Livraria com sistema de cadastro e manejo de livros, autores e editoras.


## Stack utilizada

* `Node.js` v20.11.1
* `express` v4.21.0,



## Instalação

Este projeto já conta com o código necessário para subir a API em um servidor local:

```
├── package.json
├── package-lock.json
├── README.md
├── server.js
├── src
│   ├── app.js
│   ├── controllers
│   │   └── livrosController.js
│   │   └── autoresController.js
│   │   └── editorasController.js
│   ├── config
│   │   ├── dbconfig.js
│   │   └── livraria.sqlite
│   ├── models
│   │   └── livro.js
│   │   └── autor.js
│   │   └── editora.js
│   └── routes
│       ├── autoresRoutes.js
│       ├── editorasRoutes.js
│       ├── index.js
│       └── livrosRoutes.js
```


### Instalação do projeto
* Baixe o repositório do projeto, navegue via terminal até a pasta e instale as dependências necessárias com `npm install`.
* Confira se a pasta `node_modules` foi criada na raiz do projeto.


## Como rodar a API

* No terminal, acesse a pasta raiz do projeto e insira o comando `npm run dev` para rodar o projeto em modo de desenvolvimento. Você deverá ver no terminal a seguinte mensagem:
  ```
  > api-js-local@1.0.0 dev
  > nodemon server.js

  [nodemon] 2.0.16
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,json
  [nodemon] starting `node server.js`
  Servidor escutando em http://localhost:3000
  ```

* Os recursos da API poderão ser acessados a partir da *base URL* `http://localhost:3000`.

  > Esta API está programada para ser acessada a partir de `http://localhost:3000`. Certifique-se de que não existem outros recursos ocupando a porta `3000` antes de subir o projeto.


### Endpoints

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

`/livros`
* `GET /livros`
* `GET /livros/:id`
* `POST /livros`
* `PUT /livros/:id`
* `DELETE /livros/:id`

`/autores`
* `GET /autor`
* `GET /autor/:id`
* `GET /autor/:id/livros`
* `POST /autor`
* `PUT /autor/:id`
* `DELETE /autor/:id`

`/editoras`
* `GET /editora`
* `GET /editora/:id`
* `GET /editora/:id/livros`
* `POST /editora`
* `PUT /editora/:id`
* `DELETE /editora/:id`


## Roadmap

* Autenticação
* Tratamento de erros
* Validações