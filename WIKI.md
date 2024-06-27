# ChatDeViz - Chat para Design de Visualização

![Banner com o texto ChatDeViz, o nome do site](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/banner.png)

## Descrição
O ChatDeViz é um sistema que permite utilizar as capacidades do Large Language Model (LLM) da OpenAI por meio do seu chat, o ChatGPT, para gerar e avaliar respostas no processo inicial de design de visualização de dados. Esse sistema utiliza o modelo para recuperar as informações adicionadas no treinamento e a gerar novas informações para ajudar a usuários não especialistas da área de visualização de dados a realizarem pesquisas e avaliações de possibilidades de resposta de visualização de dados.

O ChatDeViz permite que usuários não especialistas em visualização de dados possam, por meio de um caminho guiado pelo sistema, coletar informações sobre como e quais visualizações utilizar para possivelmente resolver os seus problemas de visualização de dados.

Neste sistema o usuário poderá inserir o possível consumidor da visualização, o seu objetivo e esperar que o sistema gere as possibilidades de resposta. Em outro fluxo, o usuário também poderá pedir ao sistema para avaliar a qualidade de algumas visualizações com relação a um determinado objetivo e indicar qual dentre elas é a mais adequada.

Por se tratar de usuários não especialistas em visualização de dados, esse sistema buscou embutir em uma interface de interação comandos padrão para gerar e avaliar as visualizações de dados

Por exemplo, esses usuários podem ser gerentes de loja que desejam apresentar o quantitativo de venda de uma loja em relação a um determinado período de tempo, ou um professor que deseja mostrar em uma aula de biologia o desmatamento da Amazônia em relação aos governos federais.

O sistema ainda está em construção pois parte de um recorte do meu trabalho de dissertação. O trabalho busca avaliar a capacidade do ChatGPT para ajudar no processo de design de visualização de dados, avaliando o modelo em cada uma das possíveis etapas do processo.

## Visão de Projeto

O uso de LLMs está cada vez mais em pauta não somente no ambiente acadêmico, mas também em nosso cotidiano, em jornais, redes sociais ou até em roda de conversa informal com os amigos.

É possível notar que os modelos de linguagem estão sendo utilizados para responder perguntas simples como "Quem foi o autor do clássico Romeu e Julieta?", bem como para ações mais complexas como as de geração de código ou até mesmo para ajudar no processo de design de visualização de dados.

!["Imagem mostrando a resposta do ChatGPT ao perguntar 'Quem foi o autor do clássico Romeu e Julieta?' "](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/exemploPergunta.png)

Para esse sistema focaremos no uso prático do modelo para duas ações relacionadas ao processo de design de visualização de dados, são elas: geração de ideias de visualização de dados; e avaliação de possíveis respostas para o problema de visualização de dados.

***

### Cenário Positivo 1

Tânia, coordenadora do curso de Design Digital em uma universidade pública do Brasil, é uma pessoa que, para trabalhar melhor em sua rotina de gestora, gosta de ter as informações que mais utiliza de uma maneira visual. Dessa forma, quando qualquer pessoa desejar saber sobre a informação, ela poderá apenas indicar, sem necessariamente explicar.

A coordenadora precisará apresentar as informações sobre o rendimento dos alunos na cadeira de Fundamentos de Programação para o conselho do Campus. Para isso, ela utilizará o ChatDeViz para descobrir quais as possíveis visualizações que poderia usar para mostrar de maneira clara os dados. Ela poderá utilizar essas informações para ajudar a construir a visualização com base na descrição e variáveis indicadas.

### Cenário Positivo 2 

Após o mês de novembro, Carlos, gerente do setor de vendas de uma loja de produtos variados (Loja A), precisa apresentar para todo o grupo de investidores o faturamento do mês, após a promoção de Black Friday, separado por categoria de produtos.

A loja conta com aproximadamente 20 macro categorias de produtos, o que é um número alto para apresentar em um gráfico de pizza, e por ser uma apresentação em um projetor com resolução 16:9, colocar em um gráfico de barras horizontais também não seria uma boa ideia. Talvez um gráfico de barras verticais ou um gráfico de linhas possam ser boas visualizações.

Carlos deseja utilizar o ChatDeViz para avaliar, dentre as possibilidade de visualizações que ele tem em mente, qual poderia se encaixar no seu contexto, tendo pra isso uma explicação e uma possível nota para cada visualização.

### Cenário Negativo 1

Tânia, coordenadora do curso de Design Digital que precisava apresentar as informações sobre o rendimento dos alunos na cadeira de Fundamentos de Programação para o conselho do Campus, recebeu respostas que não apresentavam quais as variáveis nem como montar a visualização. Ela se sentiu frustrada pois esperava que o sistema respondesse de maneira coerente.

Por se tratar de um sistema linear e fechado para alterações no código, ela não pôde alterar o comando e acabou desistindo de usar a ferramenta.

### Cenário Negativo 2

Carlos, o gerente do setor de vendas da Loja A, que precisava apresentar para todo o grupo de investidores o faturamento do mês, inseriu as possibilidades de resposta no modelo, porém o modelo não entendeu corretamente a formatação da entrada e respondeu com uma única resposta a avaliação de todos os exemplos.

Ele percebeu o problema e percebeu que, para resolvê-lo, teria que inserir novamente as informações e, por estar sem tempo, resolveu abandonar o sistema.

***

## Documentação Técnica do Projeto

Este sistema está fundamentado em duas grandes linhas de pesquisa, a de visualização de dados e a de LLMs. Essa fundamentação permitiu que nós explorássemos as qualidades das LLMs para ajudar em outra na linha de visualização de dados e assim criar um sistema para ajudar a usuários não especialistas no processo inicial do design de uma visualização.

Nesta seção apresentamos a arquitetura e o código que utilizamos para construir essa ferramenta. Esses dois pontos poderão ajudar a lhe guiar para estender esse trabalho ou criar algo novo usando este como base.

### Arquitetura do sistema

Para melhor entendimento da arquitetura do projeto, dividimos esta seção nas duas principais funcionalidades do sistema até o momento atual, a geração de opções de resposta e a avaliação de uma lista de possíveis visualizações.

#### 1. Geração de opções de resposta

O primeiro passo para o projeto, quando pensado no problema a ser resolvido, foi criar comandos de entrada para o modelo que demandassem menos esforço do usuário para criar uma lista de opções de visualizações de dados.

Esse problema demandou de nós um movimento de iteração entre a geração de resposta e os ajustes para melhorar as informações. Na primeira tentativa de execução, por não ter definido corretamente o papel do modelo, ele retornou, mas uma única resposta que não falava necessariamente de visualização, mas sim fornecia uma à pergunta.

> **Exemplo**
> Pergunta: Como apresentar os casos da Covid-19 que demandaram de internação em UTI no mês de maio 2021 em relação a maio de 2022?
> Resposta: Os casos de internação em UTI diminuiu em X.X%

Avançando nesse processo de pesquisa sobre um prompt para o modelo, percebemos que, quando dado um papel para o assistente e fazemos pedidos mais claros, o modelo respondia melhor. Com isso chegamos ao seguinte papel do modelo:

> " Você, como um assistente no processo de design de visualização de dados, deverá responder a pergunta com uma lista de possibilidades de forma de visualização de dados como resposta e retornar em uma lista no formato JSON "

Em seguida focamos em produzir uma pergunta padrão que pudesse ter espaços de texto substituídos sem perder o sentido da frase, mantendo, na maioria dos casos, o foco em quais possibilidades de visualização possíveis para o caso. Esse esforço resultou na seguinte frase:

>"Eu, como um **[usuário criador]**, preciso **[desejo do usuário criador]**, quais poderiam ser as melhores visualizações de dados para isso?"

As informações marcadas para entradas, nos testes iniciais, foram inseridas manualmente, mas em seguida puderam ser adicionas pelos usuários no decorrer do uso. Esse caminho levou à elaboração de um prompt que gerasse pelo menos 3 opções de resposta de visualização de dados ligadas a cada pergunta.

Além do nome das 3 visualizações de resposta, o comando foi projetado para que o sistema desse também uma descrição do tipo de visualização e as variáveis necessárias para construir a visualização.

#### 2. Avaliação de uma lista de possibilidades

Com as respostas produzidas pelo sistema ou identificadas pelo usuário como possíveis para serem aplicadas a um problema, o usuário pode pedir ajuda ao modelo para entender os pontos positivos ou classificar as opções para o cenário.

Para isso, precisamos formatar um comando padrão que recebe uma lista de opções, com possíveis descrições ou não, e, se houvessem as variáveis. Nesse caso, o modelo deveria retornar uma descrição da avaliação da opção de visualização de dados e uma nota em relação às demais opções.

### Sobre o código

Inicialmente o código foi produzido em [Python](https://www.python.org/) como forma de acelerar a produção do material de estudo para a pesquisa. A linguagem é comumente usada para interligar a [API da OpenAI](https://platform.openai.com/docs/api-reference/chat), criadora do ChatGPT, sendo assim mais simples de encontrar documentação, deixando mais tempo para focar na produção dos comandos.

Com o Python conseguimos iniciar a montagem, definir os comandos e pensar em como deixar as lacunas para serem inseridas pelos usuários do sistema. Mas, por pensarmos em uma solução que pudesse ser acessada de qualquer dispositivo, pensamos em construir um sistema Web com o auxilio do [ReactJS](https://platform.openai.com/docs/api-reference/chat).

O ReactJS é uma biblioteca do JavaScript que permite construir interfaces modulares com os componentes. Essa biblioteca utiliza o Node.js para executar, o que permitiu que pudéssemos utilizar outras bibliotecas para interligar, por meio da API, ao ChatGPT.

Utilizamos a API Representational State Transfer (REST) que português significa "transferência de estado representacional", para enviar e receber os dados da API. Para apresentar as informações na interface, a fim de agilizar o processo de desenvolvimento, utilizamos o [MUI](https://mui.com/), uma biblioteca de interface para o ReactJS.

### Testes manuais

Para produzir o comando que utilizamos neste trabalho foram demandados dezena de testes. Com versão final, até então, realizamos a geração de 15 resultados e obtivemos o formato próximos em todos eles.

A possibilidade de realizar um teste End-to-End foi descartada pois, por se tratar de um modelo de linguagem que gera respostas, não havia uma resposta exata para ser verificada. O que se espera para um futuro próximo é a disponibilização da ferramenta para os possíveis usuários e a realização de uma observação de uso.

### Interfaces do sistema

O sistema conta com três interfaces que se interligam e permitem uma navegação interna à página ou externa, são elas: página inicial, gerar opções e analisar opções.

Para melhor entendimento, as imagens serão adicionadas em ordem de navegação.

### Página inicial
![Página inicial](/assets/gerarOpcoes/0.jpeg)

### Gerar opções
![Preenchendo informações do trabalho](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/gerarOpcoes/1.jpeg)
![Preenchendo informações do problema](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/gerarOpcoes/2.jpeg)
![Preenchendo informações do visualizador](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/gerarOpcoes/3.jpeg)
![Conferência do comando para geração](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/gerarOpcoes/5.jpeg)
![Carregando informações](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/gerarOpcoes/6.jpeg)
![Apresentando os resultados](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/gerarOpcoes/7.jpeg)

### Analisar opções
![Preenchendo informações do trabalho](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/avaliarOpcoes/1.jpeg)
![Preenchendo informações do problema](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/avaliarOpcoes/2.jpeg)
![Preenchendo a lista de ideias de visualização de dados para o problema](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/avaliarOpcoes/3.jpeg){ width=50% }
![Conferência do comando para geração](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/avaliarOpcoes/4.jpeg)
![Carregando informações](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/avaliarOpcoes/5.jpeg)
![Apresentando os resultados](https://github.com/eoqmoreno/ChatDeViz/blob/main/assets/avaliarOpcoes/6.jpeg)

## Manual de Utilização

```
{ 
  Guia de Instruções:
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  Para [Tarefa A: GERAR POSSIBILIDADES DE VISUALIZAÇÃO DE DADOS] faça:
  Passo 1: O usuário deverá selecionar no menu lateral a opção 'Gerar opções'.
  Passo 2: Deverá preencher o campo com as informações sobre o cargo ou trabalho realiza.
  Passo 3: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 4: Deverá preencher o campo com as informações sobre o problema que deseja resolver com a visualização.
  Passo 5: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 6: Deverá preencher o campo com o perfil do usuário visualizador do resultado de design.
  Passo 7: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 8: Poderá conferir se o comando gerado pelo sistema compreende as suas necessidades.
  Passo 9: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 10: Poderá conferir se o resultado gerado pelo sistema compreende as suas necessidades.

  Exceções ou potenciais problemas:
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  Se [Condição Prevista C1: ERRO DE DIGITAÇÃO]
     {
     Então faça:
     Passo 1: Deverá selecionar o passo em que errou o preenchimento do texto no menu de progresso no topo da página.
     Passo 2: Deverá alterar o texto.
     Passo 3: Deverá clicar em 'PRÓXIMO' para avançar na interação.
     É porque: No campo em que é possível conferir o comando de geração não é possível alterar o texto.
     }


  Para [Tarefa B: AVALIAR POSSIBILIDADES DE VISUALIZAÇÃO DE DADOS] faça:
  Passo 1: O usuário deverá selecionar no menu lateral a opção 'Avaliar opções'.
  Passo 2: Deverá preencher o campo com as informações sobre o cargo ou trabalho realiza.
  Passo 3: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 4: Deverá preencher o campo com as informações sobre o problema que deseja resolver com a visualização.
  Passo 5: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 6: Deverá preencher o campo com as opções de ideias de visualização para o problema.
  Passo 7: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 8: Poderá conferir se o comando gerado pelo sistema compreende as suas necessidades.
  Passo 9: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 10: Poderá conferir se o resultado gerado pelo sistema compreende as suas necessidades.

  Exceções ou potenciais problemas:
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  Se [Condição Prevista C1: ERRO DE DIGITAÇÃO]
     {
     Então faça:
     Passo 1: Deverá selecionar o passo em que errou o preenchimento do texto no menu de progresso no topo da página.
     Passo 2: Deverá alterar o texto.
     Passo 3: Deverá clicar em 'PRÓXIMO' para avançar na interação.
     É porque: No campo em que é possível conferir o comando de geração não é possível alterar o texto.
     } 
}

  Se [Condição Prevista C2: O MODELO NÃO ENTENDEU AS OPÇÕES]
     {
     Então faça:
     Passo 1: Deverá selecionar o passo 'Possibilidades' no menu de navegação superior.
     Passo 2: Deverá alterar o texto.
     Passo 3: Deverá clicar em 'PRÓXIMO' para avançar na interação.
     Passo 4: Poderá conferir se o comando gerado pelo sistema compreende as suas necessidades.
     Passo 5: Deverá clicar em 'PRÓXIMO' para avançar na interação.
     Passo 6: Poderá conferir se o resultado gerado pelo sistema compreende as suas necessidades.

     É porque: O campo de texto é aberto e permite que o usuário insira as informações sem uma formatação específica
     } 
}

```