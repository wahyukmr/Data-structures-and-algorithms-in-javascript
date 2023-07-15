import * as mathAlgorithm from "../algorithm/math-algorithm.js";
import * as otherAlgorithms from "../algorithm/other-algorithms-and-problem-solving.js";
import * as searchAlgorithm from "../algorithm/search-algorithm.js";
import * as sortingAlgorithm from "../algorithm/sorting-algorithm.js";

import LinkedListStack from "../data-structures/linked-list-stack.js";
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
const list1 = new LinkedList();
console.log(list1.isEmpty());
console.log(list1.getSize());
console.log(list1.print()); // Output: []

list1.prepend(10);
list1.prepend(20);
list1.prepend(30);
console.log(list1.print()); // Output: [30, 20, 10]

list1.removeFromFront();
list1.removeFromFront();
list1.removeFromFront();
console.log(list1.print()); // Output: []

list1.append(40);
list1.append(60);
list1.append(50);
list1.append(70);
console.log(list1.print()); // Output: [40, 60, 50, 70]

list1.removeFromEnd();
console.log(list1.print()); // Output: [40, 60, 50]

list1.reverse();
console.log(list1.print()); // Output: [50, 60, 40]

list1.insert(1, 0);
list1.insert(2, 1);
list1.insert(3, 2);
console.log(list1.print()); // Output: [1, 2, 3, 50, 60, 40]
console.log(list1.getSize()); // Output: 6

console.log(list1.search(3)); // Output: 2

console.log(
  "------------------- LINKED LIST STACK DATA STRUCTURE -------------------"
);
const list2 = new LinkedListStack();
console.log(list2.isEmpty());
list2.push(20);
list2.push(10);
list2.push(30);
console.log(list2.getSize());
console.log(list2.print());
console.log(list2.pop());
console.log(list2.print());
console.log(list2.peek());
