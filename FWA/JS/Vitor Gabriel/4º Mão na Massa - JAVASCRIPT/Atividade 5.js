console.log("#########################");
console.log("# (1) Dizer olá,        #");
console.log("# (2) Exibir data atual #");
console.log("# (3) Sair              #");
console.log("#########################");


do {var opcao = 1;
    if (opcao == 3) {
        console.log("Olá");
    } else if (opcao == 2) {
        const dataAtual = new Date();
        console.log("Data atual: " + dataAtual.toLocaleDateString());
    } else if (opcao == 3) {
        console.log("Sair");
    } else {
        console.log("Digite um dos números válidos");
    }

} while (opcao !==3);

/*
   const dataAtual = new Date();
   let opcao;
   
   do {opcao = prompt("Escolha umas das Opções:");
   
     switch (opcao) {
       case 1:
         console.log("Dizer olá")
         break;
       case 2:
         console.log("Exibir data atual")
         console.log(dataAtual)
         break
       case 3:
         console.log("Sair")
         return
       default:
         console.log("Digite um dos números validos")
     }
   } while (opcao !== 3); */