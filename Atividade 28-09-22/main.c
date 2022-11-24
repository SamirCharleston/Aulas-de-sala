#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv)
{
    FILE *p_file;
    char conteudo[100];

    p_file = fopen(argv[1], "r");

    fgets(conteudo, 100, p_file);

    printf("%s", conteudo);

    return 0;
}
