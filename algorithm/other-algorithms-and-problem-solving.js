/**
 * * 1. Cartesian Product
 * Pengertian: adalah istilah dalam matematika untuk menggambarkan hasil dari menggabungkan semua elemen dalam dua set. Sederhananya kita dapat membayangkan cartesian product sebagai "perkalian" antara dua set. Set direpresentasikan sebagai array di JavaScript.
 * Contoh: jika set A terdiri dari [1, 2] dan set B terdiri dari [a, b, c], maka cartesian product dari A dan B akan menghasilkan [[1, a], [1, b], [1, c], [2, a], [2, b], [2, c]]. Setiap elemen dalam cartesian product adalah pasangan yang terdiri dari satu elemen dari set A dan satu elemen dari set B.
 * TODO: diberikan dua himpunan tak kosong, dapatkan Cartesian Product mereka.
 */
function cartesianProduct(setArr1, setArr2, result = []) {
  for (let i = 0; i < setArr1.length; i++) {
    for (let j = 0; j < setArr2.length; j++) {
      result.push([setArr1[i], setArr2[j]]);
    }
  }
  return result;
}
const arr1 = [1, 2];
const arr2 = ["a", "b", "c"];
console.log(cartesianProduct(arr1, arr2)); // Output: [[1, a], [1, b], [1, c], [2, a], [2, b], [2, c]]
// Big-O dari fungsi cartesianProduct() adalah O(mn) karena ini merupakan 2 array dengan ukuran yang berbeda, dan 2 loops itu merupakan iterasi pada dua array berbeda, jadi akan melakukan iterasi sebanyak m*n kali. namun jika panjang kedua array sama maka akan menjadi O(n^2).

/**
 * * 2. Climbing Staircase
 * Pengertian: mengacu pada masalah yang melibatkan mencari jumlah cara yang mungkin untuk mendaki tangga dengan n langkah, di mana setiap kali kita hanya diizinkan melangkah satu atau dua langkah.
 * Misalnya: jika tangga memiliki 3 langkah, ada 3 cara yang mungkin untuk mencapai puncaknya =
    1. Melangkah satu langkah, kemudian satu langkah lagi, dan kemudian satu langkah terakhir.
    2. Melangkah satu langkah, kemudian dua langkah sekaligus.
    3. Melangkah dua langkah sekaligus, kemudian satu langkah lagi.
 * Contoh code:
    - n = 1, climbingStaircase(1) = 1 cara. Yaitu: (1)
    - n = 2, climbingStaircase(2) = 2 cara. Yaitu: (1,1) dan (2)
    - n = 3, climbingStaircase(3) = 3 cara. Yaitu: (1,1,1), (1,2) dan (2,1)
    - n = 4, climbingStaircase(4) = 5 cara. Yaitu: (1,1,1,1), (2,1,1), (1,2,1), (1,1,2) dan (2,2)
 * Climbing Staircase idea:
    - menaiki tangga dengan 1 langkah atau 2 langkah saja.
    - itu berarti jika ingin melangkah ke tangga `n`, kita hanya bisa menaiki dari langkah `n-1` atau `n-2`. Tidak ada cara lain.
    - untuk menghitung caranya kita bisa menaiki dari langkah `n-1` atau `n-2` dan ditambah 2.
    - jadi, climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)
 * TODO: diberikan sebuah tangga (Staircase) dengan "n" langkah, hitung jumlah cara yang berbeda untuk mendaki ke puncak. kita dapat mendaki 1 langkah atau 2 langkah setiap kali.
 */
function climbingStaircase(num) {
  const noOfWays = [1, 2];
  for (let i = 2; i < num; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[num - 1];
}
console.log(climbingStaircase(4)); // Output: 5
// Big-O dari fungsi climbingStaircase() adalah Linear O(n).

/**
 * * 3. Tower of Hanoi
 * Pengertian: teka-teki metematika dimana kita memiliki tiga batang dan sejumlah piringan dengan berbagai diameter. Tujuan teka-teki ini adalah memindahkan seluruh tumpukan ke batang terakhir dengan mengikuti aturan berikut:
    1. hanya satu piringan yang dapat dipindahkan pada satu waktu.
    2. setiap gerakan terdiri dari mengambil piringan atas dari salah satu tumpukan dan meletakkannya diatas tumpukan lain atau batang kosong.
    3. tidak ada piringan yang ditempatkan diatas piringan yang lebih kecil.
 */
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}
towerOfHanoi(3, "A", "C", "B");
// Big-O dari Tower of Hanoi adalah Eksponensial O(2^n).
