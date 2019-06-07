class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LoopLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value, pos = null) {
        let node = new Node(value);
        if(this.head === null) {
            this.head = this.tail = node;
            return true;
        }
        this.tail.next = node;
        this.tail = this.tail.next;

        // Using this last condition to link tail to head.
        if (pos == 'last') {
            this.tail.next = this.head;
        }
        return true;
    }

    dump() {
        if(this.head === null) {
            console.log('Empty List');
            return true;
        }
        while(this.head != null) {
            console.log(this.head.data);
            this.head = this.head.next;
        }
        return true;
    }

    checkLoop() {
        if(this.head === null) {
            console.log('Empty List');
            return true;
        }
        let temp = this.head;
        while(this.head != null) {
            if (this.head.next === temp) {
                console.log('Loop is present.');
                return true;
            }
            this.head = this.head.next;
        }
        console.log('Loop is not present.')
        return true;
    }
}

const linkedList = new LoopLinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30, 'last'); // This will output 'Loop is present.'
linkedList.checkLoop();