class Map1 {
    constructor(size) {
        this.data = new Array(size);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i <= key.length - 1; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
            this.size++;
        }
        else {
            var bucket = this.data[address];
            if (bucket) {
                for (let i = 0; i <= bucket.length - 1; i++) {
                    if (key === bucket[i][0]) {
                        bucket[i][1] = value;
                        return this.data;
                    }
                }
                bucket.push([key, value]);
                this.size++;
            }
        }
        return this.data;
    }

    get(key) {

        var address = this._hash(key);
        let currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i <= currentBucket.length - 1; i++) {
                if (key === currentBucket[i][0]) {
                    return currentBucket[i][1];
                }
            }
        }
    }
}

const mymap = new Map1(15);

mymap.set('apples', 1000);
mymap.set('bananas1', 1);
mymap.set('bananas2', 2);
mymap.set('bananas3', 3);
mymap.set('bananas4', 4);
mymap.set('bananas4', 5);
mymap.set('bananas5', 5);
mymap.set('bananas6', 6);
mymap.set('bananas7', 7);
mymap.set('bananas8', 8);
mymap.set('bananas9', 9);
mymap.set('john smith', '53-81-897');
mymap.set('Sandra Dee', '569-87-89');
mymap.set('Sandra Dee', '569-87-88');
var data = mymap.set('apples', 1200);
console.log(mymap.get('apples'));
console.log(mymap.get('bananas3'))
console.log(mymap.get('Sandra Dee'))
console.log(mymap.get('bananas9'))
console.log(mymap.get('bananas8'))
console.log(data);






// perforamance testing Maps.
const mymap = new Map1(10000);
// for(let i =0;i <= 10000; i++){
//     mymap.set(i, i+1);
// }

// console.log(mymap.get(500));