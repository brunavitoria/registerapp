# Projeto Symfony com Vue.js

Este projeto é uma aplicação web desenvolvida com Symfony para o backend, Vue.js para o frontend e MySQL como banco de dados. Projeto desenvolvido como parte do processo seletivo para uma vaga de Desenvolvedor FullStack. O ambiente de desenvolvimento é gerenciado utilizando Docker.

## Requisitos

- Docker
- Docker Compose
- Git

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone git@github.com:brunavitoria/registerapp.git
```

2. Acesse o diretório do projeto:

```bash
cd registerapp/docker
```

3. Initialize o ambiente de desenvolvimento:

```bash
docker-compose up -d
```

4. Acesse o container do PHP e instale as dependências do projeto:

```bash
docker-compose exec php bash
composer install
```
Saia do contêiner PHP após a instalação.

5. Acesse o diretório symfony e instale as dependências do frontend:

```bash
npm install
npm run dev
```

6. Execute as migrações do banco de dados:

```bash
php bin/console doctrine:migrations:migrate
```

7. Acesse a aplicação em seu navegador:

```
http://localhost:8080/form
```

