const Button = (function (docObj) {
    class Button{
        constructor(parentNode, name, func  ){
            this.nodeEl = docObj.createElement('button');
            this.nodeEl.innerText = name;
            this.nodeEl.type ='button';
            this.nodeEl.onclick = func;
            this.nodeEl.className = 'button-node-ui';
            parentNode.append(this.nodeEl);
        }
        setAction(func){
            this.nodeEl.onclick = func();
        }
    }
    return Button;
})(document);
const   SetACtion = (function () {
    this.action = this.action || [];

})();