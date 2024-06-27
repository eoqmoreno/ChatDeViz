# ChatDeViz - Chat para Design de Visualização

![Baner com o texto ChatDeViz, o nome do site](/assets/banner.png)

## Descrição
<!-- Inclua na breve descrição as seguintes informações: -->
<!-- - a principal função de seu programa (e.g. gerenciador de datasets) -->
O ChatDeViz é um sistema que permite utilizar as capacidades do Large Language Model (LLM) da OpenAI por meio do seu chat, o ChatGPT, para gerar e avaliar respostas no processo inicial de um processo de design de visualização de dados. Esse sistema utiliza o modelo para recuperar as informações adicionadas no treinamento para ajudar a usuários não especialistas da área de visualização de dados a realizarem pesquisas e avaliações de possibilidades de resposta de visualização de dados.

<!-- - exemplos de funções específicas relevantes que o programa oferece (e.g. criação, organização, manutenção, busca e recuperação de datasets) -->
O ChatDeViz permite que usuários não especialistas em visualização de dados possam por meio de um caminho guiado pelo sistema, coletar informações sobre como e quais visualizações utilizar para possivelmente resolver os seus problemas de visuaização de dados.

Neste sistema o usuário poderá inseir o possível usuário da visualização, a sua definição do problema e esperar que o sistema gere as possibilidades de resposta. Em outro fluxo, o usuário também poderá pedir ao sistema para avaliar a qualidade e indicar qual dentre elas pode melhor ajudar no seu problema.

<!-- - que usuário(s) o seu programa foi concebibo para atender primordialmente (e.g. pesquisadores especializados em [QUE ÁREA?], profissionais especializados em [QUE ÁREA?], professores [DE QUE DISCIPLINAS, EM QUE GRAU, ETC.], estudantes [DE QUE DISCIPLINAS, EM QUE GRAU, ETC.]) -->

Por se tratar de usuários não especialistas em visualização de dados, esse sistema buscou embutir em uma interface de interação comandos padrão para gerar e avaliar as visualizações de dados

Esses usuários podem ser gerentes de loja que desejam apresentar o quantitativo de venda de uma loja em relação a um determinado período de tempo, ou um professor que deseja mostrar em uma aula de biologia o desmatamento da Amazonia em relação os governos federais.

<!-- - a natureza do seu programa (e.g. prova (parcial ou completa) de conceito, ferramenta utilitária (acabada ou inacabada), módulo de sistema em desenvolvimento (por você ou por colaboradores) -->

O sistema ainda está em construção pois parte de um recorte do meu trabalho de discertação. O trabalho busca avaliar a capacidade do ChatGPT para ajudar no processo de desing de visualização de dados, avaliando o modelo em cada uma das possiveis etapas do processo.

<!-- - ressalvas, se houver (informe de maneira breve, porém clara, qualquer ressalva de uso de que os interessados em seu programa devem estar cientes)  -->

## Visão de Projeto

O uso de LLMs está cada vez mais em pauta não somente no ambiente acadêmico, mas também em pautas do cotidiano, com em jornais, redes sociais ou até em roda de conversa informal com os amigos.

É possível notar que os modelos de linguagem estão sendo utilizados para responder perguntas simples como "Quem foi o autor do clássico Romeu e Julieta?", bem como para ações mais complexas como as de geração de código ou até mesmo para ajudar no processo de design de visualização de dados.

!["Imagem mostrando a resposta do ChatGPT ao perguntar 'Quem foi o autor do clássico Romeu e Julieta?' "](/assets/exemploPergunta.png)

Para esse sistema focaremos no uso prático do modelo para duas ações relacionadas ao processo de desing de visualização de dados, são ele: geração de ideias de visualização de dados; e avaliação de possíveis respostas para o problema de visualização de dados.

<!-- Esta seção deve conter **no mínimo 4 cenários** (**2 de cada tipo indicado**), cuja função é orientar não apenas o projeto do software, mas também o seu uso e eventual evolução. No caso de **projeto**, os cenários expressam a INTENÇÃO DO CRIADOR, funcionando como uma bússola para manter ou corrigir rumos. Os cenários podem ser continuamente revisados, a fim de que ao final do projeto estejam em plena sintonia com o que o programa é, faz e não faz. No caso de **uso**, os cenários orientam a INTERPRETAÇÃO DO USUÁRIO ao interagir com o programa, permitindo que possa julgar se está fazendo um uso esperado ou inesperado do programa, o que ajuda muito a decidir o que fazer em casos de eventuais erros de interação ou execução. Finalmente, no caso de **evolução** do programa, os cenários ORIENTAM PROGRAMADORES COLABORADORES a como, quando e se reutilizar e modificar o programa para novas finalidades ou condições.

<div style="margin-left:10px; background:#D3E6F6; padding:3px;">
<p>Onde aprender sobre o que são cenários, para que servem, com que se parecem, e mais:<br />
<a href="https://www.sciencedirect.com/science/article/pii/S0953543800000230#FIG2" target="_New"><b>Artigo de John Carroll (1999)</b></a>.</p>

<p>O objetivo desta parte do relatório é levar vocês a pensarem sobre a experiência **do outro** com o programa de vocês. Este exercício é muito simples e extremamente benéfico para o resultado final do programa. Aproveitem a oportunidade.<p>
</div>  -->

***

### Cenário Positivo 1

Tânia, coordenadora do curso de Design Digital em uma universidade pública do Brasil, é uma pessoa que para trabalhar melhor em sua rotina de gestora gosta de ter as informações que mais utiliza de uma maneira visual, dessa forma, quando qualquer pessoa que deseje saber sobre a informação ela poderá apenas indiciar, sem necessariamente explicar.

A coordenadora precisará apresentar as informações sobre o rendimento dos alunos na cadeira de Fundamentos de Programação para o concelho do Campus. Para isso ela utilizará o ChatDeViz para descobrir quais as possíveis visulizações que poderia usar para mostrar de maneira clara a visualização. Ela, poderá utilizar essas informções para ajudar a construir a visualização com base na descrição e variáveis indicadas.

<!-- [Esta é uma tradução do Cenário do Artigo de John Carroll:] 
Harry está interessado em problemas com pontes; quando criança, ele viu uma pequena ponte desabar quando seus apoios foram minados após uma forte chuva. Ele abre o estudo de caso da Ponte Tacoma Narrows e pede para ver o filme de quando ela desmoronou. Ele fica chocado ao ver a ponte primeiro balançar, depois ondular e, por fim, se desprender. Ele rapidamente reproduz o filme e, em seguida, abre o módulo do curso associado a movimento harmônico. Ele navega pelo material do curso (sem fazer os exercícios), salva o trecho do filme em seu caderno com uma anotação em áudio e, em seguida, faz uma consulta em linguagem natural para encontrar referências a outras manifestações físicas do movimento harmônico. Aí, ele passa para um estudo de caso envolvendo flautas e pícolos

> Como é explicado no artigo, este cenário "evoca" várias propriedades de uma tecnologia que Harry está usando como auxílio para seus estudos escolares. Reparem que não há nenhum detalhamento de "como" Harry abre o estudo de caso, como reproduz o filme, como salva o vídeo em seu caderno, como faz a anotação em áudio, como faz outra busca. Porém, neste curto parágrafo já está muito claro o que a tecnologia se propõe a fazer e quais as suas principais funções. Também está claro o perfil de pelo menos 1 dos tipos de usuários visados. Quando um programa tem vários usos e usuários visados, os cenários ajudam a balizar o que podemos esperar em cada caso. -->

### Cenário Positivo 2 

Após o mês de novembro, Carlos, gerente do setor de vendas do Carrefour, precisa apresentar para todo o grupo de investidores o faturamento do mês, após a promoção de Black Friday, separado por categoria de produtos.

A loja conta com aproximadamente 20 macro categorias de produtos, o que é um número alto para apresentar em um gráfico de Pizza, e por ser uma apresentação em um projetor com resolução 16:9, colocar em um gráfico de barras horizontais também não seja uma boa ideia e que talvez utilizar um gráfico de barras verticais ou um gráfico de linha possam ser boas visualizações.

Carlos deseja utilizar o ChatDeViz para avaliar dentre as possibilidade de visualizações que ele tem em mente, qual poderia se encaixar no seu contexto, tendo pra isso uma explicação e uma possível nota para cada visualização.

### Cenário Negativo 1

Tânia, coordenadora do curso de Design Digital que precisava apresentar as informações sobre o rendimento dos alunos na cadeira de Fundamentos de Programação para o concelho do Campus e recebeu respostas que não apresentavam quais as variáveis e como montar a visualização. Ela se sentiu frustada pois esperava que o sistema respondesse de maneira coerrente.

Por se tratar de um sistema linear e fechado para alterções no código, ela não pôde alterar o comando e acabou desistindo de usar a ferramenta.

<!-- [Vou usar aqui uma variante do cenário de Carroll para ilustrar o que é um cenário negativo:]
Harry está interessado em problemas com pontes; quando criança, ele viu uma pequena ponte desabar quando seus apoios foram minados após uma forte chuva. Ele abre o estudo de caso da Ponte Tacoma Narrows e pede para ver o filme de quando ela desmoronou. Porém, ao invés de aparecer um vídeo do acidente com aquela ponte, aparece uma tela com uma mensagem do reprodutor. Ele não entende muito bem a mensagem, mas parece que há uma configuração especial que ele tem que fazer no browser dele para que o vídeo seja reproduzido. Ele tenta fazer o que é indicado, mas não tem resultado positivo. Desanimado, ele desiste de ver aquele vídeo e procura outro exemplo para seu estudo sobre movimento harmônico.

> Este cenário ilustra o que pode acontecer por causa de uma limitação do programa. Não foram feitos testes exaustivos com todos os tipos de vídeo, em todos os browsers. Apenas os tipos atuais mais utilizados foram testados. Assim, pode ser que um vídeo em formato mais antigo ou com um reprodutor menos utilizado hoje não funcione corretamente. Na maioria destes casos, uma mudança de configuração no navegador (instruída pela própria interface do navegador) resolve o problema.  -->

### Cenário Negativo 2

Carlos, o gerente do setor de vendas do Carrefour, que precisava apresentar para todo o grupo de investidores o faturamento do mês, inseriu as possibilidades de resposta no modelo, porém o modelo não endenteu corretamente a formatação da entreda e respondeu com uma única resposta a avalição de todos os exemplos.

Ele percebeu o problema e percebeu que para resolve-lo teria que inserir novamente as informações e por está sem tempo resolveu abandonar o sistema.


<!-- [Coloque aqui o seu segundo cenário que expõe uma outra limitação do seu programa, ou um aspecto diferente da anterior, que não aparece no cenário negativo 1] -->

## Documentação Técnica do Projeto

Este sistema está fundamentados em duas grandes áreas, a de visualização de dados e a de LLMs. Essa fundação permitiu que nós pudessemos explocar as qualidades de uma área (LLMs) para ajudar em outra (visualização de dados) e assim criar um sistema para ajudar a usuários não especialistas no processo inicial do design de uma visualização.

Nesta seção apresentaremos a arquitetura e o código que utilizamos para contruir essa ferramenta. Esses dois pontos poderão ajudar a lhe guiar para extender esse trabalho ou criar algo novo usando este como base.

### Arquitetura do sistema

Para melhor entendimento da arquitetura do projeto dividiremos essa seção nas duas principais funcionalidades do sistema até o momento atual, a geração de opções de resposta e a avaliação de um lista de possibilidades.

#### 1. Geração de opções de resposta

O primeiro passo para o projeto, quando pensado no problema a ser resolvido, foi criar comandos de entrada para o modelo que demandassem menos esforço dos usuário para criar uma lista de opções de visualizações de dados.

Esse problema demandou de nós um movimento de iteração entre a geração de resposta e os ajustes para melhorar as informações. Na primeira tentativa de execução, por não ter definido corretamente o papel do modelo, ele retornou ao invés de uma possibilidade de resposta, uma única resposta e que não falava necessariamente de visualização, mas sim a resposta.

> **Exemplo**
> Pergunta: Como apresentar os casos da Covid-19 que demandaram de internação em UTI no mês de maio 2021 em relação a maio de 2022?
> Resposta: Os casos de internação em UTI diminuiu em X.X%

Avançando nesse processo de pesquisa sobre um prompt para o modelo foi percebido que o quando dado um papel para o assistente e usado pedidos mais claros o modelo respondia melhor. Com isso chegamos ao seguinte papel do modelo:

> " Você, como um assistente no processo de design de visualização de dados, deverá responder a pergunta com uma lista de possibilidades de forma de visualização de dados como resposta e retornar em uma lista no formato JSON "

Em seguida focamos em produzir uma pergunta padrão que pudesse ter espaços de texto substituidos sem perder o sentido da frase, mantendo, na maioria dos casos, o foco em quais possibilidades de visualização possíveis para o caso. Esse esforço resultou na seguinte frase:

>"Eu, como um **[usuário criador]**, preciso **[desejo do usuário criador]**, quais poderiam ser as melhores visualizações de dados para isso?"

As informções marcadas para entradas, nos testes iniciais foram inseridas manualmente, mas em seguinda puderam ser adicionas pelos usuários no decerrer do uso. Esse caminho levou a elaboração de um prompt que gerasse pelo menos 3 opções de resposta de visualização de dados ligadas a pergunta.

Além do nome das 3 opções de resposta, o comando foi projetado para que o sistema desse também uma descrição do tipo de visualização e as variáveis necessárias para construir a visualição.

#### 2. Avaliação de um lista de possibilidades

Com as respostas produzidas pelo sistema ou identificadas pelo usuário como possiveis para serem aplicadas a um problema, o usuário pode pedir ajuda ao modelo para entender os pontos positivos ou classificar as opções para o cenário.

Para isso precisamos formatar um comando padrão que receberia uma lista de opções, com possiveis descrições ou não, e, se houvessem, as variáveis. Nesse caso o modelo deveria retornar uma descrição da avaliação da opção de visulização de dados e uma nota em relação as demais opções.

### Sobre o código

Inicialmente o código foi produzido em [Python](https://www.python.org/) como forma de acelerar a produção do material de estudo para a pesquisa. A linguagem é comumente usada para interligar a [API da OpenAI](https://platform.openai.com/docs/api-reference/chat), criadora do ChatGPT, sendo assim mais simples de encontrar documentação, deixando mais tempo para focar na produção dos comandos.

Com o Python conseguimos inicar a montagem, definir os comandos e pensar em como deixar as lacunas para serem inseridas pelos usuários do sistema. Mas por pensarmos em uma solução que pudesse ser acessada de qualquer dispositivo, pensamos em construir um sistema Web com o auxilio do [ReactJS](https://platform.openai.com/docs/api-reference/chat).

O ReactJS é uma biblioteca do JavaScript que permite construir interfaces modulares com os componentes. Essa biblioteca utiliza o Node.js para executar, o que permitiu que pudessemos utilizar outras bibliotecas para interligar, por meio da API, ao ChatGPT.

Utilizamos a API Representational State Transfer (REST), em português significa "tansferência de estado representacional" para enviar e receber os dados da API. Para apresentar as informações na interface, a fim de agilizar o processo de desenvolvimento, utilizamos o [MUI](https://mui.com/), uma biblioteca de interface para o ReactJS.

## Interfaces do sistema

O sistema conta com três interfaces que se interligam e permitem uma navegação interna à página ou externa, são elas: página inicial, gerar opções e analisar opções.

Para melhor entendimento, as imagens serão adicionadas em ordem de navegação.

### Página inicial
![Página inicial](/assets/gerarOpcoes/0.jpeg){ width=50% }

### Gerar opções
![Preenchendo informações do trabalho](/assets/gerarOpcoes/1.jpeg){ width=50% }
![Preenchendo informações do problena](/assets/gerarOpcoes/2.jpeg){ width=50% }
![Preenchendo informações do visualizador](/assets/gerarOpcoes/3.jpeg){ width=50% }
![Conferência do comando para geração](/assets/gerarOpcoes/5.jpeg){ width=50% }
![Carregando informações](/assets/gerarOpcoes/6.jpeg){ width=50% }
![Apresentnado os resultados](/assets/gerarOpcoes/7.jpeg){ width=50% }

### Analisar opções
![Preenchendo informações do trabalho](/assets/avaliarOpcoes/1.jpeg){ width=50% }
![Preenchendo informações do problena](/assets/avaliarOpcoes/2.jpeg){ width=50% }
![Preenchendo a lista de ideias de visualização de dados para o problema](/assets/avaliarOpcoes/3.jpeg){ width=50% }
![Conferência do comando para geração](/assets/avaliarOpcoes/4.jpeg){ width=50% }
![Carregando informações](/assets/avaliarOpcoes/5.jpeg){ width=50% }
![Apresentnado os resultados](/assets/avaliarOpcoes/6.jpeg){ width=50% }

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
  Passo 8: Poderá coferir se o comando gerado pelo sistema compreende as suas necessidades.
  Passo 9: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 10: Poderá coferir se o resultado gerado pelo sistema compreende as suas necessidades.

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
  Passo 8: Poderá coferir se o comando gerado pelo sistema compreende as suas necessidades.
  Passo 9: Deverá clicar em 'PRÓXIMO' para avançar na interação.
  Passo 10: Poderá coferir se o resultado gerado pelo sistema compreende as suas necessidades.

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
     Passo 4: Poderá coferir se o comando gerado pelo sistema compreende as suas necessidades.
     Passo 5: Deverá clicar em 'PRÓXIMO' para avançar na interação.
     Passo 6: Poderá coferir se o resultado gerado pelo sistema compreende as suas necessidades.

     É porque: O campo de texto é aberto e permite que o usuário insira as informações sem uma formatação específica
     } 
}

```