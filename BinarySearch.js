class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    Insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {

                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if (!this.root){
            return false;
        }
        let currentNode = this.root;

        while(currentNode)  {
            
             if (value < currentNode.value){
                currentNode = currentNode.left;
             }
             else if (value === currentNode.value){
                 return currentNode;
             }
             else if (value >= currentNode.value){
                currentNode = currentNode.right;
             }
        }

        return false;
    }

    remove(value){
        
    }
}


const myBinarySearchTree = new BinarySearchTree();

myBinarySearchTree.Insert(9);
myBinarySearchTree.Insert(4);
myBinarySearchTree.Insert(6);
myBinarySearchTree.Insert(20);
myBinarySearchTree.Insert(170);
myBinarySearchTree.Insert(15);
myBinarySearchTree.Insert(1);
myBinarySearchTree.Insert(62);



console.log(myBinarySearchTree.lookup(170));