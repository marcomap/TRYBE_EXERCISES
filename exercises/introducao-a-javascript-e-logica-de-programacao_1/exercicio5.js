 // Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 let innerTriangle1 = 160;
 let innerTriangle2 = 70;
 let innerTriangle3 = 10;

 let somaAngulo = innerTriangle1 + innerTriangle2 + innerTriangle3;
 let positiveAngle = innerTriangle1 > 0 && innerTriangle2 > 0 && innerTriangle3 > 0;

 if(positiveAngle){
    if (somaAngulo === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('ERROR');
  }
 //  A resolver 