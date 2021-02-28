class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.bottom = null;
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;

    }
    pop() {

        const nextNode = this.top.next;
        this.top.next = null;
        this.top = nextNode;
        this.length--;
        return this;

    }

    peek() {
        return this.top;
    }
}


const stck = new Stack();
stck.push(4);
stck.push(5);
stck.push(8);
stck.push(9);
stck.pop();
stck.pop();
console.log(stck.peek());


// console.log(stck.pop());

// console.log(stck.peek());
// push items to stack

// pop items to stack

// peek