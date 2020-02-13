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
    // Where the index is and what is the data 
    insertAt(data, index) {
        // if index is out of range 
        if(index > 0 && index > this.size) {
            return;
        } 

        // if its the first one then set it to head
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        } 

        const node = new Node(data);
        let current, previous;

        // Set current to first 
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after the index 
        }

        // Take the node that we initialized
        node.next = current;
        // Set the previous 
        previous.next = node;

        this.size++;
    }

    // Get an index 
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
            }

            count++;
            current = current.next;
        }

        return null;
    }

    // Remove at index 
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first 
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Clear list 
    clearList() {
        this.head = null;
        this.size = 0;
    }

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
// ll.insertAt(500, 0);

// remove data 
ll.removeAt(3);

// To clear the list 
// ll.clearList();

// prints the list data 
ll.printListData();
// ll.getAt(0);

