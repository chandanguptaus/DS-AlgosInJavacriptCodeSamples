class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        delete this.data[this.length - 1];
        this.length--
        return this.data;
    }
    findIndex(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item)
                return i;
        }
    }

}


var arr1 = new MyArray();
arr1.push('a');
arr1.push('b');
arr1.push('c');
arr1.push('d');


console.log(arr1);
console.log(arr1.findIndex('d'));

var car = {
    color: 'green',
    make: 'toyota',
    model:'2004',
    tyres: ['frontrightwheel','frontleftwheel']
}

console.log(car.tyres);