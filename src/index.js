import cipher from './cipher.js';

const mensagem = document.getElementById('textoInserido1')
const chaveDeslocamentoEncode = document.getElementById('seletor1')
const botao = document.getElementById('botaoCodificar')
const resultado = document.getElementById('textoRecebido1')


botao.addEventListener('click', () => {
    let string = mensagem.value
    let seletor = parseInt(chaveDeslocamentoEncode.value)

    console.log(mensagem.value)
    console.log(chaveDeslocamentoEncode.value)
    console.log(resultado.value)

    const mensagemCodificada = cipher.encode(seletor, string)
    console.log('chaveDeslocamentoEncode:', mensagemCodificada)

    resultado.value = mensagemCodificada
})

const mensagemDecode = document.getElementById('textoInserido2')
const chaveDeslocamentoDecode = document.getElementById('seletor2')
const botaoDecode = document.getElementById('botaoDecodificar')
const resultadoDecode = document.getElementById('textoRecebido2')


botaoDecode.addEventListener('click', () => {
    let stringDecode = mensagemDecode.value
    let seletorDecode = parseInt(chaveDeslocamentoDecode.value)

    console.log(mensagemDecode.value)
    console.log(chaveDeslocamentoDecode.value)
    console.log(resultadoDecode.value)

    const mensagemDecodificada = cipher.decode(seletorDecode, stringDecode)
    console.log('chaveDeslocamentoDecode:', mensagemDecodificada)

    resultadoDecode.value = mensagemDecodificada
})