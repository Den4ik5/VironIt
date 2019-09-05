const StackNodeUI = (function (docObj) {
    class StackNodeUI {
        constructor(parentNode, value) {
            this.nodeEl = docObj.createElement('div');
            this.nodeEl.className = 'stack-node-ui';
            this.nodeEl.innerText = value;
            parentNode.append(this.nodeEl);
        }
        static createNodeUI(...props) {
            return new StackNodeUI(...props);
        }
    }
    return StackNodeUI;
})(document);