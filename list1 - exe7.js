//EXERCICIO 7
chefe()

function chefe(){
var vetor = []//declara o vetor
    exe7()//estamos passando o vetor como parametro - escopo global
    console.log(vetor)
    calculaMedia(vetor)
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

function calculaMedia(vet){
    var soma =0
    for(var i=0; i < vet.lenght;i++){
        soma = soma + vet[i]
    }
    console.log(`A media é ${soma/vet.lenght}`)
}