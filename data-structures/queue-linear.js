export default class LinearQueue {
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
