class Stack {
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
const stack = new Stack();
console.log(stack.isEmpty()); // Output: true

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.size()); // Output: 4
console.log(stack.peek()); // Output: 40

console.log(stack.pop()); // Output: 40
console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2
console.log(stack.print()); // Output: [10, 20]

stack.clear();
console.log(stack.isEmpty()); // Output: true
