---
icon: edit
date: 2023-07-04 21:30:00.00 -3
tag:
  - condicional
category:
  - Aula
order: 6
---

# Estruturas (Tipo definido pelo programador)

exemplo de código

Escrevendo data
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct data{
    int dia;
    int mes;
    int ano;
};

struct data criaData(int dia, int mes, int ano){
    struct data novaData;
    novaData.dia = dia;
    novaData.mes = mes;
    novaData.ano = ano;
    return novaData;
}

void escrevaData(struct data d){
    printf("%d/%d/%d",d.dia, d.mes,d.ano);
}
char* stringData(struct data d){
    char* string;
    sprintf(string,"%d/%d/%d",d.dia, d.mes,d.ano);
    return string;
}
int main(){
    struct data inicio, fim;
    inicio = criaData(1,1,2020);
    fim = criaData(1,1,2022);
    
    printf("inicio %s e fim %s", stringData(inicio), stringData(fim));

    return 0;
}
```


comparando data

```c
#include <stdio.h>
//estrutura para armazenar uma data (dd/mm/yyyy)
struct data{
    int dia;
    int mes;
    int ano;
};

int maiorData(struct data data1, struct data data2){
    //7/6/2023 -> 20230000 + 600 + 7
    int intData1 =  (data1.ano * 10000) + (data1.mes * 100) + data1.dia;
    int intData2 =  (data2.ano * 10000) + (data2.mes * 100) + data2.dia;
    if(intData1 > intData2){
        return 1;   
    }else{
        return 0;
    }
}
struct data novaData(int dia, int mes, int ano){
    struct data dataTemp;
    dataTemp.dia = dia;   
    dataTemp.mes = mes;
    dataTemp.ano = ano;
    return dataTemp;
}

int main(){    
    printf("compara datas %d \n", maiorData(
        novaData(19,7,2022),
        novaData(10,7,2023)
    ));

    return 0;
}

```
