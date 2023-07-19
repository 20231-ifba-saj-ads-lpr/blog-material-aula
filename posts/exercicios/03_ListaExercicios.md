---
icon: edit
date: 2023-04-23 22:00:00.00 -3
tag:
  - entrada_saida
  - condicional
category:
  - exercicio
star: true
---
# Lista de Exercícios

[^BACKES]

## Entrada e Saída

1. Desenvolver a lógica para um programa que efetue o cálculo da área de uma circunferência, apresentando a medida da área calculada.

    Algoritmo:

    Para efetuar o cálculo da área de uma circunferência é necessário conhecer a fórmula que executa este cálculo, sendo esta: $A = \pi R^2$, em que A é a variável que conterá o resultado do cálculo da área, $\pi$ é o valor de pi (3.14159, sendo uma constante na fórmula) e R o valor do raio. Sendo assim, estabelece-se:

    1. Ler um valor para o raio, na variável R;
    2. Estabelecer que $\pi$ possui o valor 3.14159;
    3. Efetuar o cálculo da área, elevando ao quadrado o valor de R e multiplicando por $\pi$;
    4. Apresentar o valor da variável A.

    A fórmula para o cálculo da área passará a ser escrita como: $A = 3.14159 * R^2$.
2. Construir um programa que efetue o cálculo do salário líquido de um professor. Para fazer este programa, você deverá possuir alguns dados, tais como: valor da hora-aula, número de horas trabalhadas no mês e o percentual de desconto do INSS. Em primeiro lugar, deve-se estabelecer qual será o seu salário bruto para efetuar o desconto e ter o valor do salário líquido.

    Algoritmo:

    1. Ler a variável HT (horas trabalhadas no mês);
    2. Ler a variável VH (valor hora-aula);
    3. Ler a variável PD (percentual de desconto);
    4. Calcular o salário bruto (SB), sendo este a multiplicação das variáveis HT e VH;
    5. Calcular o total de desconto (TD), com base no valor de PD dividido por 100;
    6. Calcular o salário líquido (SL), deduzindo o desconto do salário bruto;
    7. Apresentar os valores dos salários bruto e líquido: SB e SL.
3. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é 
    $$F = \frac{(9 \times C + 160)}{5} $$
    sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
4. Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é 
    $$C = (F - 32) \times \frac{5}{9}$$
    sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
5. Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: 
    $$Volume = \pi \times Raio^2 \times Altura$$
6. Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (`TEMPO`) e a velocidade média (`VELOCIDADE`) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula 
    $$DISTANCIA = TEMPO \times VELOCIDADE$$
    Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
    $$LITROS\_USADOS = \frac{DISTANCIA}{12}$$
    Ao final, o programa deve apresentar os valores da velocidade média (`VELOCIDADE`), tempo gasto na viagem (`TEMPO`), a distancia percorrida (`DISTANCIA`) e a quantidade de litros (`LITROS_USADOS`) utilizada na viagem. 
    Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
    $$PRESTACAO = VALOR + (VALOR \times \frac{TAXA}{100}) \times TEMPO)$$.
7. Ler dois valores (inteiros, reais ou caracteres) para as variáveis `A` e `B`, e efetuar a troca dos valores de forma que a variável `A` passe a possuir o valor da variável `B` e a variável `B` passe a possuir o valor da variável `A`. Apresentar os valores trocados.
8. Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.
9. Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula:
    $$VOLUME = COMPRIMENTO \times LARGURA \times ALTURA$$
1. Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.
2. Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.
3. Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.
4. Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.
5. Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.
6. Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma (variável S) do segundo com o quarto valor.
7. Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).
8. Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e votos em branco. Ao final o programa deve apresentar 
   1. o número total de eleitores, considerando votos válidos, nulos e em branco; 
   2. o percentual correspondente de votos válidos em relação à quantidade de eleitores; 
   3. o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores; 
   4. o percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores; 
   5. o percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores; 
   6. o percentual correspondente de votos nulos em relação à quantidade de eleitores; 
   7. e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores.
9. Elabore um algoritmo que leia um número inteiro e apresente o antecessor, o número e o sucessor
10. Escreva um algoritmo que calcule a área de um triângulo usando a seguinte formula:
    $$Area = \frac{base \times altura}{2}$$
11. Construa um algoritmo que leia o preço de um produto, o percentual de desconto e calcule o valor a pagar e o valor do desconto
12. Elabore um algoritmo que leia a quantidade de livros que uma locadora de livros possui e o valor do aluguel por livro. apresente as seguintes informações: 
    1.  faturamento mensal se todos os livros forem locados; 
    2.  faturamento anual se 20\% dos livros não forem locados todo mês.

## Condicionais

1. Ler três valores para os lados de um triângulo, considerando lados como: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Se for esta condição verdadeira, deve ser indicado qual tipo de triângulo foi formado: isósceles, escaleno ou equilátero.

    Algoritmo
    Para se estabelecer esse algoritmo é necessário em primeiro lugar saber o que realmente é um triângulo. 
    Triângulo é uma forma geométrica (polígono) composta por três lados, em que cada lado é menor que a soma dos outros dois lados. Perceba que esta é uma regra (uma condição) e deve ser considerada. É um triângulo quando $A < (B + C)$, quando $B < (A + C)$ e quando $C < (A + B)$. 
    
    Tendo certeza de que os valores informados para os três lados formam um triângulo, são então analisados os valores para se estabelecer qual tipo de triângulo é formado: isósceles, escaleno ou equilátero. Um triângulo é isósceles quando possui dois lados iguais e um diferente, sendo $A=B$ ou $A=C$ ou $B=C$; é escaleno quando possui todos os lados diferentes, sendo $A<>B$ e $B<>C$ e $C<>A$ e é equilátero quando possui todos os lados iguais, sendo $A=B$ e $B=C$.
    1. Ler três valores para os lados de um triângulo: A, B e C;
    1. Verificar se cada lado é menor que a soma dos outros dois lados;
        1. Se sim, saber se $A=B$ e se $B=C$ sendo verdade, o triângulo é equilátero;
        1. Se não, verificar se $A=B$ ou se $A=C$ ou se $B=C$; sendo verdade, o triângulo é isósceles, caso contrário o triângulo é escaleno.
    1. Caso os lados fornecidos não caracterizem um triângulo, avisa a ocorrência. 
2. Desenvolver um programa que efetue a leitura de um valor numérico inteiro e apresente-o caso este valor seja divisível por 4 e 5. Não sendo divisível por 4 e 5 o programa deverá apresentar a mensagem "Não é divisível por 4 e 5".
    Algoritmo
    1. Ler um número inteiro qualquer, no caso o número N;
    2. Calcular o resto da divisão de N por 4, usar a variável R_4;
    3. Calcular o resto da divisão de N por 5, usar a variável R_5;
    4. Verificar se ambas as variáveis possuem o valor ZERO, se sim apresentar a variável N, se não apresentar a mensagem "Não é divisível por 4 e 5"
1. Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
1. Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por $-1$.
1. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição.
1. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de prova final, somar com o valor da média e obter nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em prova final. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.
    ::: details 
    ```c
    #include <stdio.h>
    int main(){
        float nota1, nota2, nota3, nota4, media, final;
        printf("informar nota 1\n");
        scanf("%f", &nota1);
        printf("informar nota 1\n");
        scanf("%f", &nota1);
        printf("informar nota 2\n");
        scanf("%f", &nota2);
        printf("informar nota 3\n");
        scanf("%f", &nota3);
        printf("informar nota 4\n");
        scanf("%f", &nota4);
        //ler notas
        media = (nota1+nota2+nota3+nota4)/4;

        if (media >=7){
            printf("aprovado %2.2f", media);
        }else{
            //nota de prova final
            printf("informar nota da final\n");
            scanf("%f", &final);

            media = (media + final)/2;
            if (media >= 5 ){
                printf("aluno foi aprovado em prova final %2.2f", media);
            }else{
                printf("aluno não foi aprovado %2.2f", media);
            }        
        }
        return 0;
    }
    ```
    :::    
2. Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. Dada a equação $f(x) = ax^2 + bx + c$ as raízes são obtidas por $x=\frac{-b \pm \sqrt{b^2-4ac}}{2a}$.
3. Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.
4. Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.
5. Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.
6. Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar. 
7. Elaborar um programa que efetue a leitura de um valor que esteja entre a faixa de 1 a 9. Após a leitura do valor fornecido pelo usuário, o programa deverá indicar uma de duas mensagens: "O valor está na faixa permitida", caso o usuário forneça o valor nesta faixa, ou a mensagem "O valor está fora da faixa permitida", caso o usuário forneça valores menores que 1 ou maiores que 9.
8. Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua apresentação, caso o valor não seja maior que três.
9.  Formule um algoritmo que leia a matrícula e nome de um vendedor, seu salário fixo e o total de vendas e calcule a comissão do vendedor. Se o total de vendas é inferior a R\$ 1500,00 o percentual de comissão é 2\% e se for maior o percentual é de 4\%. Apresente o nome do vendedor, matrícula, salário ixo e salário total.
10. Escreva um algoritmo que leia um número e informe se ele é divisível por 3 e por 7.
    ::: details 
    ```c
    #include <stdio.h>
    int main(){
        int numero;
        printf("Informe um numero\n");
        scanf("%d", &numero);
        //divisível por 3 e por 7
        if ((numero % 3 == 0) && (numero % 7 == 0)){
            printf("O numero %d é divisível por 3 e por 7", numero);
        }else{
            printf("O numero %d NÃO é divisível por 3 e por 7", numero);
        }
        return 0;
    }
    ```
    :::
11. Formule um algoritmo que leia cinco números e conte quantos deles são negativos.
    ::: details 
    ```c
    #include <stdio.h>
    int main(){
        int numero;
        int qtdNegativos = 0;
        printf("Informe um numero\n");
        scanf("%d", &numero);
        if (numero<0){
            qtdNegativos++;
        }
        printf("Informe um numero\n");
        scanf("%d", &numero);
        if (numero<0){
            qtdNegativos++;
        }
        printf("Informe um numero\n");
        scanf("%d", &numero);
        if (numero<0){
            qtdNegativos++;
        }
        printf("Informe um numero\n");
        scanf("%d", &numero);
        if (numero<0){
            qtdNegativos++;
        }
        printf("Informe um numero\n");
        scanf("%d", &numero);
        if (numero<0){
            qtdNegativos++;
        }
        printf("Quantidade de numeros negativos %d", qtdNegativos);
        return 0;
    }
    ```
    :::
12. De acordo com uma tabela médica, o peso ideal está relacionado com a altura e o sexo. Elabore um algoritmo que receba altura e sexo de uma pessoa e calcule e imprima o seu peso ideal, sabendo que:
    - Homens: $(72,7 \times h) – 58$
    - Mulheres: $(62,1 \times h) – 44,7$
13. Elabore um algoritmo que leia o percurso em quilômetros, o tipo de moto e informe o consumo estimado de combustível, sabendo que uma moto do tipo `A` faz 26 km com um litro de gasolina, uma moto do tipo `B` faz 20 km e o tipo `C` faz 7 km.
14. Uma instituição financeira concederá crédito a uma taxa de juros de 3\% aos seus clientes de acordo com o saldo médio do período. Elabore um algoritmo que calcule o valor que pode ser concedido ao cliente e imprima-o. Os clientes com saldo médio inferior a R\$ 500,00 não têm direito a crédito. Já os clientes com saldo entre R\$ 501,00 e R\$ 1000,00 podem obter créditos de 35\% em relação ao saldo médio. Clientes com saldo entre R\$ 1001,00 a R\$ 3000,00 podem obter créditos de 50\% em relação ao saldo médio. E para aqueles clientes com saldo superior a R\$ 3001,00 pode ser concedido crédito de 75\% do valor do saldo.

## Repetição

1. Faça um programa que leia um número inteiro positivo N e imprima todos os  números naturais de 0 até N em ordem crescente.
1. Faça um programa que leia um número inteiro positivo N e imprima todos os  números naturais de 0 até N em ordem decrescente.
1. Faça um programa que leia um número inteiro N e depois imprima os N primeiros números naturais ímpares.
1. Faça um programa que determine e mostre os cinco primeiros múltiplos de 3  considerando números maiores que 0.
1. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
1. Faça um programa que mostre uma contagem regressiva na tela, iniciando em 10  e terminando em 0. Mostre uma mensagem "FIM!" após a contagem.
1. Elabore um programa que peça ao usuário para digitar 10 valores. Some esses  valores e apresente o resultado na tela.
1. Faça um programa que leia 10 inteiros e imprima sua média.
1. Escreva um programa que leia 10 números e escreva o menor valor lido e o maior  valor lido.
1. Faça um programa que leia 10 inteiros positivos, ignorando não positivos, e imprima sua média.
1. Faça um algoritmo que leia um número positivo e imprima seus divisores. Exemplo: os divisores do número 66 são: 1, 2, 3, 6, 11, 22, 33 e 66.
1. Escreva um programa que leia um número inteiro e calcule a soma de todos os  divisores desse número, com exceção dele próprio. Exemplo: a soma dos divisores  do número 66 é 1 + 2 + 3 + 6 + 11 + 22 + 33 = 78.
1. Faça um programa que exiba a soma de todos os números naturais abaixo de  1.000 que são múltiplos de 3 ou 5.
1. Escreva um programa que leia um número inteiro, maior ou igual a zero, do usuário. Imprima o enésimo termo da sequência de Fibonacci. Essa sequência começa  no termo de ordem zero, e, a partir do segundo termo, seu valor é dado pela soma  dos dois termos anteriores. Alguns termos dessa sequência são: 0, 1, 1, 2, 3, 5, 8,  13, 21, 34.
    ::: details 
    ```c
    #include <stdio.h>
    /*
    Fibonacci(x) = Fibonacci(x-1)+Fibonacci(x-2)
    se x = 1 entao 0
    se x = 2 entao 1
    */
    int main(){
        int numero;
        scanf("%d", &numero);
        if (numero >= 0){
            int fibonacciXMenos2 = 0;
            int fibonacciXMenos1 = 1;
            int fibonacciX = 1;
            if (numero == 1){
                printf("%d", fibonacciXMenos2);
            }else{
                if (numero == 2){
                    printf("%d", fibonacciXMenos1);
                }else{
                    if (numero == 3){
                        printf("%d", fibonacciX);
                    }else{
                        // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
                        //                   ^       //fibonacciXMenos2
                        //                      ^    //fibonacciXMenos1
                        //                         ^ //fibonacciX
                        //Fibonacci(x) = Fibonacci(x-1)+Fibonacci(x-2)
                        for (int i = 4; i <= numero; i++){
                            fibonacciXMenos2 = fibonacciXMenos1;
                            fibonacciXMenos1 = fibonacciX;
                            fibonacciX = fibonacciXMenos2 + fibonacciXMenos1;
                        }
                        printf("%d", fibonacciX);
                    }
                }
            }
        }

        return 0;
    }

    ```
    ::: 
1. Elabore um programa que faça a leitura de vários números inteiros até que se digite um número negativo. O programa tem de retornar o maior e o menor número  lido.
1. Em matemática, a série harmônica é a série infinita definida como:
    $$\sum _{k=1}^{\infty }{\frac {1}{k}}=1+{\frac {1}{2}}+{\frac {1}{3}}+{\frac {1}{4}}+\cdots$$
    O n-ésimo($H_{n}$) número harmônico é designado por:
    $${H_{n}=\sum _{k=1}^{n}{\frac {1}{k}}}=1+{\frac {1}{2}}+{\frac {1}{3}}+{\frac {1}{4}}+\cdots+{\frac {1}{n}}$$
    Apresente um programa que calcule o valor de qualquer $H_{n}$.
1. Escreva um programa que leia um número inteiro positivo N e em seguida imprima N linhas do chamado triângulo de Floyd:
    ```console
    1
    2 3
    4 5 6
    7 8 9 10
    11 12 13 14 15
    16 17 18 19 20 21
    ```
1. Faça um programa que receba um número inteiro maior do que 1 e verifique se o  número fornecido é primo ou não.
1. Faça um programa que calcule e escreva o valor de S:
    $$S={\frac {1}{1}}+{\frac {3}{2}}+{\frac {5}{3}}+{\frac {7}{4}}+{\frac {9}{5}}+\cdots +{\frac {1}{55}}$$
1. Na matemática, o fatorial de um número natural n, representado por n!, é o produto de todos os inteiros positivos menores ou iguais a n. 
    A função fatorial é normalmente definida por:
    $$n!=\prod _{k=1}^{n}k=n\times (n-1)\times (n-2)\times ...\times 3\times 2\times 1,\qquad \forall n\in \mathbb {N}$$
    Faça um programa que leia um valor inteiro e positivo N, calcule o mostre o valor  E, conforme a fórmula a seguir:
    $$
    E={\frac {1}{1!}}
    +{\frac {1}{2!}}
    +{\frac {1}{3!}}
    +\cdots 
    +{\frac {1}{N!}}
    $$
1. Escreva um programa que leia certa quantidade de números, imprima o maior  deles e quantas vezes o maior número foi lido. A quantidade de números a serem lidos deve ser fornecida pelo usuário.


## Vetores

1. Crie um programa que leia do teclado seis valores inteiros e em seguida mostra na  tela os valores lidos.
1. Crie um programa que leia do teclado seis valores inteiros e em seguida mostre na  tela os valores lidos na ordem inversa.
1. Faça um programa que leia cinco valores e os armazene em um vetor. Em seguida,  mostre todos os valores lidos juntamente com a média dos valores.
1. Faça um programa que possua um array de nome A que armazene seis números inteiros. O programa deve executar os seguintes passos:
   1. Atribua os seguintes valores a esse array: 1, 0, 5, −2, −5, 7
   2. Armazene em uma variável a soma dos valores das posições A[0], A[1] e A[5] do array e mostre na tela essa soma.
   3. Modifique o array na posição 4, atribuindo a essa posição o valor 100.
   4. Mostre na tela cada valor do array A, um em cada linha.
1. Faça um programa que leia um vetor de oito posições. Em seguida, leia também dois  valores X e Y quaisquer correspondentes a duas posições no vetor. Seu programa  deverá exibir a soma dos valores encontrados nas respectivas posições X e Y.
1. Escreva um programa que leia do teclado um vetor de 10 posições. Escreva na tela  quantos valores pares foram armazenados nesse vetor.
1. Faça um programa que receba do usuário um vetor X com 10 posições. Em seguida deverão ser impressos o maior e o menor elemento desse vetor.
1. Faça um programa que preencha um vetor com 10 números reais. Em seguida, calcule e mostre na tela a quantidade de números negativos e a soma dos números positivos desse vetor.
1. Faça um programa que receba do usuário dois arrays, `A` e `B`, com 10 números inteiros cada. Crie um novo array `C` calculando `C = A − B`. Mostre na tela os dados do array `C`.
1. Faça um programa que preencha um vetor de tamanho 100 com os 100 primeiros números naturais que não são múltiplos de 7. Ao final, imprima esse vetor na tela.
1. Leia um conjunto de números reais, armazenando-o em vetor. Em seguida, calcule o quadrado de cada elemento desse vetor armazenando esse resultado em outro vetor. Os conjuntos têm, no máximo, 20 elementos. Imprima os dois conjuntos de números.
1. Faça um programa que leia um vetor de 10 posições. Verifique se existem valores iguais e os escreva na tela.
1. Faça um programa para ler 10 números diferentes a serem armazenados em um vetor. Os números deverão ser armazenados no vetor na ordem em que forem lidos, sendo que, caso o usuário digite um número que já foi digitado anteriormente, o programa deverá pedir a ele para digitar outro número. Note que cada valor digitado pelo usuário deve ser pesquisado no vetor, verificando se ele existe entre os números que já foram fornecidos. Exiba na tela o vetor final que foi digitado.
1. Faça um programa que calcule o desvio-padrão `d` de um vetor `V` contendo `n` números
    $$ d = \sqrt{\frac{1}{n-1}\sum^{n-1}_{i=0}(V[i-m])}$$
    em que m é a média desse vetor. Considere n = 10. O vetor v deve ser lido do teclado.
1. Leia um vetor com 10 números de ponto flutuante. Em seguida, ordene os elementos desse vetor e imprima o vetor na tela.
   ::: details 
    ```c
    #include <stdio.h>

    int main(){
        int vetor[10] = {9, 5, 7, 1, 2, 8, 4, 0, 3, 6};
        // mostar original
        for (int i = 0; i < 10; i++){
            printf("%d ", vetor[i]);
        }
        printf("\n");
    
        for (int k = 0; k < 10; k++){        
            // encontrar o menor valor e posicao no vetor
            int menorValor = vetor[k];
            int posicaoMenorValor = k;
            for (int i = k; i < 10; i++){
                if (vetor[i] < menorValor){
                    menorValor = vetor[i];
                    posicaoMenorValor = i;
                }
            }
            //trocar menor valor e colocar na posição 0;
            vetor[posicaoMenorValor] = vetor[k];
            vetor[k] = menorValor;
        }   
        // mostar ordenado
        for (int i = 0; i < 10; i++){
            printf("%d ", vetor[i]);
        }
        printf("\n");
        return 0;
    }
    ```
    ::: 
<!--
1. Faça um programa que leia uma palavra de 10 letras e transforme todos os caracteres para maiúsculo.
-->

## Matrizes

1. Faça um programa que leia uma matriz de tamanho `3 × 3`. Imprima na tela o menor valor contido nessa matriz.
    ::: details 
    ```c
    #include <stdio.h>
    #define count 3
    int main(int argc, char const *argv[]){
        int mat[count][count] = {
            {-10,-2,-3},      // 0,0     0,1       0,2
            {-4,-5,-6000},    // 1,0     1,1       1,2
            {-7,-8,-1000}     // 2,0     2,1       2,2
        };   
        int menorValor = mat[0][0];
        for (int i = 0; i < count; i++){
            for (int j = 0; j < count; j++){                
                if(mat[i][j]<menorValor){
                    menorValor = mat[i][j];
                }
            }  
        }
        printf("O maior valor é %d ", menorValor);
        return 0;
    }
    ```
    :::    
1. Faça um programa que leia uma matriz de tamanho `4 × 4`. Imprima na tela o maior valor contido nessa matriz e a sua localização (linha e coluna).
    ::: details 
    ```c
        #include <stdio.h>
        #define count 4
        int main(int argc, char const *argv[]){
        int mat[count][count] = {
            {10,2,3,-3},         // 0,0   0,1   0,2    0,3
            {-4,5,-6000,6000},   // 1,0   1,1   1,2    1,3
            {-4,5,-6000,6000},   // 2,0   2,1   2,2    2,3
            {7,-8,1000,1000}     // 3,0   3,1   3,2    3,3
        };   
        int maiorValor = mat[0][0];
        int maiorValorI = 0;
        int maiorValorJ = 0;
        for (int i = 0; i < count; i++){
            for (int j = 0; j < count; j++){
                //printf("Valor %d em mat[%d][%d] \n ", mat[i][j], i, j);
                if(mat[i][j]>maiorValor){
                    maiorValor = mat[i][j];
                    maiorValorI= i;
                    maiorValorJ= j;
                }
            }  
        }
        printf("O maior valor é %d na linha %d, na coluna %d\n\n\n\n\n", maiorValor, maiorValorI, maiorValorJ);
        return 0;
    }
    ```
    :::    
1. Faça um programa que declare uma matriz de tamanho `5 × 5`. Preencha com 1 a  diagonal principal e com 0 os demais elementos. Ao final, escreva a matriz obtida  na tela.
1. Leia uma matriz de tamanho `4 × 4`. Em seguida, conte e escreva na tela quantos valores maiores do que 10 ela possui.
1. Leia uma matriz de tamanho `4 × 4`. Em seguida, conte e escreva na tela quantos valores negativos ela possui.
1. Leia uma matriz de tamanho `3 × 3`. Em seguida, imprima a soma dos valores contidos em sua diagonal principal.
    ::: details 
    ```c
    #include <stdio.h>
    #define count 3
    int main(int argc, char const *argv[]){
        int mat[count][count] = {
            {-10,-2,-3},      // 0,0     0,1       0,2
            {-4,-5,-6000},    // 1,0     1,1       1,2
            {-7,-8,-1000}     // 2,0     2,1       2,2
        };   
        int somaDiagonalPrincipal = 0;
        for (int i = 0; i < count; i++){
            for (int j = 0; j < count; j++){
                if(i == j){
                    somaDiagonalPrincipal += mat[i][j];
                }
            }  
        }
        printf("Somatorio da Diagonal Principal %d\n\n\n\n", somaDiagonalPrincipal);
        return 0;
    }
    ```
    :::    
1. Leia uma matriz de tamanho `3 × 3`. Em seguida, imprima a soma dos valores contidos em sua diagonal secundária.
    ::: details 
    ```c
    #include <stdio.h>
    #define count 3
    int main(int argc, char const *argv[]){
        int mat[count][count] = {
            {-10,-2,-3},      // 0,0     0,1       0,2
            {-4,-5,-6000},    // 1,0     1,1       1,2
            {-7,-8,-1000}     // 2,0     2,1       2,2
        };   
        int somaDiagonalSecundaria = 0;
        for (int i = 0; i < count; i++){
            for (int j = 0; j < count; j++){
                if(i == j){
                    somaDiagonalPrincipal += mat[i][j];
                }
                if(i+j == count-1){
                    somaDiagonalSecundaria += mat[i][j];
                }
            }  
        }
        printf("Somatorio da Diagonal Secundaria %d\n\n\n\n", somaDiagonalSecundaria);
        return 0;
    }
    ```
    :::    
1. Calcular e imprimir na tela uma matriz de tamanho `10 × 10`, em que seus elementos são da forma:
    $$A[i][j] = 2i + 7j – 2\space (se \space i < j)$$
    $$A[i][j] = 3i^2 – 1 \space (se \space i = j)$$
    $$A[i][j] = 4i^3 + 5j^2 + 1\space (se\space i > j)$$
1. Faça um programa que permita ao usuário entrar com uma matriz de tamanho `3  × 3` de números inteiros. Em seguida, calcule um vetor contendo três posições, em  que cada posição deverá armazenar a soma dos números de cada coluna da matriz.  Exiba na 
2. tela esse array. Por exemplo, a matriz
    $$\begin{bmatrix}5 & -8 & 10\\1 & 2 & 15\\25 & 10 & 7 \end{bmatrix}$$
    deverá gerar o vetor
    $$\begin{bmatrix}31 & 4 & 32\end{bmatrix}$$

## Funções

### Passagem por valor

1. Escreva uma função que receba por parâmetro dois números e retorne o maior deles.
2. Faça uma função que receba um número inteiro de 1 a 12 e imprima em tela o mês e a sua quantidade de dias de acordo com o número digitado pelo usuário. Exemplo: Entrada = 4. Saída = abril.
3. Escreva uma função que receba por parâmetro uma temperatura em graus Fahrenheit e a retorne convertida em graus Celsius. A fórmula de conversão é: $C = (F - 32.0) \times (5.0/9.0)$, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
4. Escreva uma função que receba por parâmetro a altura e o raio de um cilindro circular e retorne o volume desse cilindro. O volume de um cilindro circular é calculado por meio da seguinte fórmula:    $ V = \pi \times raio^2 \times altura,$ em que $\pi = 3.1414592$
5. Escreva uma função para o cálculo do volume de uma esfera $ V = \frac{4}{3\pi} \times r^3$, em que $ \pi = 3.1414592$ valor do raio r deve ser passado por parâmetro.
6. Escreva uma função que receba o peso (quilos) e a altura (metros) de uma pessoa. Calcule e retorne o IMC (índice de massa corporal) dessa pessoa: $IMC = \frac{peso}{altura^2}$
7. Elabore uma função que receba três números inteiros como parâmetro, representando horas, minutos e segundos. A função deve retornar esse horário convertido em segundos.
8. Elabore uma função para verificar se um número é um quadrado perfeito. Um quadrado perfeito é um número inteiro não negativo que pode ser expresso como o quadrado de outro número inteiro. Exemplos: 1, 4, 9.
9. Elabore uma função que receba três notas de um aluno como parâmetros e uma letra. Se a letra for "A", a função deverá calcular a média aritmética das notas do aluno; se for "P", deverá calcular a média ponderada, com pesos 5, 3 e 2. Retorne a média calculada para o programa principal.
10. Escreva uma função que receba dois valores numéricos e um símbolo. Esse símbolo representará a operação que se deseja efetuar com os números. Assim, se o símbolo for "+", deverá ser realizada uma adição, se for "−", uma subtração, se for "/", uma divisão, e, se for "*", será efetuada uma multiplicação. Retorne o resulta- do da operação para o programa principal.
11. Escreva uma função que receba por parâmetros dois valores inteiros x e y e calcule e retorne o resultado de x y para o programa principal. Não use nenhuma função pronta para isso.
12. Escreva uma função que receba um número inteiro positivo e retorne o maior fator primo desse número.
13. Escreva uma função que receba um número inteiro positivo n. Calcule e retorne o somatório de 1 até n: 1 + 2 + 3 + ... + n.
14. Escreva uma função que receba um número inteiro positivo n. Calcule e retorne o seu fatorial $n!$: $n! = n \times ( – 1) \times (n – 2) \times ... \times 1$.
15. Elabore uma função que receba como parâmetro um valor inteiro n e gere como saída n linhas com pontos de exclamação, conforme o exemplo a seguir, em que usamos n = 5:
    ```console
    !
    !!
    !!!
    !!!!
    !!!!!
    ```
16. Elabore uma função que receba como parâmetro um valor inteiro n e gere como saída um triângulo lateral formado por asteriscos conforme o exemplo a seguir, em que usamos n = 4:
    ```console
    *
    **
    ***
    ****
    ***
    **
    *
    ```
17. Faça uma função que receba um inteiro N como parâmetro. Calcule e retorne o resultado da seguinte série S: $S=\frac {2}{4}+{\frac {3}{2}}+{\frac {5}{3}}+{\frac {7}{4}}+{\frac {9}{5}}+\cdots +{\frac {1}{55}}$
18. Faça uma função que receba como parâmetro o valor de um ângulo em graus e calcule o valor do seno desse ângulo usando a sua respectiva série de Taylor: em que x é o valor do ângulo em radianos. Considere π = 3.1414592 e n variando de 0 até 5.
19. Faça uma função que receba como parâmetro o valor de um ângulo em graus e calcule o valor do cosseno desse ângulo usando a sua respectiva série de Taylor: em que x é o valor do ângulo em radianos. Considerar π = 3.1414592 e n variando de 0 até 5.
20. Faça uma função que calcule e retorne o número neperiano e, e = 2,71828183, usando a série a seguir: A função deve ter como parâmetro o número de termos que serão somados, N. Note que quanto maior esse número, mais próxima do valor e estará a resposta.

### Recursividade

1. Escreva uma função recursiva que calcule a soma dos primeiros `n` cubos:
    $$S = 1^3 + 2^3 + ... + n^3$$ 
2. Crie uma função recursiva que receba um número inteiro N e retorne o somatório dos números de 1 a N.
3. Crie uma função recursiva que receba um número inteiro N e imprima todos os números naturais de 0 até N em ordem crescente.
4. Crie uma função recursiva que receba um número inteiro N e imprima todos os números naturais de 0 até N em ordem decrescente.
5. Crie uma função recursiva que retorne a soma dos elementos de um vetor de inteiros.
6. Crie uma função recursiva que retorne a média dos elementos de um vetor de inteiros.
7. Escreva uma função recursiva que receba por parâmetro dois valores inteiros `x` e `y` e calcule e retorne o resultado de $x^y$ para o programa principal.
8. A multiplicação de dois números inteiros pode ser feita através de somas sucessivas (por exemplo, 2 * 3 = 2 + 2 + 2). Crie uma função recursiva que calcule a multiplicação por somas sucessivas de dois inteiros.
9. Escreva uma função recursiva que receba um número inteiro positivo. Calcule e retorne o seu fatorial n!:
    $$n! = n \times (n – 1) \times (n – 2) \times ... \times 1$$
10. Escreva uma função recursiva que receba um número inteiro, maior ou igual a 
zero, e retorne o enésimo termo da sequência de Fibonacci. Essa sequência começa no termo de ordem zero e, a partir do segundo termo, seu valor é dado pela soma dos dois termos anteriores. Alguns termos dessa sequência são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
11. Escreva uma função recursiva que receba um valor inteiro e o retorne invertido. 
Exemplo: 
    ```shell
    Número lido = 123. 
    Número retornado = 321.
    ```
12.  Escreva uma função recursiva que receba um valor inteiro em base decimal e o imprima em base binária.
13.  Faça uma função recursiva que calcule o valor da série S descrita a seguir para um valor n maior do que zero a ser fornecido como parâmetro para a mesma:
    $$S = 2+\frac{5}{2}+\frac{10}{3}+ ... +\frac{1+n^2}{n}$$
14.  Crie uma função recursiva que retorne o menor elemento em um vetor.
15.  Em matemática, o número harmônico designado por Hn define-se como o enésimo termo da série harmônica. Ou seja: 
    $$H_n = 1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+ ... ++\frac{1}{n}$$
    Escreva uma função recursiva que calcule o valor de qualquer $H_n$.

## Estruturas

1. Implemente um programa que leia o nome, a idade e o endereço de uma pessoa e armazene esses dados em uma estrutura. Em seguida, imprima na tela os dados da estrutura lida.
2. Crie uma estrutura para representar as coordenadas de um ponto no plano (posições X e Y). Em seguida, declare e leia do teclado um ponto e exiba a distância dele até a origem das coordenadas, isto é, a posição (0,0).
3. Crie uma estrutura para representar as coordenadas de um ponto no plano (posições X e Y). Em seguida, declare e leia do teclado dois pontos e exiba a distância entre eles.
4. Crie uma estrutura chamada Retângulo. Essa estrutura deverá conter o ponto superior esquerdo e o ponto inferior direito do retângulo. Cada ponto é definido por uma estrutura Ponto, a qual contém as posições X e Y. Faça um programa que declare e leia uma estrutura Retângulo e exiba a área e o comprimento da diagonal e o perímetro desse retângulo.
5. Usando a estrutura Retângulo do exercício anterior, faça um programa que declare e leia uma estrutura Retângulo e um Ponto, e informe se esse ponto está ou não dentro do retângulo.
6. Crie uma estrutura representando um aluno de uma disciplina. Essa estrutura deve conter o número de matrícula do aluno, seu nome e as notas de três provas. Agora, escreva um programa que leia os dados de cinco alunos e os armazena nessa estrutura. Em seguida, exiba o nome e as notas do aluno que possui a maior média geral dentre os cinco.
7. Crie uma estrutura representando uma hora. Essa estrutura deve conter os campos hora, minuto e segundo. Agora, escreva um programa que leia um vetor de cinco posições dessa estrutura e imprima a maior hora.
8. Crie uma estrutura capaz de armazenar o nome e a data de nascimento de uma pessoa. Agora, escreva um programa que leia os dados de seis pessoas. Calcule e exiba os nomes da pessoa mais nova e da mais velha.
9. Crie uma estrutura representando um atleta. Essa estrutura deve conter o nome do atleta, seu esporte, idade e altura. Agora, escreva um programa que leia os dados de cinco atletas. Calcule e exiba os nomes do atleta mais alto e do mais velho.
10. Usando a estrutura "atleta" do exercício anterior, escreva um programa que leia os dados de cinco atletas e os exiba por ordem de idade, do mais velho para o mais novo.
11. Escreva um programa que contenha uma estrutura representando uma data válida. Essa estrutura deve conter os campos dia, mês e ano. Em seguida, leia duas da- tas e armazene nessa estrutura. Calcule e exiba o número de dias que decorreram entre as duas datas.
12. Crie uma enumeração representando os dias da semana. Agora, escreva um programa que leia um valor inteiro do teclado e exiba o dia da semana correspondente.
13. Crie uma enumeração representando os meses do ano. Agora, escreva um programa que leia um valor inteiro do teclado e exiba o nome do mês correspondente e quantos dias ele possui.
14. Crie uma enumeração representando os itens de uma lista de compras. Agora, escreva um programa que leia um valor inteiro do teclado e exiba o nome do item comprado e o seu preço.
15. Crie uma união contendo dois tipos básicos diferentes. Agora, escreva um programa que inicialize um dos tipos dessa união e exiba em tela o valor do outro tipo.

## Ponteiros

1. Escreva um programa que contenha duas variáveis inteiras. Compare seus endereços e exiba o maior endereço.
1. Escreva um programa que contenha duas variáveis inteiras. Leia essas variáveis do teclado. Em seguida, compare seus endereços e exiba o conteúdo do maior endereço.
1. Crie um programa que contenha um array de float contendo 10 elementos. Imprima o endereço de cada posição desse array.
1. Crie um programa que contenha uma matriz de float contendo três linhas e três colunas. Imprima o endereço de cada posição dessa matriz.
1. Crie um programa que contenha um array de inteiros contendo cinco elementos. Utilizando apenas aritmética de ponteiros, leia esse array do teclado e imprima o dobro de cada valor lido.

## Referências

<!-- @include: ../../bib/bib.md -->

## Novos CodeSpaces

- Criar um repositório baseado no template abaixo:

[https://github.com/20231-ifba-saj-ads-lpr/codespace-cpp-template](https://github.com/20231-ifba-saj-ads-lpr/codespace-cpp-template)

