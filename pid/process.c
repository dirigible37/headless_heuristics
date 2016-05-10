#include <stdio.h>
#include <stdlib.h>
#include <string.h>

double data[1000][10];

int hasdec(char *s)
{
	while (*s) {
		if (*s == '.') return 1;
		s++;
	}
	return 0;
}

int main(void)
{
	int i, j, k, iter, maxrow, count, col;
	FILE *fp;
	char s[100], name[100], fname[100];
	fgets (s, 100, stdin);
	for (iter=0; iter<10; iter++) {
		fgets (name, 100, stdin);
		name[strlen(name)-1] = 0;
		fgets (s, 100, stdin);
		printf ("-2 -2 -2 -2 -2 -2 -2 -2 -2 -2\n", name);
		for (i=0; i<1000; i++)
			for (j=0; j<10; j++)
				data[i][j] = -1;
		col = 0;
		count = 0;
		maxrow = 0;
		do {
			fgets (s, 100, stdin);
			if (!hasdec(s)) {
				if (col == 9) break;
				col++;
				count = 0;
			} else {
				data[count++][col] = atof(s);
				if (count > maxrow) maxrow = count;
				fgets (s, 100, stdin);
			}
		} while (1);
		for (i=0; i<maxrow; i++) {
			for (j=0; j<10; j++)
				printf ("%.4lf ", data[i][j]);
			printf ("\n");
		}
	}
}
