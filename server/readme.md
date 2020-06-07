<p align="center">
    <img alt="Ecoleta" src="../frontend/src/assets/logo.svg" width="250px" />
</p>

# Backend

Esta parte do projeto é responsável pela criação do Banco de Dados e a comunicação deste com o Frontend e o Backend. Também validação de envio utilizado o **Celebrate**. A API é criada usando o **Express**.

## Para rodar a aplicação:

```shell
  $ npm install
  $ npm run dev
```

---

## KNEX - Banco de dados

Migration é o nome dos arquivos que criam os bancos de dados e tabelas.
Configuração básica:

```json
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },
```

## Para criar o Banco de Dados

```shell
npm run knex migrate:make
```

---

## Sobre o projeto

O **Ecoleta** é um projeto que visa ajudar doadores de produtos reciclável a encontrar pontos de coleta nas redondezas.
