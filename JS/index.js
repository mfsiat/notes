// const n1 = {
//     data: 100
// };

// const n2 = {
//     data: 200
// };

// n1.next = n2;

// console.log(n1);

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100);
console.log(n1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}