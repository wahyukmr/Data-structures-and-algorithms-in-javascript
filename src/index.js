import * as mathAlgorithm from "../algorithm/math-algorithm.js";
import * as otherAlgorithms from "../algorithm/other-algorithms-and-problem-solving.js";
import * as searchAlgorithm from "../algorithm/search-algorithm.js";
import * as sortingAlgorithm from "../algorithm/sorting-algorithm.js";

import LinkedList from "../data-structures/linked-list.js";
import CircularQueue from "../data-structures/queue-circular.js";
import LinearQueue from "../data-structures/queue-linear.js";
import Stack from "../data-structures/stack.js";

mathAlgorithm;
searchAlgorithm;
sortingAlgorithm;
otherAlgorithms;

console.log("------------------- STACK DATA STRUCTURE -------------------");
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

console.log(
  "------------------- LINEAR QUEUE DATA STRUCTURE -------------------"
);
const linearQueue = new LinearQueue();
console.log(linearQueue.isEmpty()); // Output: true

linearQueue.enqueue(10);
linearQueue.enqueue(20);
linearQueue.enqueue(30);
linearQueue.enqueue(40);

console.log(linearQueue.size()); // Output: 4
console.log(linearQueue.peek()); // Output: 10

console.log(linearQueue.dequeue()); // Output: 10
console.log(linearQueue.dequeue()); // Output: 20
console.log(linearQueue.size()); // Output: 2
console.log(linearQueue.print()); // Output: { "2": 30, "3": 40 }

console.log(
  "------------------- CIRCULAR QUEUE DATA STRUCTURE -------------------"
);
const circularQueue = new CircularQueue(5);
console.log(circularQueue.isEmpty()); // Output: true

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
console.log(circularQueue.print()); // Output: [10, 20, 30, 40, 50]
console.log(circularQueue.peek()); // Output: 10

console.log(circularQueue.dequeue()); // Output: 10
console.log(circularQueue.dequeue()); // Output: 20
circularQueue.enqueue(400);
circularQueue.enqueue(500);
console.log(circularQueue.print()); // [30, 40, 50, 400, 500]
console.log(circularQueue.peek()); // 30

console.log(
  "------------------- LINKED LIST DATA STRUCTURE -------------------"
);
const linkedList = new LinkedList();
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
console.log(linkedList.print()); // Output: []

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
console.log(linkedList.print()); // Output: [30, 20, 10]

linkedList.removeFromFront();
linkedList.removeFromFront();
linkedList.removeFromFront();
console.log(linkedList.print()); // Output: []

linkedList.append(40);
linkedList.append(60);
linkedList.append(50);
linkedList.append(70);
console.log(linkedList.print()); // Output: [40, 60, 50, 70]

linkedList.removeFromEnd();
console.log(linkedList.print()); // Output: [40, 60, 50]

linkedList.reverse();
console.log(linkedList.print()); // Output: [50, 60, 40]

linkedList.insert(1, 0);
linkedList.insert(2, 1);
linkedList.insert(3, 2);
console.log(linkedList.print()); // Output: [1, 2, 3, 50, 60, 40]
console.log(linkedList.getSize()); // Output: 6

console.log(linkedList.search(3)); // Output: 2
