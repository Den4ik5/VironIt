Stack = require('./Stack');

class Queue extends Stack{
    constructor(){
        super();
        this.stack = new Stack();
    }
    pop() {
        let helpingStack = new Stack();
        while(this.stack.size()>1){
            helpingStack.push(this.stack.pop());
        }
        let el =this.stack.pop();
        while(helpingStack.size()>0){
            this.stack.push(helpingStack.pop());
        }
        return el;
    }
    viewFirst() {

        let helpingStack = new Stack();
        while(this.stack.size()>0){
            helpingStack.push(this.stack.pop());
        }
        console.log(helpingStack.viewFirst());
        while(helpingStack.size()>0){
            this.stack.push(helpingStack.pop());
        }
    }

    changeQueueDirection(){
        let helpingStack1 = new Stack();
        let helpingStack2 = new Stack();
        while(this.stack.size()>0){
            helpingStack1.push(this.stack.pop());
        }
        while(helpingStack1.size()>0){
            helpingStack2.push(helpingStack1.pop());
        }
        while(helpingStack2.size()>0){
            this.stack.push(helpingStack2.pop());
        }
    }
}

let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.changeQueueDirection();

queue.viewFirst();

