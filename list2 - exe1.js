chefe()

function chefe(){

    //vetor de escopo local
    let vendedores = []
    do{
        let opcao = Number(prompt(`Escolha \n [1]. cadastraVendedor \n [2]. cadastraVenda \n [3]. Sair`))
        switch(opcao) {
            case 1: cadastraVendedor(vendedores) // essa passagem é por referencia e torna o vetor escopo global
            break
            case 2:
                break
                case 3: console.log(`Tchau`)
                default: console.log(`Tente novamente...`)
        }
    }
    while (opcao != 3)
    

}

function cadastraVendedor(vended){ // vended representa o vetor vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o codigo do vendedor`))
    objeto.nome = prompt(`informe nome do vendedor`)
    // verificar se o codigo ja existe
    for( let i= 0 ; i < vended.lenght;i++)
    if (vended[i]. codigo == objeto.codigo){
        console.log(` cadastro cancelado pois ja existe um vendedor com esse codigo`)
        return 0 // sai da função pois nao iremos cadastrar
    }
    //insere vended, mas na verdade insere no vetor vendedores
    vended.push(objeto)

}

function cadastraVendas( vdas, vdes){ //vdas representa o vetor vendas e vdes representa o vetor vendedores

     let objeto = new Object()
     objeto.codigo = Number(prompt(`Informe o codigo da venda`))
     codigo.vendedor = Number(prompt(`Informe o codigo do vendedor`))
     objeto.mes = Number(prompt(`informe o mes da venda`))
     objeto.valor = Number(prompt(`informe o valor da venda`))
     //verifica se o vendedor existe
     //percorre o vetor vendedores (vdes)
     for(let i=0;i<vdes.lenght;i++){
         if (objeto.vendedor == vdes[i].codigo) { //achamos o vendedor
            //verifica se existe venda para este vendedor no mesmo mes - não podemos registrar a venda
            //percorre o vetor vendas
            for(let j=0; j < vdas.lenght;j++){
                if((objeto.mes == vdas[i].mes) && (objeto.vendedor == vdas[i].vendedor)){
                    console.log(`nao podemos registrar a venda`)
                    return 0 //sai funçao
                }
                //ja percorreu e nao achou, então vamos inserir
            }//insere a venda em vdas, que na verdade é vendas
            vdas.push(objeto)
            console.log(`venda registrada`)
            return 0 //sai da função
         }
     }
     console.log(`vendedor nao existe`)
     
}