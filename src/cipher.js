const cipher = {
  encode: function (chaveDeDesloc, string){
    let entradaEncode = string.toUpperCase();
    let cifrarMensagem = '';

    for (let i = 0; i < entradaEncode.length; i++){
      
      let codigoAsc = entradaEncode[i].charCodeAt();
      // console.log('codigoAsc:', codigoAsc);

      let encondeForm = ((codigoAsc - 65 + chaveDeDesloc) % 26) + 65;
      // console.log('encondeForm:', encondeForm);
      
      cifrarMensagem += String.fromCharCode(encondeForm);
    }
    return cifrarMensagem;
  },


  decode: function (chaveDeslocamentoDecode, string){
    let entradaDecode = string.toUpperCase();
    let decifraMensagem = '';

    for (let i = 0; i < entradaDecode.length; i++){
      
      let codigoAscDecipher = entradaDecode[i].charCodeAt();
      console.log('codigoAscDecipher:', codigoAscDecipher);

      let decodeForm = ((codigoAscDecipher - 65 - chaveDeslocamentoDecode) % 26) + 65;
      console.log('decodeForm:', decodeForm);

      decifraMensagem += String.fromCharCode(decodeForm);

    }
    return decifraMensagem;
  }
};

export default cipher;
