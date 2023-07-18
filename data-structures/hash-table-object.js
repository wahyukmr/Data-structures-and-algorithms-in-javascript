export default class HashTableWithObject {
  constructor(size) {
    this.size = size;
    this.table = {};
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }

    const existingEntry = this.table[index].find((entry) => entry.key === key);
    if (existingEntry) {
      existingEntry.value = value;
    } else {
      this.table[index].push({ key, value });
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const entry = bucket.find((entry) => entry.key === key);
      return entry ? entry.value : undefined;
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const entryIndex = bucket.findIndex((entry) => entry.key === key);
      if (entryIndex !== -1) {
        bucket.splice(entryIndex, 1);
      }
    }
  }

  display() {
    console.log("Hash Table:");
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(`[${i}]:`, this.table[i]);
      } else {
        console.log(`[${i}]:`);
      }
    }
  }
}
