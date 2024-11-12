
class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }

    setNext(next) {
        this.next = next;
    }

    setItem(item) {
        this.item = item;
    }

}

class Queue {

    constructor() {

        this.first = null;
        this.count = 0;
    }

    enqueue(item) {
        
        if(this.first == null) {
            this.first = new Node(item);
        } else {
            let cur = this.first;
            while(cur.next != null) { 
                cur = cur.next;
            }

            cur.next = new Node(item);

        }

        this.count++;
    }

    dequeue() {

        if(this.first != null) {
            let tmp = this.first;
            this.first = this.first.next;
        
            this.count--;
            return tmp.item;
        }
        return null;
    }

    size() {

        return this.count;
    }

}

module.exports = { Queue };