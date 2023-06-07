---
icon: edit
date: 2023-06-06 21:00:00.00 -3
tag:
  - matriz
category:
  - exercicio
---
# Exercício 09 Matriz 02

1. Faça um programa que leia uma palavra de 10 letras e transforme todos os caracteres para maiúsculo.

    ::: details 
    ```c
    #include <stdio.h>
    //Faça um programa que leia uma palavra de 10 letras e transforme todos os caracteres para maiúsculo.
    int main(int argc, char const *argv[]){
        int tamanho = 10;
        char palavra[tamanho];
        printf("Digite uma palavra de no maximo 10 caracteres\n");
        scanf("%10[^\n]", palavra);//ler espaço em branco
        for (int i = 0; i < tamanho; i++){                
            if(palavra[i] >= 97 && palavra[i] <=122){//a-z
                palavra[i] = palavra[i]-32;//a->A...
            }               
        }    
        printf("Uppercase :%s", palavra);
        return 0;
    }    
    ```
    :::  
