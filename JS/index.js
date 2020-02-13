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

// const n1 = new Node(100);
// console.log(n1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node 
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }


    // Insert last node 

    // Insert at index 

    // Get an index 

    // Remove at index 

    // Clear list 

    // Print list data 
    printListData() {
        // current represents the current node
        let current = this.head;
        // loop through all the nodes 
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.printListData();

