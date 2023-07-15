export default class Stack {
  constructor() {
    // membuat list, di JS list direpresentasikan dengan array
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Tumpukan sudah kosong";
    }
    return this.items[this.items.length - 1];
  }

  pop() {
    if (this.isEmpty()) {
      return "Tumpukan sudah kosong";
    }
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items;
  }

  clear() {
    this.items = [];
  }
}
