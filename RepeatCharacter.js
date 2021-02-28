/// Given an array = [2,5,1,2,,4]
// return 2
// ke pints unsorted array input array ouput is int
// function RecCharater(inputarray)
// loop thrpugh array
// add the item as a key to hashtable
// check in hastable if key found then break the loop and exit O(n) and space complexity Big o(n)
//

function FindRepeatCharacter(inputarray) {
    var map = {};
    var output = [];
    for (let element of inputarray) {
        if (map[element] !== undefined) {   
            return element;
        }
        else {

            map[element] = element
        }
    }

    return undefined;
}

var arr = [2, 5, 1, 2, 3,5,1,4]

console.log(FindRepeatCharacter(arr));