const cipher = {
  encode: function (chaveDeslocamentoEncode, mensagemEncode) {
    if (!chaveDeslocamentoEncode || !mensagemEncode){
      alert('Digite uma entrada válida');
      throw new TypeError(['Digite uma entrada válida'])
      }

    let cifrarMensagem = '';

    for (let i = 0; i < mensagemEncode.length; i++) {

      let codigoAsciiEncode = mensagemEncode[i].charCodeAt();

      let formulaEncode = '';
      if (codigoAsciiEncode >= 65 && codigoAsciiEncode <= 90) {
        formulaEncode = (((codigoAsciiEncode - 65 + chaveDeslocamentoEncode) % 26) + 65);

      } else if (codigoAsciiEncode >= 97 && codigoAsciiEncode <= 122) {
        formulaEncode = (((codigoAsciiEncode - 97 + chaveDeslocamentoEncode) % 26) + 97);

      } else if (codigoAsciiEncode >= 32 && codigoAsciiEncode <= 64 || codigoAsciiEncode >= 123 && codigoAsciiEncode <= 255) {
        formulaEncode = (codigoAsciiEncode);

      }
      cifrarMensagem += String.fromCharCode(formulaEncode);
    }
    return cifrarMensagem;

  },


  decode: function (chaveDeslocamentoDecode, mensagemdecode) {
    if (!chaveDeslocamentoDecode || !mensagemdecode){
      alert('Digite uma entrada válida');
      throw new TypeError(['Digite uma entrada válida'])
    }
    let decifrarMensagem = '';

    for (let i = 0; i < mensagemdecode.length; i++) {

      let codigoAsciiDecode = mensagemdecode[i].charCodeAt();

      let formulaDecode = '';
      if (codigoAsciiDecode >= 65 && codigoAsciiDecode <= 90) {
        formulaDecode = (((codigoAsciiDecode - 90 - chaveDeslocamentoDecode) % 26) + 90);

      } else if (codigoAsciiDecode >= 97 && codigoAsciiDecode <= 122) {
        formulaDecode = (((codigoAsciiDecode - 122 - chaveDeslocamentoDecode) % 26) + 122);

      } else if (codigoAsciiDecode >= 32 && codigoAsciiDecode <= 64 || codigoAsciiDecode >= 123 && codigoAsciiDecode <= 255) {
        formulaDecode = (codigoAsciiDecode);
      }
      decifrarMensagem += String.fromCharCode(formulaDecode);
    }
    return decifrarMensagem;
  }
};

export default cipher;
