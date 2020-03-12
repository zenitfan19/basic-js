class VigenereCipheringMachine {
  constructor(type) {
    this.type = (arguments.length > 0 && !type) ? false : true;
  }   
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyPosition = 0;
    let encryptedMessage = "";
    if(arguments.length !== 2) {
      throw 'Error';
    }
    for(let i = 0; i < message.length; i++) {
      let curSymbol = message.charAt(i);      
      if(this.isLetter(curSymbol)) {
        let curSymbolCode = curSymbol.charCodeAt(0) - 65;
        let keyCode = this.getKeyCode(key, keyPosition);
        let decryptedLetterCode = (curSymbolCode + keyCode) % 26 + 65; 
        encryptedMessage += String.fromCharCode(decryptedLetterCode);
        keyPosition++;
      } else {
        encryptedMessage += curSymbol;
      }
    }
    return this.type ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let keyPosition = 0;
    let decryptedMessage = "";
    if(arguments.length !== 2) {
      throw 'Error';
    }
    for(let i = 0; i < encryptedMessage.length; i++) {
      let curSymbol = encryptedMessage.charAt(i);      
      if(this.isLetter(curSymbol)) {        
        let curSymbolCode = curSymbol.charCodeAt(0) - 65;
        let keyCode = this.getKeyCode(key, keyPosition);
        let decryptedLetterCode = ((curSymbolCode - keyCode) + 26) % 26 + 65; 
        decryptedMessage += String.fromCharCode(decryptedLetterCode);        
        keyPosition++;
      } else {
        decryptedMessage += curSymbol;
      }
    }
    return this.type ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
  isLetter(char) {
    let code = char.charCodeAt(0);
    if(code >= 65 && code <= 90) {
      return true;
    } else {
      return false;
    }
  }
  getKeyCode(key, position) {
    return key.charCodeAt(position % key.length) - 65;
  }
}

module.exports = VigenereCipheringMachine;
