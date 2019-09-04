'use strict';

class Stack {
    constructor(){
        this.stack = [];
    }
    push(el){
        this.stack.push(el);
    }
    pop(){
        let el = this.stack.pop();
        return el;
    }
    size(){
        return this.stack.length;
    }
    viewFirst(){
        return this.stack[this.stack.length-1];
    }
}


module.exports = Stack;
