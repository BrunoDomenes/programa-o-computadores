//EXERCICIO 9
chefe()

function chefe(){

    var numero = Number(prompt(`Informe um numero`))

    exe9(numero)
}

function exe9(num){ //supondo num 6

    var soma = 0
    for(var divisor=num; divisor >=1; divisor--){ //divisor começa em 6 e vai até 1
        if (num % divisor == 0){
            soma = soma + divisor
        }
    }
    //VERSÃO ALTERNATIVA
   // var soma = 0
   // for(var divisor=1; divisor >=num; divisor++){ //divisor começa em 1 e vai até 6
     //   if (num % divisor == 0){
     //       soma = soma + divisor
      //  }
    //}

    console.log(`A soma dos divisores de ${num} é ${soma}`)
}
