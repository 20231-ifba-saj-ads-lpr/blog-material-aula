---
icon: edit
date: 2023-07-25 21:30:00.00 -3
tag:
  - condicional
category:
  - Aula
order: 8
---

# Lista encadeada  (uso do malloc)

exemplo de código


```c
#include <stdio.h>
#include <stdlib.h>

struct no{
    int valor;
    struct no *proximo;    
};



void adicionarProximo(struct no *inicio, int valor){
    struct no *atual = inicio;
    while((*atual).proximo!= NULL){
        atual = (*atual).proximo;
    }
    struct no *novoNo;
    novoNo = malloc(sizeof(struct no));
    (*novoNo).valor = valor;
    (*novoNo).proximo = NULL;
    (*atual).proximo = novoNo;
}

void mostarTodos(struct no *inicio){
    struct no *atual = inicio;
    while(atual!= NULL){
        printf("%d\n",(*atual).valor);
        atual = (*atual).proximo;
    }
}

int main(){
    struct no inicio;
    inicio.valor = 1;
    inicio.proximo = NULL;
    if(inicio.proximo != NULL){
        printf("tem proximo\n");
    }else{
        printf("não tem proximo\n");
    }
    adicionarProximo(&inicio, 2);
    adicionarProximo(&inicio, 3);
    adicionarProximo(&inicio, 4);
    adicionarProximo(&inicio, 5);
    if(inicio.proximo != NULL){
        printf("tem proximo\n");
    }else{
        printf("não tem proximo\n");
    }
    mostarTodos(&inicio);
    

    /* code */
    return 0;
}

```
