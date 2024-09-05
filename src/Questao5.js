function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    
    return stringInvertida;
  }
  
  const minhaString = "Meu nome é Hian Linhares";
  const stringInvertida = inverterString(minhaString);
  console.log(`String invertida: ${stringInvertida}`);
  