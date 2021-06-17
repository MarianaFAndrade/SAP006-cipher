import cipher from './cipher.js';

//ENCODE
const mensagemEncode = document.getElementById('inputTextoParaCodificar')
const chaveDeslocamentoEncode = document.getElementById('seletorInputEncode')
const botao = document.getElementById('botaoCodificar')
const resultado = document.getElementById('inputTextoCodificado')

// DECODE
const mensagemDecode = document.getElementById('inputTextoParaDecodificar')
const chaveDeslocamentoDecode = document.getElementById('seletorInputDecode')
const botaoDecode = document.getElementById('botaoDecodificar')
const resultadoDecode = document.getElementById('inputTextoDecodificado')



botao.addEventListener('click', () => {
    let string = mensagemEncode.value
    let seletor = parseInt(chaveDeslocamentoEncode.value)

    const mensagemCodificada = cipher.encode(seletor, string)

    resultado.value = mensagemCodificada
})

botaoDecode.addEventListener('click', () => {
    let stringDecode = mensagemDecode.value
    let seletorDecode = parseInt(chaveDeslocamentoDecode.value)

    const mensagemDecodificada = cipher.decode(seletorDecode, stringDecode)

    resultadoDecode.value = mensagemDecodificada
})