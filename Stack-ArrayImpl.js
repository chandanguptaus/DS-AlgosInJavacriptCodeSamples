class Stack {
    constructor() {
        this.array = [];
    }

    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
      this.array.pop();
      return this;
    }
    peek() {
        return this.array[this.array.length - 1];
    }
}


const stck = new Stack();
stck.push(4);
stck.push(5);
stck.push(8);
stck.push(9);
// stck.pop();
// stck.pop();
console.log(stck.peek());


// console.log(stck.pop());

// console.log(stck.peek());
// push items to stack

// pop items to stack

// peek