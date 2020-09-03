chefe ()

function chefe(){
    let vetor = []

    do{
        let opcao = Number(prompt(`Escolha uma das opções: \n [1] Cadastrar \n [2] Média de idade das pessoas com olhos castanhos e altura superior a 1.60 \n [3] A maior idade entre os habitantes \n [4]Qtde de indv. do sexo feminino c/ id 15-45 ou que tenham olhos verdes e altura inderior a 1.70 \n [5] O percentual de homens \n [6]`))
        switch(opcao){
            case 1: cadastra(vetor)
            break
            case 2: mediaIdades(vetor)
                    break
        
            case 3: maiorIdade(vetor)
                    break
        
            case 4: qtdeIndv(vetor)
                    break
        
            case 5: porcentagem(vetor)
                    break
        
            default: console.log(`Opção inválida`)
            } 
        }
        while(opcao != 6)
}
function cadastra(vet){
    //entrada de dados, atribuindo em um objeto
    //no singular
    let habitante = new Object()
    habitante.sexo = prompt("Informe [F] para feminino e [M] para masculino")
    habitante.altura = Number(prompt("Informe a altura"))
    habitante.idade = Number(prompt("Informe a idade"))
    habitante.cor = prompt("Informe a cor dos olhos, sendo: [A] Azuis, [V] Verdes e [C] castanhos")
    
    //coloco habitante em um conjunto de habitanteS
    vet.push(habitante)//obs que na verdade vai inserir no vetor
}

//Média de idade das pessoas com olhos castanhos e altura superior a 1.60
function mediaIdades(vet){
    let soma = 0 
    for(let i = 0; i < vet.length; i++){
        if ((vet[i].cor == 'C') && (vet[i].altura >= 1.60)){
            soma = soma + vet[i].idade
            console.log(`A Média de idade das pessoas com olhos castanhos e altura superior a 1.60 é = ${soma/vet.length}`)
        }
    }
}

//A maior idade entre os habitantes
 //sempre percorre o vetor
function maiorIdade(vet){
    let maiorId = vet[0].idade //supomos que a maior idade seja a primeira, (posição [0] do nosso vetor)
    for(let i = 0; i < vet.length; i++){
        if (vet[i].idade > maiorId){
            maiorId = vet[i].idade
            console.log(`Maior idade: ${maiorId} `)
        }
    }
}

//Qtde de indv. do sexo feminino c/ id 15-45 ou que tenham olhos verdes e altura inderior a 1.70
function qtdeIndv(vet){
    let qtde = 0
    for(let i = 0; i < vet.length; i++){
        if (((vet[i].sexo == 'F') && (vet[i].idade >= 15) && (vet[i].idade <= 45))
        || 
        ((vet[i].cor == 'A') && (vet[i].altura == 1.70))){
            qtde ++
        }
        console.log(`${qtde} possuem do sexo feminino c/ id 15-45 ou que tenham olhos verdes e altura inderior a 1.70 `)
    }
}

//Porcentagem homens
function porcentagem(vet){
    let qtdeM = 0
    for(let i = 0; i < vet.length; i++){
        if (vet[i].sexo == 'M') {
            qtdeM ++
        }
        console.log(`${(qtdeM/vet.length) * 100} possuem do sexo feminino c/ id 15-45 ou que tenham olhos verdes e altura inderior a 1.70 `)
    }
}

