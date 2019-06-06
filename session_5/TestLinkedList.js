class Node {
 constructor(data) {
     this.data = data;
     this.next = null;
 }
}

class TestLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let node = new Node(value);
        if(this.head === null) {
            this.head = this.tail = node;
            return true;
        }
        this.tail.next = node;
        this.tail = this.tail.next;
        return true;
    }

    prepend(value) {
        let node = new Node(value);
        if(this.head === null) {
            this.head = this.tail = node;
            return true;
        }
        node.next = this.head;
        this.head = node;
        return true;
    }

    insert(value, pos) {
        let node = new Node(value);
        if (pos < 1) {
            console.log('Insert error : Invalid position.');
            return true;
        }
        if (pos == 1) {
            this.prepend(value);
        }
        else {
            let temp = this.head;
            let prev = this.head;
            for (let i = 0; i < pos - 1; i++) {
                if (temp !== null) {
                    prev = temp;
                    temp = temp.next;
                }
                else {
                    console.log('Insert error : Invalid position.')
                    return true;
                }
            }
            node.next = temp;
            prev.next = node;
            return true;
        }

    }

    delete(value) {
        if(this.head === null) {
            console.log('Empty List : Nothing to delete.');
            return true;
        }
        else {
            let prev = this.head;
            let temp = this.head;
            while(temp != null) {
                if (temp.data != value) {
                    prev = temp;
                    temp = temp.next;
                }
                else {
                    prev.next = temp.next;
                    temp.next = null;
                    return true;
                }
            }
            console.log('Element not found.');
            return true;
        }
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
}

const linkedList = new TestLinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(40);
linkedList.insert(25, 3);
linkedList.delete(10);
linkedList.dump();

