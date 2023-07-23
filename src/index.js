import * as mathAlgorithm from "../algorithm/math-algorithm.js";
import * as otherAlgorithms from "../algorithm/other-algorithms-and-problem-solving.js";
import * as searchAlgorithm from "../algorithm/search-algorithm.js";
import * as sortingAlgorithm from "../algorithm/sorting-algorithm.js";

import BinarySearchTree from "../data-structures/binary-search-tree.js";
import Graph from "../data-structures/graph.js";
import HashTableWithMap from "../data-structures/hash-table-map.js";
import HashTableWithObject from "../data-structures/hash-table-object.js";
import LinkedListDouble from "../data-structures/linked-list-double.js";
import LinkedListQueue from "../data-structures/linked-list-queue.js";
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
console.log(stack.print()); // Output: [10, 20, 30, 40]

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
console.log(linearQueue.print()); // Output: {0: 10, 1: 20, 2: 30, 3: 40}

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
console.log(list1.isEmpty()); // Output: true
console.log(list1.getSize()); // Output: 0
console.log(list1.print()); // Output: []

list1.prepend(10);
list1.prepend(20);
list1.prepend(30);
console.log(list1.print()); // Output: [30, 20, 10]
console.log(list1.getSize()); // Output: 3

list1.removeFromFront();
list1.removeFromFront();
list1.removeFromFront();
console.log(list1.print()); // Output: []

list1.append(40);
list1.append(60);
list1.append(50);
list1.append(70);
console.log(list1.print()); // Output: [40, 60, 50, 70]
console.log(list1.getSize()); // Output: 4

list1.removeFromEnd();
list1.removeFromEnd();
list1.removeFromEnd();
list1.removeFromEnd();
console.log(list1.print()); // Output: []

list1.insert("A", 0);
list1.insert("B", 1);
list1.insert("C", 2);
list1.insert("D", 3);
list1.prepend(40);
list1.prepend(60);
list1.prepend(50);
console.log(list1.print()); // Output: [50, 60, 40, 'A', 'B', 'C', 'D']

console.log(list1.removeValue(50)); // Output: 50
console.log(list1.removeValue("D")); // Output: "D"
console.log(list1.removeValue("A")); // Output: "A"
console.log(list1.print()); // Output: [60, 40, 'B', 'C']
console.log(list1.getSize()); // Output: 4

list1.reverse();
console.log(list1.print()); // Output: ['C', 'B', 40, 60]

console.log(list1.search(60)); // Output: 3
console.log(list1.search("C")); // Output: 0
console.log(list1.search("M")); // Output: -1

console.log(
  "------------------- LINKED LIST STACK DATA STRUCTURE -------------------"
);
const list2 = new LinkedListStack();
console.log(list2.isEmpty()); // Output: true
list2.push(20);
list2.push(10);
list2.push(30);
console.log(list2.print()); // Output: [30, 10, 20]
console.log(list2.getSize()); // Output: 3

console.log(list2.pop()); // Output: 30
console.log(list2.print()); // Output: [10, 20]
console.log(list2.peek()); // Output: 10

console.log(
  "------------------- LINKED LIST QUEUE DATA STRUCTURE -------------------"
);
const list3 = new LinkedListQueue();
list3.enqueue(20);
list3.enqueue(10);
list3.enqueue(30);
console.log(list3.print()); // Output: [20, 10, 30]
console.log(list3.getSize()); // Output: 3

console.log(list3.dequeue()); // Output: 20
console.log(list3.print()); // Output: [10, 30]
console.log(list3.peek()); // Output: 10

console.log(
  "------------------- LINKED LIST DOUBLE DATA STRUCTURE -------------------"
);
const list4 = new LinkedListDouble();
list4.append(1);
list4.append(2);
list4.append(3);
list4.prepend(0);
console.log(list4.print()); // Output: [0, 1, 2, 3]

list4.reverse();
console.log(list4.print()); // Output: [3, 2, 1, 0]

console.log(list4.removeFromFront()); // Output: 3

list4.prepend(10);
console.log(list4.print()); // Output: [10, 2, 1, 0]

console.log(list4.removeFromEnd()); // Output: 0
console.log(list4.print()); // Output: [10, 2, 1]

list4.reverse();
console.log(list4.print()); // Output: [1, 2, 10]

console.log(
  "------------------- HASH TABLE WITH OBJECT DATA STRUCTURE -------------------"
);
const studentsWithObject = new HashTableWithObject(10);
studentsWithObject.set("12345", "John Doe");
studentsWithObject.set("67890", "Jane Smith");
studentsWithObject.set("54321", "Bob Johnson");
studentsWithObject.set("12345", "John Smith"); // Tabrakan dengan kunci "12345"

console.log("Nama Mahasiswa NIM 12345:", studentsWithObject.get("12345"));

studentsWithObject.remove("67890");

studentsWithObject.display();

console.log(
  "------------------- HASH TABLE WITH MAP DATA STRUCTURE -------------------"
);
const studentsWithMap = new HashTableWithMap();
studentsWithMap.set("12345", "John Doe", 85);
studentsWithMap.set("67890", "Jane Smith", 92);
studentsWithMap.set("54321", "Bob Johnson", 78);
studentsWithMap.set("12345", "John Smith", 88); // Tabrakan dengan NIM 12345

console.log("Nilai Mahasiswa NIM 12345:", studentsWithMap.get("12345"));

studentsWithMap.remove("67890");

studentsWithMap.display();

console.log(
  "------------------- BINARY SEARCH TREE DATA STRUCTURE -------------------"
);
const bts = new BinarySearchTree();
console.log(bts.isEmpty()); // Output: true

bts.insert(10);
bts.insert(5);
bts.insert(15);
bts.insert(3);
bts.insert(7);

console.log("search:", bts.search(25)); // Output: null
console.log("search:", bts.search(5)); // Output: 5

// bts.preorderTraversal(); // Output: 10, 5, 3, 7, 15
// bts.inorderTraversal(); // Output: 3, 5, 7, 10, 15
bts.postorderTraversal(); // Output: 3, 7, 5, 15, 10

console.log(bts.leverOrderTraversal()); // Output: [10, 5, 15, 3, 7]

console.log("min:", bts.min()); // Output: 3
console.log("man:", bts.max()); // Output: 15

bts.remove(7);
console.log(bts.leverOrderTraversal()); // Output: [10, 5, 15, 3]
bts.printLevel(2); // Output: 5 /n 15

console.log(
  "------------------- GRAPH DATA STRUCTURE WITH ADJACENCY LIST -------------------"
);
const myGraph = new Graph();
myGraph.addNode("A");
myGraph.addNode("B");
myGraph.addNode("C");
// myGraph.addNode("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
// myGraph.addEdge("A", "C");
// myGraph.addEdge("B", "D");
// myGraph.addEdge("C", "D");

myGraph.display();
console.log(myGraph.hasEdge("A", "B"));
console.log(myGraph.hasEdge("A", "C"));

myGraph.removeEdge("A", "B");
myGraph.removeNode("A");
myGraph.display();
