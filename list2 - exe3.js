chefe()

function chefe(){
    //nao mais vamos declarar variaveis usando a palavra chafe var (escopo global)
    //a partir de agora vamos declarar usando let (escopo local)
    let vetor = []// este vetor vai existir apenas dentro dessa função
    do{ 

        var opcao = Number(prompt(`digite \n [1]. entrada \n [2]. relat1 \n [3]. relat2 \n [4]. relat3 \n [5]. relat4 \n [6]. saida \n [7] `))
        switch(opcao){
            case 1: entrada(vetor)//estamos passando uma referencia na memoria do vetor
            case 2: calcularMedia(vetor)
            break
            case 3: calcularMaiorIdade(vetor)
            break
            case 4: calcularQtdade(vetor)
            break
            case 5: calcularPercentual(vetor)
            break
            case 6: console.log(`obrigado por utilizar nosso programa`)
            break
            default: console.log(`Opção invalida, tente novamente`)
        }
    }
    while (opcao != 6)
}

function entrada(vet){//vet vai apontar para vetor
      console.log(`entrou na função entrada`)
      //cria objeto
      let objeto = new Object()
      objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase()// converte para letra maiuscula
      objeto.altura = Number(prompt(`informe a altura`))
      objeto.idade = Number(prompt(`informe a idade`))
      objeto.olhos = prompt(`informe A(azuis) V(verde) C(castanho)`).toUpperCase()//converte para letra maiuscula
      //vamos inserir em vetor e nao em vet
      vet.push(objeto)
      console.log(`Habitante inserido com sucesso`)
}

function calcularMedia(vet){//vet vai apontar para vetor
    console.log(`entrou na função calcular media`)
    let soma = 0
    let qtde = 0
    for(let i=0;i<vet.length;i++){
        if ((vet[i].olhos == "C") && (vet[i].altura > 1.60))
        soma = soma + vet [i].idade
        qtde++
    }
    console.log(`A media da idade é ${soma/qtde}`)
}

function calcularMaiorIdade(vet){//vet vai apontar para vetor
    let maiorIdade = vet[0].idade]//assume que o primeiro habitante tem a maior idade
    for(let i=1; i < vet.length; i++){
        if (vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade //atualiza maior idade
        }
    }
    console.log(`entrou na função calcular maior idade`)
}

function calcularQtdade(vet){//vet vai apontar para vetor
    let qtde = 0
    for(let i =0;i<vet.length;i++){
    if ((vet[i].sexo == "F") && (vet[i].idade >=20) && (vet[i].idade >=45))
    ||
    ((vet[i].olhos == "A") && (vet[i].altura == < 1.70)))
        qtde++
    }

    console.log(`A qtde é de ${qtde}`)
}

function calcularPercentual(vet){//vet vai apontar para vetor
    let conta = 0
    for(let i=1; i < vet.length; i++){
        if (vet [i].sexo == "M"){
            conta++ //atualiza maior idade
        }
    }
    console.log(`O percentual de homens é ${(conta/vet.length)*100}`)
}