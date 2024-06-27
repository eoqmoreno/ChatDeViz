# Seja bem-vindo(a) ao ChartDeViz
![Baner com o texto ChatDeViz, o nome do site](/assets/banner.png)

## Sobre o projeto

O ChatDeViz é um sistema que permite utilizar as capacidades do Large Language Model (LLM) da OpenAI por meio do seu chat, o ChatGPT, para gerar e avaliar respostas no processo inicial de design de visualização de dados. Esse sistema utiliza o modelo para recuperar as informações adicionadas no treinamento e a gerar novas informações para ajudar a usuários não especialistas da área de visualização de dados a realizarem pesquisas e avaliações de possibilidades de resposta de visualização de dados.

O ChatDeViz permite que usuários não especialistas em visualização de dados possam, por meio de um caminho guiado pelo sistema, coletar informações sobre como e quais visualizações utilizar para possivelmente resolver os seus problemas de visualização de dados.

Neste sistema o usuário poderá inserir o possível consumidor da visualização, o seu objetivo e esperar que o sistema gere as possibilidades de resposta. Em outro fluxo, o usuário também poderá pedir ao sistema para avaliar a qualidade de algumas visualizações com relação a um determinado objetivo e indicar qual dentre elas é a mais adequada.

Por se tratar de usuários não especialistas em visualização de dados, esse sistema buscou embutir em uma interface de interação comandos padrão para gerar e avaliar as visualizações de dados

Por exemplo, esses usuários podem ser gerentes de loja que desejam apresentar o quantitativo de venda de uma loja em relação a um determinado período de tempo, ou um professor que deseja mostrar em uma aula de biologia o desmatamento da Amazônia em relação aos governos federais.

O sistema ainda está em construção pois parte de um recorte do meu trabalho de dissertação. O trabalho busca avaliar a capacidade do ChatGPT para ajudar no processo de design de visualização de dados, avaliando o modelo em cada uma das possíveis etapas do processo.

___

## Requisitos

Por se tratar de um sistema construído com o React exitem algumas demandas técnicas para executar a ferramenta localmente.

### 1. Instalar o Node.js
Node.js é uma ambiente de execução de JavaScript disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas.

[Ir para a página](https://nodejs.org/pt)

### 2. Instalar o npm
O npm é o maior registro de software do mundo. Desenvolvedores de código aberto de todos os continentes usam o npm para compartilhar e emprestar pacotes, e muitas organizações usam o npm para gerenciar o desenvolvimento privado também.

[Ir para a página](https://www.npmjs.com/)

### 4. Instalar o git

O Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde pequenos até Projetos muito grandes com rapidez e eficiência.

[Ir para a página](https://git-scm.com/)

### 3. Clonar o repositório

1. Abra o terminal.
2. Navegue até o local onde deseja clonar o repositório.
3. Digite o seguinte comando:
```console
git clone https://github.com/eoqmoreno/ChatDeViz.git
```
4. Pressione ENTER para criar o clone local.
5. Navegue até o projeto clonado.

### 4. Instalar bibliotecas

Digite o seguinte comando:
```console
npm install
```

### 5. Adicionando a chave da OpenAI
1. Vá até o seu perfil da OpenAI.
2. Crie uma [chave da API](https://platform.openai.com/settings/profile?tab=api-keys).
3. Copie a chave gerada.
4. Crie um arquivo com o nome `.env` no mesmo nível do README no projeto
5. Crie uma variável com o nome `REACT_APP_CHATGPT_KEY` e atribua a sua chave, dessa forma:
```console
REACT_APP_CHATGPT_KEY =  "[ SUA CHAVE AQUI ]"
```
6. salve o arquivo.

### 6. Iniciando o projeto
Digite o seguinte comando:
```console
npm start
```
