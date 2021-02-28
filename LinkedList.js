// 10 -> 5-> 4
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {

    constructor(val) {
        this.head = new Node(val)
        this.tail = this.head;
        this.length = 1;
    }

    append(val) {
    
         const newNode = new Node(val);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
console.log(myLinkedList.append(30));

console.log(myLinkedList.prepend(7));
console.log(myLinkedList.prepend(5));

console.log(myLinkedList.append(40));
// console.log(myLinkedList);
// console.log(myLinkedList);