const original = prompt("Digite uma palavra para inverter: ");

if (original != null) {
    const invertida = inversao(original);

    console.log("Palavra original: ", original);
    console.log("Palavra invertida: ", invertida);
}
else {
    console.log("Nenhuma palavra foi digitada");
}

function inversao(palavra) {
    let aux = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        aux = aux + palavra[i];
    }

    return aux;
}