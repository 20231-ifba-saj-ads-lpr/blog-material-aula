//Defina uma estrutura chamada "Pessoa" com os campos nome, idade e altura. Leia e armazene os dados de cinco pessoas em um vetor e exiba o nome das pessoas da mais alta para a mais baixa
#include <stdio.h>
#include <string.h>
struct Pessoa{
    char nome[30];
    int idade;
    float altura;
};


int main(){
    struct Pessoa dados[3];
    //leitura de dados
    for (int i = 0; i < 3; i++){
        dados[i].altura = 1.8f;
        dados[i].idade = 20;
        strcpy(dados[i].nome,"AAAAA") ;
    }


    dados[1].altura = 1.6f;
    dados[1].idade = 20;
    strcpy(dados[1].nome,"BBBBB") ;

    dados[2].altura = 1.9f;
    dados[2].idade = 20;
    strcpy(dados[2].nome,"CCCC") ;

    //ordenar dados
    for (int i = 0; i < 3; i++){
        for (int j = i+1; j < 3; j++){
            if(dados[j].altura>dados[i].altura){
                struct Pessoa temp;
                temp.altura = dados[j].altura;
                temp.idade = dados[j].idade;
                strcpy(temp.nome, dados[j].nome);

                dados[j].altura = dados[i].altura;
                dados[j].idade = dados[i].idade;
                strcpy(dados[j].nome, dados[i].nome);

                dados[i].altura = temp.altura;
                dados[i].idade = temp.idade;
                strcpy(dados[i].nome, temp.nome);
            }
            //printf("%d ", vetor[i]);
        }
    }
    
    //mostrar ordenado
    for (int i = 0; i < 3; i++){
        printf("%s %.2f %d \n", dados[i].nome, dados[i].altura, dados[i].idade);
    }


    return 0;
}
