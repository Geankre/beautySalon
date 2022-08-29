# <div align = 'center'> AFIRMAJOBS </div>
<br>

<br>
<div align = "center">
<img src='./assets/BeautySalon-tela1.png' width = 1000 alt = 'afirmajobs'

</div>
<br>

<div align = "center">

> Projeto Case
 
</div>

<br>
<div align ='justify'>

#  Sobre

O setor de beleza tem ganho grande espaço no mercado brasileiro e atraído vários investidores. Um problema comum entre os serviços de beleza são os sistemas de agendamento dos procedimentos e os processos, estes são extremamente inflexíveis para se adaptar a cada tipo de operação e possuem 
um alto custo mensal. A Beauty Salon é uma plataforma desenvolvida afim de facilitar a vida de clientes e gestores que estão à frente de salões e barbearias.
O projeto é uma API REST, usando Node.js e o banco de dados relacional MySql. 

#  Arquitetura 

<div align = "justify">

Esse projeto foi construído utilizando o padrão de arquitetura de software MVC, acrônimo para Model-View-Controller ou Modelo-Visão-Controle.

A separação em camadas faz com que a aplicação fique leve e funcione de forma independente, permitindo que uma mesma lógica de negócios possa ser acessada e visualizada através de várias interfaces.

</div>

```

  📁 BEAUTYSALON
   |
   |---📁 assets
   |
   |---📁 src
   |    |
   |    |--📄 app.js
   |    |
   |    |--📁 config
   |    |    |--📄 mysqlConfig.js
   |    |
   |    |--📁 controllers
   |    |    |--📄 clientController.js
   |    |    |--📄 professionalController.js
   |    |    |--📄 scheduleController.js
   |    |    |--📄 serviceController.js
   |    |    |--📄 unitController.js
   |    |  
   |    |--📁 routes
   |    |    |--📄 clientRoutes.js
   |    |    |--📄 professionalRoutes.js
   |    |    |--📄 scheduleRoutes.js
   |    |    |--📄 serviceRoutes.js
   |    |    |--📄 unitRoutes.js   
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock,json
   |- 📄 package.json
   |- 📄 server.js

```
# Rotas

<br>

## Métodos POST/GET/PUT/DELETE - *Cliente* 
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | localhost:PORT/client/signup          |    Cadastra novos clintes                 |
|  `POST`  | localhost:PORT/client/login          |    Permite acesso a clintes cadastrados
|  `GET`   | localhost:PORT/client/all                    |    Lista de todos os clintes cadastrados                      |                                    |
|   `PATCH`  |  localhost:PORT/client/update/:id       |       Atualiza as informações do clinte buscando por ID                  |
| `DELETE` |  localhost:PORT/client/delete/:id        |                      Deletar cadastro do clintes buscando por ID          |

</div>

<br>

## Métodos POST/GET/PUT/DELETE - *Profissional* 
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | localhost:PORT/professional/signup          |    Cadastra novos profissionais                 |
|  `POST`  | localhost:PORT/professional/login          |    Permite acesso a Profissionais cadastrados
|  `GET`   | localhost:PORT/professional/all                    |    Lista de todos os profissionais cadastrados                      |                                    |
|   `PATCH`  |  localhost:PORT/professional/update/:id       |       Atualiza as informações do profissional buscando por ID                  |
| `DELETE` |  localhost:PORT/professional/delete/:id        |                      Deletar cadastro do profissionais buscando por ID          |

</div>
<br>

## Métodos POST/GET/PUT/DELETE - *Serviços* 
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | localhost:PORT/service/create          |    Cadastra novos serviços                 |
|  `GET`   | localhost:PORT/service/all                    |    Lista de todos os serviços cadastrados                      |                                    |
|   `PATCH`  |  localhost:PORT/service/update/:id       |       Atualiza as informações do serviço buscando por ID                  |
| `DELETE` |  localhost:PORT/service/delete/:id        |                      Deletar cadastro do serviços buscando por ID          |

</div>

## Métodos POST/GET/PUT/DELETE - *Unidades* 
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | localhost:PORT/unit/create          |    Cadastra novos unidades de atendimento                 |
|  `GET`   | localhost:PORT/unit/all                    |    Lista de todos as unidades cadastradas                      |                                    |
|   `PATCH`  |  localhost:PORT/unit/update/:id       |       Atualiza as informações da unidade buscando por ID                  |
| `DELETE` |  localhost:PORT/unit/delete/:id        |                      Deletar cadastro de uma unidade buscando por ID          |

</div>

## Métodos POST/GET/PUT/DELETE - *Agendamento* 
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | localhost:PORT/schedule/signup          |    Cadastra novo agendamento de sessão              |
|  `GET`   | localhost:PORT/schedule/all                    |    Lista de todos os agendamentos do usuário                     |                                    |
|   `PATCH`  |  localhost:PORT/schedule/update/:id       |       Atualiza as informações do agendamento buscando por ID                  |
| `DELETE` |  localhost:PORT/schedule/delete/:id        |                      Deletar agendamento buscando por ID          |

</div>
<br>

# Tecnologias Utilizadas
<br>

Para que fosse possível a execução desse projeto, foi necessário a utilização de algumas dependências, descritas a seguir:

## ⚙️Dependências do Projeto

<div align = "justify">

Para que fosse possível a execução desse projeto, foi necessário a utilização de algumas dependências, descritas a seguir:


- [Express](https://www.npmjs.com/package/express) - Framework para aplicativo da web do Node.js;
<br>

- [Cors](https://www.npmjs.com/package/cors) - Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
 <br>

 - [mysql](https://www.npmjs.com/package/mysql) - É uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre o MySql e a estrutura de aplicativo da web Express.
 <br>

 - [Dotenv-safe](https://www.npmjs.com/package/dotenv-safes) - Carrega variáveis de ambiente de um arquivo .env para process.env.
 <br>
 - [Bcrypt](https://www.npmjs.com/package/bcryptjs) - Método de criptografia do tipo hash para senhas baseado no Blowfish.
 <br>

 - [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - É um método definido na RFC 7519 para autenticação remota entre duas partes. Ele é uma das formas mais utilizadas para autenticar usuários em APIs RESTful.

<br>

## ⚙️Dependências de desenvolvimento

- [Nodemon](https://www.npmjs.com/package/nodemon) - Ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;
<br>

# Instalação
<br>

1. Entre na pasta onde você deseja clonar o repositório. Abra o **git** nela e digite: 

    ```bash
    $ git clone https://github.com/Geankre/beautySalon
    ```

2. Digite a linha abaixo para entrar na pasta correta: 

   ```bash
    $ cd beautysalon
     ```

3. Escreva a seguinte linha para instalar as dependências utilizadas nesse projeto: 

   ```bash
    $ npm install
    ```
4. Inicie o servidor com o comando: 

   ```bash
    $ npm run dev
    ```   
<br>

# Testando a API 
<br>
 Acesse através do Postman:


- Importe a coleção para teste deste servidor clicando [aqui](https://www.getpostman.com/collections/82e172c0005e2c6147e3)!

- Copie o link acima e, no [Postman](https://www.postman.com/downloads/), clique em *Import* -> *Link* (cole o link) -> *Continue* -> *Import*.

- Ou forke diretamente para o seu Postman através do link:<div align = "justify"> [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21749615-ab58573a-d513-4cc9-9bd8-b92faba3273e?action=collection%2Ffork&collection-url=entityId%3D21749615-ab58573a-d513-4cc9-9bd8-b92faba3273e%26entityType%3Dcollection%26workspaceId%3D45716587-bef7-4129-8bb5-954394cd60fe) </div>

<br>


 


