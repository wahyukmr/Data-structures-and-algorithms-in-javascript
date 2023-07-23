export default class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    this.adjacencyList[node] = new Set();
  }

  addEdge(fromNode, toNode) {
    this.adjacencyList[fromNode].add(toNode);
    this.adjacencyList[toNode].add(fromNode); // Jika graph tidak berarah, tambahkan edge fromNode ke toNode dan sebaliknya.
  }

  // Big-O Linear O(n)
  removeNode(node) {
    // menangani jika node yang ingin dihapus tidak ada dalam graph
    if (!this.adjacencyList[node]) {
      return;
    }
    // menghapus edge setiap node
    for (let adjacentNode of this.adjacencyList[node]) {
      this.removeEdge(node, adjacentNode);
    }
    // menghapus node yang ditentukan
    delete this.adjacencyList[node];
  }

  removeEdge(fromNode, toNode) {
    this.adjacencyList[fromNode].delete(toNode);
    this.adjacencyList[toNode].delete(fromNode); // Jika graph tidak berarah, hapus edge dariNode ke toNode dan sebaliknya.
  }

  // method pembantu untuk mencetak hasil dari adjacency list
  display() {
    for (const node in this.adjacencyList) {
      console.log(node + " -> " + [...this.adjacencyList[node]]);
    }
  }

  // method pembantu untuk mengecek apakah edge ada diantara dua node/vertex yang diberikan
  hasEdge(fromNode, toNode) {
    return (
      this.adjacencyList[fromNode].has(toNode) &&
      this.adjacencyList[toNode].has(fromNode)
    );
  }
}
