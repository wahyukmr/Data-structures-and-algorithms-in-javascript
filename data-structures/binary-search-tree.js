class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(rootNode, newNode) {
    if (newNode.value < rootNode.value) {
      rootNode.left === null
        ? (rootNode.left = newNode)
        : this.insertNode(rootNode.left, newNode);
    } else {
      rootNode.right === null
        ? (rootNode.right = newNode)
        : this.insertNode(rootNode.right, newNode);
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(rootNode, value) {
    if (rootNode === null) {
      return null;
    }
    if (value < rootNode.value) {
      return this.searchNode(rootNode.left, value);
    } else if (value > rootNode.value) {
      return this.searchNode(rootNode.right, value);
    } else {
      return rootNode;
    }
  }

  preorderTraversal(rootNode = this.root) {
    if (rootNode !== null) {
      console.log(rootNode.value);
      this.preorderTraversal(rootNode.left);
      this.preorderTraversal(rootNode.right);
    }
  }

  inorderTraversal(rootNode = this.root) {
    if (rootNode !== null) {
      this.inorderTraversal(rootNode.left);
      console.log(rootNode.value);
      this.inorderTraversal(rootNode.right);
    }
  }

  postorderTraversal(rootNode = this.root) {
    if (rootNode !== null) {
      this.postorderTraversal(rootNode.left);
      this.postorderTraversal(rootNode.right);
      console.log(rootNode.value);
    }
  }

  // implementation of BFS
  leverOrderTraversal() {
    if (this.isEmpty()) {
      return null;
    }

    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const currNode = queue.shift();
      result.push(currNode.value);

      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
    return result;
  }

  printLevel(level, rootNode = this.root) {
    if (!rootNode) {
      return;
    }
    if (level === 1) {
      console.log(rootNode.value);
    } else if (level > 1) {
      this.printLevel(level - 1, rootNode.left);
      this.printLevel(level - 1, rootNode.right);
    }
  }

  min(rootNode = this.root) {
    if (rootNode.left === null) {
      return rootNode.value;
    } else {
      return this.min(rootNode.left);
    }
  }

  max(rootNode = this.root) {
    if (rootNode.right === null) {
      return rootNode.value;
    } else {
      return this.max(rootNode.right);
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(rootNode, value) {
    if (rootNode === null) {
      return null;
    }

    if (value < rootNode.value) {
      rootNode.left = this.removeNode(rootNode.left, value);
    } else if (value > rootNode.value) {
      rootNode.right = this.removeNode(rootNode.right, value);
    } else {
      // * kasus node dengan satu atau tanpa anak
      if (rootNode.left === null) {
        // Jika simpul tidak memiliki anak kiri, kita gantikan dengan anak kanannya.
        return rootNode.right;
      } else if (rootNode.right === null) {
        // Jika simpul tidak memiliki anak kanan, kita gantikan dengan anak kirinya.
        return rootNode.left;
      }

      // * kasus node dengan dua anak
      // mencari nilai terkecil dari anak kanan untuk digunakan sebagai pengganti dari root yang dihapus
      rootNode.value = this.min(rootNode.right);
      // memperbarui anak kanan dengan memanggil rekursif lagi untuk menghapus nilai terkecil dari anak kanan tadi
      rootNode.right = this.removeNode(rootNode.right, rootNode.value);
    }
    return rootNode;
  }
}
