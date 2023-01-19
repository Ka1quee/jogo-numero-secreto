const elementoChute = document.querySelector('#chute')

// colocamos o window antes do codigo pq queremos que quando nossa aplicação comece a rodar ele ja comece a reconhecer a voz
window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// confugurando o reconhecimento de voz pra nossa lingua padrão
recognition.lang = 'pt-Br';

// e para iniciar o reconhecimento de voz usamos o start:
recognition.start()

// dizendo que quando o reconhecimento de voz começar é para ele pegar o result
recognition.addEventListener('result', onSpeak)

// usamos a letra E como parametro para fazer evento com oq estiver salvo

// precisamos colocar algum parametro pq vamos buscar por um elemento especifico que o evento realiza e dessa maneira podemos filtra-lo
function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute){
    // vamos adicionar um elemento no html pelo js usando o Inner e cráse ao inves de aspas

    // usamos $ e {} para fazer com que um valor apareça no elemento criado no HTML com js
    elementoChute.innerHTML = `
    <div>Você disse: </div> 
    <span class = "box">${chute}</span>
    `
}

// adicionamos o evento de 'end' para que quando acabe ele execute alguma coisa q eu disser
// e usamos o .start pq queremos q inicie novamente assim q o evento seja acionado, evento esse q é o 'end'
recognition.addEventListener('end', ()=>
    recognition.start())