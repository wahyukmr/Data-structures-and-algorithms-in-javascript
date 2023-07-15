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

  push(item) {
    this.list.prepend(item);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.data;
  }

  print() {
    return this.list.print();
  }
}
