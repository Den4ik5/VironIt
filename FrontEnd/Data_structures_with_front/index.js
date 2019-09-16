const stackView = document.getElementById('stack-view');
const buttonView = document.getElementById('button-view');
const hiddenDiv = document.getElementById("hidden-container");
const stack = new Stack();

function onPushNode(value) {
    StackNodeUI.createNodeUI(stackView, value);
}

function onPopNode(value) {
    StackNodeUIPop.removeNodeUI(stackView, value);
}

function func() {
    viewDiv(hiddenDiv);
}

function viewDiv(hiddenDiv){
    let el = document.getElementById(hiddenDiv);
    if(el.style.display === "flex"){
        el.style.display = "none";
    }
    el.style.display="flex";
}

let butt = new Button(buttonView, "Stack", func);

stack.on('pushStackNode', onPushNode);
stack.on("popStackNode", onPopNode);
butt.onclick = () => alert('132') ;

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();


