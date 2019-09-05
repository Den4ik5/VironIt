const Button = (function (docObj) {
    class Button{
        constructor(parentNode, name ){
            this.nodeEl = docObj.createElement('button');
            this.nodeEl.innerText = name;
            this.nodeEl.className = 'button-node-ui';
            parentNode.append(this.nodeEl);
        }
    }
    return Button;
})(document);