/**
 * * 1. Fibonacci Sequence
 * Pengertian: dalam matematika, fibonacci sequence adalah urutan dari setiap angka yang merupakan jumlah dari dua angka pertama. Dua angka pertama nya 0 dan 1 kemudian angka selanjutnya adalah jumlah dari dua angka sebelumnya.
 * Example:
    - fibonacci(3) = [0,1,1];
    - fibonacci(7) = [0,1,1,2,3,5,8];
 */
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(2)); // Output: [0,1]
console.log(fibonacci(3)); // Output: [0,1,1];
console.log(fibonacci(7)); // Output: [0,1,1,2,3,5,8];
// Big-O dari fibonacci() adalah Linear O(n) Time complexity, karena jika nilai n bertambah, jumlah eksekusi baris ke 21 juga meningkat.

/**
 * * 2. Factorial of a Number
 * Pengertian: dalam matematika, faktorial dari bilangan bulat (integer) non-negatif `n`, dilambangkan n!, adalah produk dari semua bilangan bulat positif kurang dari atau sama dengan `n`.
 * Factorial dari 0 dan 1 adalah 1
 * TODO: diberikan sebuah integer atau bilangan bulat `n`, temukan factorial dari integer tersebut.
 * Example:
    - factorial(3) = 3*2*1 = 6;
    - factorial(7) = 7*6*5*4*3*2*1 = 5040;
 */
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    console.log(i);
    result *= i;
  }
  return result;
}
console.log(factorial(3)); // Output: 6
console.log(factorial(7)); // Output: 5040
// Big-O dari fungsi factorial() adalah Linear O(n) Time complexity, karena jika nilai n bertambah, jumlah eksekusi baris ke 42 juga meningkat.

/**
 * * 3. Prime Number
 * Pengertian: prime number adalah bilangan asli yang lebih besar dari 1 dan hanya memiliki dua faktor pembagi yang berbeda , yaitu 1 dan bilangan itu sendiri. Angka 2 merupakan satu-satunya bilangan genap yang merupakan prime number.
 * TODO: diberikan bilangan asli `n`, tentukan angka yang merupakan bilangan Prime atau tidak.
 * Example:
    - isPrimeNumber(5) = true karena (1*5 atau 5*1);
    - isPrimeNumber(4)) = false karena (1*4 atau 2*2 atau 4*1);
  */
function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(2)); // Output: true
console.log(isPrimeNumber(4)); // Output: false
console.log(isPrimeNumber(5)); // Output: true
// Big-O dari fungsi isPrimeNumber() adalah Linear O(n) Time complexity, karena jika nilai n bertambah, jumlah eksekusi baris ke 63 juga meningkat.

/**
 * * 4. Power of Two (pangkat 2)
 * Pengertian: bilangan bulat pangkat 2 jika ada bilangan bulat `x` sehingga `n` === 2 pangkat `x`.
 * TODO: diberikan bilangan bulat positif `n`, tentukan apakah bilangan itu pangkat dua atau tidak.
 * Example:
    - isPowerOfTwo(1) = true karena (2 pangkat 0);
    - isPowerOfTwo(2) = true karena (2 pangkat 1);
    - isPowerOfTwo(5) = false;
  */
// Cara pertama:
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  // loop terus berjalan selama n lebih besar dari satu
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
}
console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(2)); // Output: true
console.log(isPowerOfTwo(5)); // Output: false
// Big-O dari cara pertama adalah Logarithmic O(logn) Time complexity, karena jumlah eksekusi intruksi meningkat seiring `n` bertumbuh tetapi tidak dengan jumlah yang sama (memodisikasi nilai `n`).

// Cara kedua dengan bitwise operator (&): SOLUSI TERBAIK
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
// Big-O dari cara kedua adalah Constant O(1) Time complexity, karena terlepas dari seberapa besar `n` kita hanya perlu menjalankan baris kode sekali saja.

/**
 * * Recursion
 * Pengertian: recursion adalah teknik menyelesaikan masalah dimana solusinya bergantung pada solusi kasus yang lebih kecil dari masalah yang sama. Atau bisa dikatakan recursion adalah ketika fungsi memanggil dirinya sendiri.
 * Kenapa harus recursion: ini adalah teknik yang tepat untuk menyederhanakan solusi.
 * Tips memecahkan masalah dengan Recursion:
    - mencari cara untuk memecahkan masalah menjadi versi yang lebih kecil.
    - mengidentifikasi base case (menghentikan fungsi) recursion untuk keluar dari aliran kode yang tak terbatas.
  */

/**
 * * Recursive Fibonacci Sequence
 * Pengertian: pengertiannya sama seperti sebelumnya, hanya saja menggunakan teknik yang lebih disederhanakan.
 * TODO: diberikan sebuah number `n`, temukan elemen ke-`n` dari fibonacci sequences.
 * Example:
    - recursiveFibonacci(0) = 0 (index elemen posisi ke 0)
    - recursiveFibonacci(1) = 1 (index elemen posisi ke 1)
    - recursiveFibonacci(6) = 8 (index elemen posisi ke 6)
  * Rumus:
    F1 = 1
    F2 = 1
    F3 = F2 + F1 = 1 + 1 = 2
    F4 = F3 + F2 = 2 + 1 = 3
    F5 = F4 + F3 = 3 + 2 = 5
    F6 = F5 + F4 = 5 + 3 = 8
    
    keterangan = F sebagai fungsi
  */
// parameter `n` merujuk ke posisi elemen
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(0)); // Output: 0
console.log(recursiveFibonacci(1)); // Output: 1
console.log(recursiveFibonacci(6)); // Output: 8
console.log(recursiveFibonacci(7)); // Output: 13
// Big-O dari fungsi recursiveFibonacci() adalah quadratic O(2^n) Time complexity. Jika melihat pada Big-O Complexity Chart, performa dari Recursive O(2^n) sangat buruk dibandingkan dengan Linear O(n), jadi teknik Recursion bukanlah solusi yang baik untuk masalah fibonacci sequence.

/**
 * * Recursive Factorial of a Number
 * Pengertian: untuk pengertian dan contohnya sama seperti penjelasan Factorial of a Number sebelumnya.
 * TODO: diberikan sebuah integer atau bilangan bulat `n`, temukan factorial dari integer tersebut.
 * Rumus:
    5! = 5*4*3*2*1 sama seperti 5 * 4!
    4! = 4*3*2*1 sama seperti 4 * 3!
    3! = 3*2*1 sama seperti 3 * 2!
    2! = 2*1 sama seperti 2 * 1!
    1! = 1*1 sama seperti 1 * 0!
    0! = 1
    
    jadi bisa dikatakan `n! = n * (n-1)!`
  */
function RecursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * RecursiveFactorial(n - 1);
}
console.log(RecursiveFactorial(0)); // Output: 1
console.log(RecursiveFactorial(1)); // Output: 1
console.log(RecursiveFactorial(5)); // Output: 120
// Big-O dari fungsi RecursiveFactorial() adalah Linear O(n) Time complexity, karena jika nilai n bertambah, jumlah eksekusi ikut meningkat pada kecepatan yang sama.
