function avaliarPessoa(altura, beleza, carisma){

    let contagemMaioresQueSete = 0;
    if (altura > 7) contagemMaioresQueSete++;
    if (beleza > 7) contagemMaioresQueSete++;
    if (carisma > 7) contagemMaioresQueSete++;

    if (contagemMaioresQueSete === 3) {
        console.log("Booooraa");
    } else if (contagemMaioresQueSete === 2) {
        console.log("só vai…");
    } else if (contagemMaioresQueSete === 1) {
        console.log("Fé em Deus…");
    } else {
        console.log("Misericórdia");
    }   
}
avaliarPessoa(8, 9, 10);
avaliarPessoa(8, 9, 6);   
avaliarPessoa(8, 5, 6);   
avaliarPessoa(5, 6, 6);