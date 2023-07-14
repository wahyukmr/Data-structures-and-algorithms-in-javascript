class Queue {
  constructor() {
    // membuat list, dikarenakan penggunaan method shift() kurang maksimal karena menghasilkan complexity O(n) - Linear. Maka kita bisa membuat list dengan object, key = 0 digunakan dalam hal ini.
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.head];
  }

  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    return this.tail - this.head;
  }

  print() {
    return this.items;
  }
}
const queue = new Queue();
console.log(queue.isEmpty()); // Output: true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.size()); // Output: 4
console.log(queue.peek()); // Output: 10

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.size()); // Output: 2
console.log(queue.print()); // Output: { "2": 30, "3": 40 }
