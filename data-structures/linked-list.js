class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
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
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
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
      this.tail = newNode;
    }
    this.size++;
  }

  insert(value, position) {
    if (!Number.isInteger(position) || position < 0 || position > this.size) {
      console.log("Invalid position");
      return;
    }
    if (position === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = prev.next;
        index++;
      }
      prev.next = newNode;
      newNode.next = current;
      if (position === this.size) {
        this.tail = newNode;
      }
      this.size++;
    }
  }

  removeFrom(position) {
    if (!Number.isInteger(position) || position < 0 || position >= this.size) {
      return "Invalid position";
    }

    if (position === 0) {
      this.removeFromFront();
    } else if (position === this.size - 1) {
      this.removeFromEnd();
    } else {
      let removedNode;
      let prev = this.head;

      // hasil dari perulangan akan mendapatkan node sebelum node yang akan dihapus dan menyimpannya dalam variabel `prev`
      for (let i = 0; i < position - 1; i++) {
        prev = prev.next;
      }

      removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
      return removedNode.element;
    }
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return console.log("List is empty");
    }

    if (this.head.element === value) {
      return this.removeFromFront();
    } else if (this.tail.element === value) {
      return this.removeFromEnd();
    } else {
      let prev = this.head;
      // memeriksa apakah ada elemen selanjutnya dan nilai elemen selanjutnya tidak sama dengan `value`
      while (prev.next && prev.next.element !== value) {
        // jika tidak ditemukan elemen dengan nilai yang sama dengan `value`, maka prev.next akan bernilai null
        prev = prev.next;
      }
      // jika prev.next bukan null, berarti elemen dengan nilai `value` ditemukan dalam linked list
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return console.log("List is empty");
    }

    const value = this.head.element;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return console.log("List is empty");
    }
    const value = this.tail.element;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.element === value) {
        return index;
      }
      current = current.next;
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
      const next = current.next;
      // pointer pada node saat ini akan menunjuk ke node sebelumnya
      current.next = prev;
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
      result.push(current.element);
      current = current.next;
    }
    return result;
  }
}
