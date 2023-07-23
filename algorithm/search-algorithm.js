/**
 * * 1. Linear Search
 * Pengertian: pencarian nilai tertentu dalam array dengan menelusuri satu per satu elemen dari awal hingga ditemukan atau mencapai akhir array.
 * Kelebihan: tidak perlu mengurutkan elemen.
 * Kelemahan: tidak efisien untuk menangani input size dalam jumlah yang banyak.
 * Example:
    - arr = [-5,2,10,4,6] dan t = 10 maka outputnya adalah 2
    - arr = [-5,2,10,4,6] dan t = 6 maka outputnya adalah 4
    - arr = [-5,2,10,4,6] dan t = 20 maka outputnya adalah -1
* TODO: diberikan elemen array `n` dan elemen `t`, tentukan index dari `t` pada array. Return -1 jika target elemennya tidak diemukan.
 */
function linearSearch(n, t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // Output: 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // Output: 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // Output: -1

/**
 * * 2. Binary Search
* Pengertian: pencarian nilai tertentu dalam array terurut dengan membagi interval pencarian menjadi dua bagian dan mengeliminasi setengah interval yang tidak mungkin mengandung nilai yang dicari.
 * Steps:
    - menentukan pointer (tengah elemen)
    - jika target lebih besar dari pointer maka ambil semua elemen setelah pointer, namun jika target lebih kecil dari pointer maka ambile semua elemen sebelum pointer.
    - ulangi proses ini sampai menemukan target.
  * Kelemahan: Binary search hanya berfungsi pada array yang telah diurutkan, jika tidak memiliki array yang diurutkan bisa menggunakan Linear search sebagai alternatif atau melakukan pekerjaan tambahan dengan mengurutkan array terlebih dahulu kemudian menerapkan Binary search.
  * Example:
    - arr = [-5,2,4,6,10] dan t = 10 maka outputnya adalah 4
    - arr = [-5,2,4,6,10] dan t = 6 maka outputnya adalah 3
    - arr = [-5,2,4,6,10] dan t = 20 maka outputnya adalah -1
  * TODO: diberikan array yang diurutkan dari elemen `arr` dan elemen target `t`, tentukan index dari `t` pada array. Return -1 jika target elemennya tidak diemukan.
  */
function binarySearch(arr, t) {
  let leftIndex = 0; // merujuk ke elemen pertama dalam array
  let rightIndex = arr.length - 1; // merujuk ke elemen terakhir dalam array

  // perulangan akan terus berjalan selama memenuhi kondisi
  while (leftIndex <= rightIndex) {
    // akan mengembalikan bilangan desimal dan dibulatkan ke yang lebih rendah
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) {
      return middleIndex;
    }
    t < arr[middleIndex]
      ? (rightIndex = middleIndex - 1)
      : (leftIndex = middleIndex + 1);
  }
  return -1;
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // Output: 4
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // Output: -1
console.log(binarySearch([-5, 2, 4, 6, 10], -1)); // Output: -1

/**
 * * Recursive Binary Search
 * Rekursi adalah sebuah konsep dalam pemrograman di mana sebuah fungsi dapat memanggil dirinya sendiri secara berulang hingga mencapai kondisi berhenti (base case) tertentu. Dengan kata lain dengan teknik ini akan menyederhanakan code.
 * TODO: diberikan array yang diurutkan dari elemen `arr` dan elemen target `t`, tentukan index dari `t` pada array. Return -1 jika target elemennya tidak diemukan.
 */
function recursiveBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (t === arr[middleIndex]) {
    return middleIndex;
  }
  if (t > arr[middleIndex]) {
    return search(arr, t, middleIndex + 1, rightIndex);
  } else {
    return search(arr, t, leftIndex, middleIndex - 1);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // Output: 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // Output: -1
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], -1)); // Output: -1
// Big-O dari fungsi recursiveBinarySearch() adalah Logarithmic O(logn) Time complexity. karena meskipun fungsi tidak memiliki loop, akan tetapi fungsi dipanggil berulang kali dan ukuran input size berkurang setengah setiap kali fungsi dipanggil ulang.
