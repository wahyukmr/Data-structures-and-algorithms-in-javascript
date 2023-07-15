class Node {
  constructor(data) {
    this.data = data;
    this.pointer = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null; // head node harus selalu merujuk ke node pertama dalam list
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
    // console.log(this.head);
    // console.log(this.tail);
  }

  // O(1) - Constant
  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.pointer = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // O(1) - Constant
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.pointer = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // jika indexnya sama dengan 0 maka O(1) - Constant, namun selebihnya O(n) - Linear
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid position");
    }
    if (index === 0) {
      return this.prepend(value);
    } else {
      // membuat node baru
      const newNode = new Node(value);

      // melacak node sebelum index yang ditentukan
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.pointer;
      }

      newNode.pointer = prev.pointer; // menempatkan node sebelumnya ke pointer node baru
      prev.pointer = newNode; // mengganti posisi node sebelumnya dengan node baru

      this.size++;
    }
  }

  // removeIndex(index) {
  //   if (index < 0 || index > this.size) {
  //     return console.log("Invalid position");
  //   }
  //   let removedNode;
  //   if (index === 0) {
  //     removedNode = this.head;
  //     this.head = this.head.pointer;
  //   } else {
  //     let prev = this.head;
  //     for (let i = 0; i < index - 1; i++) {
  //       prev = prev.pointer;
  //     }
  //     removedNode = prev.pointer;
  //     prev.pointer = removedNode.pointer;
  //   }
  //   this.size--;
  //   return removedNode.data;
  // }

  // removeValue(value) {
  //   if (this.isEmpty()) {
  //     return console.log("Invalid position");
  //   }
  //   if (this.head.value === value) {
  //     this.head = this.head.pointer;
  //     this.size--;
  //     return value;
  //   } else {
  //     let prev = this.head;
  //     while (prev.pointer && prev.pointer.data !== value) {
  //       prev = prev.pointer;
  //     }
  //     if (prev.pointer) {
  //       const removedNode = prev.pointer;
  //       prev.pointer = removedNode.pointer;
  //       this.size--;
  //       return value;
  //     }
  //     return null;
  //   }
  // }

  // O(1) - Constant
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.data;
    this.head = this.head.pointer;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  // O(n) - linear
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.data;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.pointer !== this.tail) {
        prev = prev.pointer;
      }
      prev.pointer = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  // O(n) - linear
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.pointer;
      index++;
    }
    return -1;
  }

  reverse() {
    // prev: menyimpan referensi ke simpul sebelumnya
    let prev = null;
    let current = this.head;
    // melakukan perulangan sampai akhir list
    while (current) {
      // menyimpan referensi node selanjutnya dalam variabel next
      let next = current.pointer;
      // pointer pada node saat ini akan menunjuk ke node sebelumnya
      current.pointer = prev;
      // memindahkan prev dan current ke node selanjutnya untuk melanjutkan proses pembalikan
      prev = current;
      current = next;
    }
    // setelah berhasil melakukan pembalikan, kemudian membalik rujukan dari head dan tail
    this.tail = this.head;
    this.head = prev;
  }

  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.pointer;
    }
    return result;
  }
}
