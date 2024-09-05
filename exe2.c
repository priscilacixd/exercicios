#include <stdio.h>

int fibonacci (int n);
int pertenceFibonacci (int num);

int main () {

    int numero;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);
    fflush(stdin);

    if (pertenceFibonacci(numero)) {
        printf("O numero pertence a sequencia de fibonacci.\n");
    }
    else {
        printf("O numero nao pertence a sequencia de fibonacci.\n");
    }

    return 0;
}

//função para calcular fibonacci
int fibonacci (int n) {
    if ((n == 0) || (n == 1)) {
        return n;
    }
    else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

//Função para verificar se o numero pertence a sequencia de fibonacci
int pertenceFibonacci (int num) {
    int i = 0;
    int x;

    while ((x = fibonacci(i)) <= num) {
        if (x == num) {
            return 1;
        }
        i++;
    }

    return 0;
}