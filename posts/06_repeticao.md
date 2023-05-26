---
icon: edit
date: 2023-04-25 18:30:00.00 -3
tag:
  - condicional
category:
  - Aula
order: 5
---

# Estruturas de repetição

O comando while equivale ao comando "enquanto" utilizado nos pseudocódigos apresentados até agora.

A forma geral de um comando while é:

```c
while (condição){
    sequência de comandos;
}
```

Na execução do comando while, a condição será avaliada e:
- Se a condição for considerada verdadeira (ou possuir valor diferente de zero), a sequência de comandos será executada. Ao final da sequência de comandos, o fluxo do programa é desviado novamente para o teste da condição.
- Se a condição for considerada falsa (ou possuir valor igual a zero), a sequência de comandos não será executada.

No códio abaixo temos um exemplo de um programa que lê dois números inteiros `a` e `b` digitados pelo usuário e imprime na tela todos os números inteiros entre `a` e `b`.

```c
#include <stdio.h>
#include <stdlib.h>
int main(){
    int a,b;
    printf("Digite o valor de a: ");
    scanf("%d",&a);
    printf("Digite o valor de b: ");
    scanf("%d",&b);
    while (a < b){
        a = a + 1;
        printf("%d \n",a);
    }
    return 0;
}
```
<!--

## Exercícios

[Exercício](exercicios/02_condicional.md)

-->

## Referências

<!-- @include: ../bib/bib.md -->