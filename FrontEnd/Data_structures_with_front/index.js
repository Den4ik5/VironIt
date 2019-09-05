const stackView = document.getElementById('stack-view');
const buttonView = document.getElementById('button-view');
const stack = new Stack();
const stack2 = new Stack();


function onPushNode(value) {
    StackNodeUI.createNodeUI(stackView, value);
}

let butt = new Button(buttonView, "Stack");
let butt2 = new Button(buttonView, "Queue");
let butt3 = new Button(buttonView, "Tree");
stack.on('pushStackNode', onPushNode);
stack2.on('pushStackNode', onPushNode);

stack.push(1);
stack.push(2);
stack.pop();
stack2.push(3);
stack2.push(4);


console.log(stack);
