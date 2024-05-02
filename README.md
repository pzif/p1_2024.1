# p1_2024.1
 
# API de Cadastro e Autenticação JWT

Este é um projeto simples de API de cadastro de usuários e autenticação JWT (JSON Web Tokens) usando Node.js, Express e MongoDB. Ele consiste em duas partes principais: a API de cadastro de usuários e a API de autenticação JWT.

## Funcionalidades

- Cadastro de usuários
- Autenticação de usuários através de JWT

## Requisitos

- Node.js
- MongoDB
- npm ou yarn

## Instalação

1. Clone este repositório:

```
git clone https://github.com/pzif/p1_2024.1.git
```

2. Instale as dependências:

```
cd p1_2024.1
npm install
```

3. Inicie o servidor:

```
npm start
```

## Endpoints

### Cadastro de Usuário

**POST /auth/register**

Cria um novo usuário com as seguintes informações:

- Nome
- E-mail
- Senha

Exemplo de requisição:

```json
{
  "name": "Rodrigo Oliveira",
  "email": "rodrigo@teste.com",
  "password": "123456"
}
```

### Autenticação JWT

**POST /auth/authenticate**

Autentica um usuário e retorna um token JWT válido para acessar recursos protegidos. Requer as seguintes informações:

- E-mail
- Senha

Exemplo de requisição:

```json
{
  "email": "rodrigo@teste.com",
  "password": "123456"
}
```

## Testes

1. Cadastro de Usuário:

- Método: POST
- Endpoint: /auth/register
- Corpo da requisição:

```json
{
  "name": "Rodrigo Oliveira",
  "email": "rodrigo@teste.com",
  "password": "123456"
}
```

2. Autenticação JWT:

- Método: POST
- Endpoint: /auth/authenticate
- Corpo da requisição:

```json
{
  "email": "rodrigo@teste.com",
  "password": "123456"
}
```

## Autor

Rodrigo Oliveira 202022177
