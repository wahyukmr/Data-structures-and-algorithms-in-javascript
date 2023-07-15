export default class CircularQueue {
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
