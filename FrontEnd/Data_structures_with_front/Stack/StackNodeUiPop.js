const StackNodeUIPop = (function (docObj) {
    class StackNodeUIPop{
        constructor(parentNode,value) {
            const stackNodes = docObj.getElementsByClassName('stack-node-ui');
            const nodeForRemove = stackNodes[stackNodes.length - 1];

            parentNode.removeChild(nodeForRemove);
        }
        static removeNodeUI(...props) {
            return new StackNodeUIPop(...props)
        }
    }
    return StackNodeUIPop;
})(document);