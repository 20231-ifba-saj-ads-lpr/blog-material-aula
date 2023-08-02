/*
Defina uma estrutura chamada "Data" com os campos dia, mês e ano, crie uma função que receba uma variável dessa estrutura representando uma data e verifique se a data é válida.

Uma data é válida se:

O mês está entre 1 e 12.
O ano é um número positivo.
O dia está dentro do intervalo válido para o mês (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
*/

#include <stdio.h>
#include <string.h>
struct Data{
    int dia;
    int mes;
    int ano;
};

int dataValida(struct Data d){
    //O mês está entre 1 e 12.
    if(d.mes>12 || d.mes<1){
        return 0;
    }
    //O ano é um número positivo.    
    if(d.ano < 0){
        return 0;
    }
    //O dia está dentro do intervalo válido para o mês (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    if(d.mes == 1 || 
       d.mes == 3 ||
       d.mes == 5 || 
       d.mes == 7 ||
       d.mes == 8 || 
       d.mes == 10||
       d.mes == 12){
        if(d.dia>31){
            return 0;
        }
    }
    if(d.mes == 2 ){
        if(d.dia>28){
            return 0;
        }
    }


    if(d.mes == 4 || 
       d.mes == 6 ||
       d.mes == 9 || 
       d.mes == 11){
        if(d.dia>30){
            return 0;
        }
    }
    int diasDoMes[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    if(d.dia > diasDoMes[d.mes]){
        return 0;
    }


    return 1;
}

int main(){
}
