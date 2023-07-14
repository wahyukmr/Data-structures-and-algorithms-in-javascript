class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.front = 0;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (this.isFull()) {
      return console.log("Circular queue is full. Unable to enqueue element.");
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLength++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return console.log("Circular queue is empty. Unable to dequeue element.");
    }

    const element = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    return element;
  }

  peek() {
    if (this.isEmpty()) {
      return console.log("Queue is empty");
    }

    return this.items[this.front];
  }

  print() {
    let result = [];
    let count = 0;
    let index = this.front;

    while (count < this.currentLength) {
      result.push(this.items[index]);
      index = (index + 1) % this.capacity;
      count++;
    }
    return result;
  }
}
const queue = new CircularQueue(5);
console.log(queue.isEmpty()); // Output: true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.print()); // Output: [10, 20, 30, 40, 50]
console.log(queue.peek()); // Output: 10

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
queue.enqueue(400);
queue.enqueue(500);
console.log(queue.print()); // [30, 40, 50, 400, 500]
console.log(queue.peek()); // 30
