function verificaSeOChutePossuiUmValorValido(chute){

    // para transformar o chute que vem em forma de String para inteiro é fazer dessa forna> "+chute"
    // só de somar ele ja converte o numero pra inteiro

    const numero = +chute

    if(chuteForInvalido(numero)){
        // se esse numero nao for do tipo number irá dar o erro:

        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        // dizendo para nao ser executado mais nada dessa função caso o valor seja inválido
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`
        <div>Válor Inválido: Fale um numero entre</div>
        ${menorValor} e ${maiorValor}
        `
        
        return;
    }

    if(numero === numeroSecreto){
        // criando uma nova tela caso o numero falado esteja correto utilizando o document.body:
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id ="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

    }else if(numero > numeroSecreto ){
        elementoChute.innerHTML += ` <div>O numero secreto é maior <i class="fa-solid fa-down-long"></i></div> `
    } else{
        elementoChute.innerHTML += ` <div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div> `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    // usamos "||" pois estamos adicionando outro if porem na msm linha
    return numero > maiorValor || numero < menorValor
}

// fazendo com que a pagina reinicie sempre que o botao que tenha com id "jogar-novamente" for clicado
document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
} )

