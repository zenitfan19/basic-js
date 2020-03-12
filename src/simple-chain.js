const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;    
  },
  addLink(value) {
    if(arguments.length === 0) {
      value = "";
    }
    this.chain.push('( ' + String(value) + ' )');
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      this.chain.splice(position-1, 1);
      return this;
    } else {
      this.chain = [];
      throw 'Invalid position';  
    }    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
