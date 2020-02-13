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
        this.size++; 
    }


    // Insert last node 
    // This helps us to insert to the end
    insertLast(data) {
        let node = new Node(data);
        let current;


        // If empty, make head 
        if(!this.head) {
            this.head = node; 
        } else {
            current = this.head;
            // Start from beginning 
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;

    }

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
ll.insertLast(400);

ll.printListData();

