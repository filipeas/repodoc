# REPODOC
## Sistema de gestão de documentações de API.
* Versão 0.0.0

## WIKI do Projeto
[Acesse nossa wiki e veja toda a estrutura planejada para o sistema](https://github.com/filipeas/repodoc/wiki)

## Como rodar em localhost
O projeto possui uma instância no docker. Por isso, basta clonar o projeto e executar a instalação do mesmo no diretório com os seguintes comandos:

``` yarn ```

Depois tenha certeza de ter o Docker instalado na sua máquina. Após isso execute:

``` docker-compose up ```

## Como fazer deploy no heroku
1. Faça login do container:

``` heroku container:login ```

2. Acesse o diretório do projeto e execute:

``` heroku create ```

2. (opcional) Renomeie o nome do app:

```
heroku git:remote -a NOME_DO_APP_CRIADO
heroku apps:rename repodoc
```

3. Buildar a imagem e dar push do container:

``` heroku container:push web ```

4. Fazer release da imagem:

``` heroku container:release web ```

5. (opcional) Abra outro terminal e verifique o processo no heroku:

``` heroku logs --tail ```

6. Se tudo der certo, abra o navegador na página do projeto:

``` heroku open ```

Após isso, basta ir no app criado na conta do heroku e criar um banco de dados postgres na conta. Acesse a aba ``` resources ``` e adicione o heroku-postgres do app.

Após isso, pegue as credenciais do banco de dados e vá até a aba ``` settings ``` no app e clique em Reveal Config Vars. Adicione todas as variáveis de ambiente do .env do projeto nessa parte, e lembre-se de colocar os dados do banco de dados que você pegou na criação do banco no passo atrás.

* OBS1: Pode ocorrer um erro com ssl. Então execute o comando abaixo para corrigir (antes do passo 4. Isso vai forçar o app no heroku não verificar ssl):

``` heroku config:set PGSSLMODE=no-verify ```

[Mais informações desse erro no link a seguir](https://catalins.tech/nodejs-postgresql-heroku-error-no-pghbaconf-entry-for-host-ssl-off)

* OBS2: O heroku só olha o arquivo Dockerfile, então ele deve estar bem configurado no momento da implantação.

* OBS3: O heroku usa uma porta aleatória toda vez quando executa um release para o app. Então é necessário deixar o arquivo Dockfile configurado para escutar a porta $PORT com o host 0.0.0.0. Além disso, no arquivo server.js, precisa configurar o .listen para escutar primeiro a porta do heroku e depois a porta do .env. Dessa forma é possível manter essa configuração para que rode tanto no heroku quanto em localhost.

* OBS4: Para configurar o deploy com github actions é necessário:
1. criar arquivo heroku.yml e apontar arquivo dockerfile
2. configurar workflow (nesse projeto o workflow está configurado para fazer deploy para o heroku apenas na branch master)
3. conectar o repositório desse projeto no app criado no heroku, na aba Deploy. É importante marcar a branch master e ativar deploy automático.

## Quer contribuir?
Tem alguma melhoria para adicionar no projeto?
1. Faça um fork do projeto e submeta suas alterações!
