/**
 * * 1. Bubble Sort
 * ! Peringatan: kita tidak akan pernah menggunakan ini selain pada wawancara karena Bubble Sort adalah sorting algoritma yang buruk di dunia nyata. Tetapi ini dapat digunakan sebagai batu loncatan ke sorting algoritma lainnya.
 * TODO: diberikan sebuah array bilangan bulat, urutkan array tersebut.
 * Example:
    - [-6, 20, 8, -2, 4]
      [-6, 20, 8, -2, 4] -> [-6, 8, 20, -2, 4] Swap since 20 > 8
      [-6, 8, 20, -2, 4] -> [-6, 8, -2, 20, 4] Swap since 20 > -2
      [-6, 8, -2, 20, 4] -> [-6, 8, -2, 4, 20] Swap since 20 > 4
      Akhir dari array. elemen ditukar? ya? ulangi perbandingannya.
      [-6, 8, -2, 4, 20]
      [-6, 8, -2, 4, 20] -> [-6, -2, 8, 4, 20] Swap since 8 > -2
      [-6, -2, 8, 4, 20] -> [-6, -2, 4, 8, 20] Swap since 8 > 4
      [-6, -2, 4, 8, 20]
      Akhir dari array. elemen ditukar? ya? ulangi perbandingannya.
      [-6, -2, 4, 8, 20] [-6, -2, 4, 8, 20] [-6, -2, 4, 8, 20] [-6, -2, 4, 8, 20]
      Akhir dari array. elemen ditukar? tidak? array telah di urutkan.
 */
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arrays = [8, 20, -2, 4, -6];
const sortedArray = bubbleSort(arrays);
console.log(sortedArray); // Output: [-6, -2, 4, 8, 20]
// Big-O dari Bubble Sort adalah quadratic O(n^2) Time complexity. karena memiliki 2 nested loop dan jumlah elemen dalam array meningkatan. O(n^2) Time complexity tidak bagus untuk sorting.

/**
 * * 2. Insertion Sort
 * TODO: diberikan sebuah array bilangan bulat, urutkan array tersebut.
 */
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]; // 20
    let indexToBeCompared = i - 1; // index 0
    while (indexToBeCompared >= 0 && arr[indexToBeCompared] > numberToInsert) {
      arr[indexToBeCompared + 1] = arr[indexToBeCompared];
      indexToBeCompared -= 1;
    }
    arr[indexToBeCompared + 1] = numberToInsert;
  }
}
const array = [8, 20, -2, 4, -6];
InsertionSort(array); // Output: [-6, -2, 4, 8, 20]
console.log(array);
// Big-O dari Insertion Sort adalah quadratic O(n^2) Time complexity. karena memiliki 2 nested loop.

/**
 * * 3. Quick Sort
 * The steps are:
    - menentukan pivot, bisa mengambil array yang terakhir.
    - elemen array yang tersisa dibagi menjadi array kanan dan kiri. Left array berisi elemen yang kurang dari pivot dan right array berisi elemen yang lebih besar dari pivot.
    - repeat proses untuk masing-masing array kiridan kanan sampai memiliki array dengan panjang 1. Array dengan panjang 1 diurutkan berdasarkan definisi.
    - setelah mencapai kondisi itu, gabungkan array kiri, pivot, dan array kanan dalam urutan yang sama.
  * TODO: diberikan sebuah array bilangan bulat, urutkan array tersebut.
  */
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const array2 = [8, 20, -2, 4, -6];
console.log(quickSort(array2)); // Output: [-6, -2, 4, 8, 20]
// Big-O dari Quick Sort untuk kasus terburuknya adalah O(n^2) ini terjadi jika array sudah diurutkan. Quick sort adalah algoritma populer karena compleksitas kasus rata-ratanya adalah O(n log n). Hal ini karena secara recursion membagi array menjadi array yang lebih kecil yaitu O(logn) dan juga memiliki for loop yang O(n), maka gabungan dari keduanya membentuk O(n log n).

/**
 * * 4. Merge Sort
 * The steps are:
    - membagi array kedalam sub array, masing-masing berisi hanya satu elemen(sebuah array dengan satu elemen yang diurutkan).
    - berulang-kali menggabungkan sub array untuk menghasilkan sub array baru yang diurutkan sampai hanya tersisa satu sub array. Itu yang akan menjadi array yang diurutkan.
  * TODO: diberikan sebuah array bilangan bulat, urutkan array tersebut.
  */
function margeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(margeSort(leftArr), margeSort(rightArr));
}

function merge(leftArray, rightArray) {
  const sortedArr = [];
  while (leftArray.length && rightArray.length) {
    leftArray[0] <= rightArray[0]
      ? sortedArr.push(leftArray.shift())
      : sortedArr.push(rightArray.shift());
  }
  return [...sortedArr, ...leftArray, ...rightArray];
}
const array3 = [8, 20, -2, 4, -6];
console.log(margeSort(array3)); // Output: [-6, -2, 4, 8, 20]
// Big-O dari fungsi margeSort() ada dua bagian untuk ini, yang pertama secara recursive membagi masalah menjadi dua bagian O(log n) dan pada bagian kedua menggabungkan array dan berisi while loop (jika ada loop pada kasus ini maka time complexcity nya Linear O(n)). Jadi berdasarkan hasil kombinasi dari keduanya menghasilkan time complexcity berupa O(n log n)
