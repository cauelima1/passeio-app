# PasseioApp

Projeto desenvolvido utilizando Angular CLI.

Se trata de uma aplicação com login oauth do Google, onde é possível cadastrar, consultar e avaliar lugares.

# Tecnologias utilizadas

- Angular CLI
- TypeScript
- HTML
- Tailwind CSS
- Google oauth

# Build da aplicação via Docker

A aplicação 
1. Construir a Imagem Docker da API, execute:
No terminal, dentro da da pasta API do projeto, execute:
docker build -t passeio-api .

Esse comando irá criar uma imagem chamada passeio-api com base nas instruções do Dockerfile.

2. Executar o container da API
Após a imagem ser construída, rode o container com:
docker run -p [sua porta]:4000 passeio-api

3. Construir a imagem Docker da aplicação
No terminal, dentro da raiz do projeto, execute:
docker build -t passeio-app .


Esse comando irá criar uma imagem chamada passeio-app com base nas instruções do Dockerfile.

4. Executar o container
Após a imagem ser construída, rode o container com:
docker run -p [sua porta]:80 passeio-app



A aplicação estará disponível em http://localhost:[porta da aplicação]
