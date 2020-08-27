//EXERCICIO 7
chefe()

function chefe(){
var vetor = []//declara o vetor
    exe7()//estamos passando o vetor como parametro - escopo global
}

function exe7(){// vet representa o vetor -> oque fizermos com o vet, sera feito em vetor

var numero = Number(prompt(`informe um numero`))
do{

    //coloca o numero em vet
    vet.push(numero)
    numero = Number(prompt(`informe outro numero, informe numero negativo para encerrar`))
}
while (numero >= 0)
}