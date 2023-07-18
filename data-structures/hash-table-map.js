export default class HashTableWithMap {
  constructor() {
    this.students = new Map(); // Hash table implemented using Map
  }

  hash(nim) {
    let total = 0;
    for (let i = 0; i < nim.length; i++) {
      total += nim.charCodeAt(i);
    }
    return total; // For simplicity, we'll use the NIM directly as the hash
  }

  set(nim, name, score) {
    const hashedKey = this.hash(nim);

    // Check if the student with the same NIM already exists
    const existingStudent = this.get(nim);
    if (existingStudent) {
      existingStudent.name = name; // Update the student's name
      existingStudent.score = score; // Update the student's score
    } else {
      this.students.set(hashedKey, { nim, name, score });
    }
  }

  get(nim) {
    const hashedKey = this.hash(nim);
    return this.students.get(hashedKey);
  }

  remove(nim) {
    const hashedKey = this.hash(nim);
    this.students.delete(hashedKey);
  }

  display() {
    console.log("Data Mahasiswa:");
    for (const student of this.students.values()) {
      console.log(
        `NIM: ${student.nim}, Nama: ${student.name}, Nilai: ${student.score}`
      );
    }
  }
}
