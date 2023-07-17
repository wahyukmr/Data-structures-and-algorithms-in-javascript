import LinkedList from "../data-structures/linked-list.js";

export default class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  enqueue(item) {
    this.list.append(item);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.element;
  }

  print() {
    return this.list.print();
  }
}
