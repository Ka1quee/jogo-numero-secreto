 const menorValor = 1;
 const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio (){
    // precisamos usar o return pra retornar um valor q afunção faça
   return parseInt(Math.random() * maiorValor + 1)
}

console.log('Numero Secreto:', numeroSecreto );

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor