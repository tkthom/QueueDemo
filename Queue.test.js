const { Queue } = require('./Queue.js');

/*
Queues have the following functionality:
    * enqueue(item) -> Adds to the queue
    * dequeue() -> Removes from the 
       front of the queue

    * size() -> How many items are in the queue


*/

test("Queue construction", function() {
    let queue = new Queue();
    expect(queue).toBeDefined();
})


test('Queue enqueue 1 element, check size is 1', function() {

    let queue = new Queue();
    queue.enqueue(10);

    expect(queue.size()).toBe(1);

})

test('Queue enqueue 2 elements, check size is 2', function() {

    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.size()).toBe(2);

})

test('Queue enqueue 3 elements, check size is 3', function() {

    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.size()).toBe(3);

})

test('Queue enqueue 3 elements, dequeue 1', function() {

    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.size()).toBe(3);
    let v = queue.dequeue();
    expect(queue.size()).toBe(2);
    expect(v).toBe(10);

})

test('Queue enqueue 3 elements, dequeue 2', function() {

    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.size()).toBe(3);
    let v = queue.dequeue();
    expect(queue.size()).toBe(2);
    expect(v).toBe(10);
    v = queue.dequeue();
    expect(queue.size()).toBe(1);
    expect(v).toBe(20);

})
