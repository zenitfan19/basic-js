module.exports = class DepthCalculator {
  constructor() {
    this.depth = 0;
  }
  calculateDepth(arr, currentDepth) {
    let curDepth = arguments.length === 2 ? currentDepth : 1;
    this.depth = arguments.length === 2 ? this.depth : 1;    
    if(!Array.isArray(arr)) {
      throw 'Not an array';
    } else if(arguments.length !== 2) {
      this.depth = 1;
    }
    if(arr.length !== 0) {
      for(let element of arr) {        
        if(Array.isArray(element)) {                    
          this.depth = this.calculateDepth(element, curDepth+1);
        } else {
          this.depth = this.depth > curDepth ? this.depth : curDepth;
        }
      }
    } else {
      this.depth = this.depth > curDepth ? this.depth : curDepth;
    }  
        
    return this.depth;
  }
};