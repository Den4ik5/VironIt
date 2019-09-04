class Node {
    constructor(value){
        this.nodeValue = value;
        this.leftNode = null;
        this.rightNode = null;
    }
    set left(value){
        this.leftNode = value;
    }
    get left(){
        return this.leftNode;
    }
    set right(value){
        this.rightNode = value;
    }
    get right(){
        return this.rightNode;
    }
    get value(){
        return this.nodeValue;
    }
}

class BinaryTree {
    constructor(){
        this.storage = new Set();
        this.helpingStorage = new Set();
        this.rootNode = null;
    }
    setRootNode(value){
        let node = new Node(value);
        this.helpingStorage.add(value);
        this.storage.add(node);
        this.rootNode = node;
    }
    addNode(value){
        if(this.storage.size===0){
            this.setRootNode(value);
        }
        else if(this.helpingStorage.has(value)){
            return this;
        }
        else {
            let node = new Node(value);
            this.storage.add(node);
            this.adding(node, this.rootNode);
        }
    }
    adding(node, currentNode){
        //console.log({ node, currentNode })
        if(node.value > currentNode.value && currentNode.right === null){
            currentNode.right = node;
            return this;
        }
        else if(node.value > currentNode.value && currentNode.right !== null){
             this.adding(node, currentNode.right);
        }
        else if(node.value < currentNode.value && currentNode.left === null){
            currentNode.left = node;
            return this;
        }
        else{
            this.adding(node,currentNode.left);
        }
    }
    searchNode(value){
        //ну это читы конечно
        //return this.helpingStorage.has(value);
        if(this.storage.size===0){
            return false
        }
        else{
            return this._searching(value, this.rootNode);
        }
    }
    _searching(value, currentNode){
        if(value === currentNode.value){
            return true;
        }
        else if(value > currentNode.value &&currentNode.right!==null){
            return this._searching(value,currentNode.right);
        }
        else if(value< currentNode.value && currentNode.left!== null){
            return this._searching(value, currentNode.left);
        }
        else{
            return false;
        }
    }
}
let tree = new BinaryTree();
tree.addNode(5);
tree.addNode(8);
tree.addNode(3);
tree.addNode(4);
tree.addNode(2);
tree.addNode(6);
tree.addNode(9);

console.log(tree.searchNode(3));
console.log(tree.searchNode(11));
console.log(tree.searchNode(1));

