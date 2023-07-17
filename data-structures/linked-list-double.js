class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

export default class LinkedListDouble {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return "List is empty";
    }
    const value = this.head.element;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return "List is empty";
    }
    const value = this.tail.element;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  reverse() {
    if (this.isEmpty()) {
      return "List is empty";
    } else {
      let current = this.head;
      while (current) {
        const nextNode = current.next;
        current.next = current.prev;
        current.prev = nextNode;
        current = nextNode;
      }
      const head = this.head;
      this.head = this.tail;
      this.tail = head;
    }
  }

  print() {
    if (this.isEmpty()) {
      return "List is empty";
    } else {
      let curr = this.head;
      let list = [];
      while (curr) {
        list.push(curr.element);
        curr = curr.next;
      }
      return list;
    }
  }
}
