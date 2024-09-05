function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    let fibonacci = a + b;
    
    while (fibonacci <= numero) {
        if (fibonacci === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = fibonacci;
        fibonacci = a + b;
    }
    
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}


const numeroInformado = 2;
console.log(pertenceFibonacci(numeroInformado));