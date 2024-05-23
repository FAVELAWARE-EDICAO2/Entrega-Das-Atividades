function classificarFaixaEtaria(idade) {
    if (idade >= 0 && Number.isInteger(idade)) {
        if (idade <= 12) {
            return "Criança";
        } else if (idade <= 17) {
            return "Adolescente";
        } else if (idade <= 64) {
            return "Adulto";
        } else {
            return "Idoso";
        }
    } else {
        return "Idade inválida";
    }
}


console.log(classificarFaixaEtaria(5));  
console.log(classificarFaixaEtaria(15));
console.log(classificarFaixaEtaria(30));  
console.log(classificarFaixaEtaria(70));  
console.log(classificarFaixaEtaria(-5));  
console.log(classificarFaixaEtaria(3.5)); 