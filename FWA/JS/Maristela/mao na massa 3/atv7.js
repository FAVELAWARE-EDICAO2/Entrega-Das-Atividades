// Função para remover strings com menos de 5 caracteres
function removerCurtos(strings) {
    // Criando um novo array vazio para armazenar as strings restantes
    const longas = [];
  
    // Percorrendo cada string do array original
    for (const string of strings) {
      // Verificando se a string possui pelo menos 5 caracteres
      if (string.length >= 5) {
        // Se tiver 5 ou mais caracteres, adicione-a ao novo array
        longas.push(string);
      }
    }
  
    // Retornando o novo array com strings longas
    return longas;
  }
  
  // Exemplo de uso
  const strings = ["olá", "mundo", "curto", "frase longa", "mais uma longa"];
  const stringsLongas = removerCurtos(strings);
  console.log(stringsLongas); // Resultado: ["mundo", "frase longa", "mais uma longa"]






/* ******************************************************************** */
/*  Programa de conversao de Minusculas para Maiusculas			*/
/*  Autor: Marcio Serolli Pinho                 			*/
/*  Data: 24/04/99                                                      */
/*  Disciplina: Laboratorio de Programacao I	 			*/
/* ******************************************************************** */
/*  Este programa usa a funcao "toupper" que converte um caracter
para maiuscula.
    Como este comando opera apenas sobre 1 caracter, eh necessario
tratar um carcter de cada vez. Para acessar 1 caracter de uma string,
deve-se usar um indice ao lado do nome da variavel. Por exemplo,
	   Str[3] corresponde ao quarto caracter da string Str
           Str[0] corresponde ao primeiro caracter da string Str
*/

 
 
void main()
{
      i, TamStr;
     Str[30];
    clrscr();
    scanf("%s", Str);
    TamStr = strlen(Str);
    for(i=0; i<TamStr; i++)
    {                            // Converte cada caracter de Str
     Str[i] = toupper (Str[i]);  // para maiusculas
    }
    printf("%s",Str);
    getch();
}