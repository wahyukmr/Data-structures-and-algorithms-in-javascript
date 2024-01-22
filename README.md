- [1. ~ ALGORITMA](#1--algoritma)
  - [1.1. Mendefinisikan algoritma:](#11-mendefinisikan-algoritma)
  - [1.2. Mengapa algoritma:](#12-mengapa-algoritma)
  - [1.3. Menganalisis algoritma:](#13-menganalisis-algoritma)
  - [1.4. Mengimplementasikan Time dan Space Complexity:](#14-mengimplementasikan-time-dan-space-complexity)
  - [1.5. Teknik desain algoritma:](#15-teknik-desain-algoritma)
- [2. ~ DATA STRUCTURES :](#2--data-structures-)
  - [2.1. Basic Data Structure:](#21-basic-data-structure)
  - [2.2. Built-in Data Structure di JavaScript:](#22-built-in-data-structure-di-javascript)
  - [2.2. Custom Data Structure di JavaScript:](#22-custom-data-structure-di-javascript)
- [3. ~ SUMMARY](#3--summary)
  - [Algoritma::](#algoritma)
  - [Struktur data:](#struktur-data)

Data struktur dan algoritma berjalan seiring seperti Yin dan Yang, **_gelas_** dan **_air_**. Tanpa gelas, air tidak bisa ditampung. Tanpa struktur data, kita tidak memiliki object untuk menerapkan logika. Tanpa air, gelas itu hanya ruang hampa yang kosong. Tanpa algoritma, object tidak dapat diubah atau dikonsumsi.

## 1. ~ ALGORITMA

**Algoritma** adalah sekumpulan langkah-langkah atau instruksi yang dapat diimplementasikan dalam bahasa pemrograman yang berbeda untuk memecahkan masalah tertentu.

**Algorithmic Thinking Concept** adalah memecahkan masalah menjadi beberapa bagian kemudian mengidentifikasi algoritma atau data structure mana yang terbaik untuk tugas tersebut.

Mempelajari algoritma akan memberikan pemahaman yang lebih dalam tentang **Complexity** dan **Efficiency**.

### 1.1. Mendefinisikan algoritma:

1. Mengurai persoalan dengan jelas, input dan outpur.
2. Langkah-langkah dalam keperluan algoritma harus diurutkan secara spesifik.
3. langkah-langkahnya juga harus berbeda.
4. Algoritma harus menghasilkan sebauh hasil.
5. Algoritma harus selesai dalam jumlah waktu yang terbatas.

### 1.2. Mengapa algoritma:

Sebagai developer, kita akan menemukan masalah yang perlu kita selesaikan. Saat mempelajari algoritma, pada dasarnya akan mempelajari berbagai teknik untuk menyelesaikan masalah tersebut secara efisien. Satu masalah bisa diselesaikan dengan banyak cara menggunakan algoritma yang berbeda. Setiap algoritma memiliki keuntungan dan kerugian masing-masing dalam hal kinerja.

### 1.3. Menganalisis algoritma:

Tidak ada satu pun cara untuk mengukur apakah suatu algoritma merupakan solusi yang tepat karena tidak dapat diprediksi dan bergantung pada sejumlah faktor, diantaranya:

- Bahasa pemrograman yang digunakan untuk mengimplementasikan algoritma.
- Komputer tempat program dijalankan.
- Program lain yang berjalan bersamaan.
- Kualitas sistem operasi.

Jadi, dengan mempertimbangkan poin-poin diatas, kita dapat mengevaluasi kinerja suatu algoritma bergantung kepada **_input size_** atau ukuran inputnya.

Efisiensi suatu algoritma penting karena membantu memecahkan masalah lebih cepat dan memberikan hasil akhir yang baik. Ada dua konsep untuk mengevaluasi kinerja suatu algoritma yang perlu dipertimbangkan dalam mengukur efisiensi algoritma :

1. **Time Complexity**

   Merupakan langkah atau upaya untuk mengevaluasi seberapa efisien sebuah algoritma dalam menangani ukuran input yang diberikan. Time complexity menggambarkan berapa banyak waktu atau kinerja waktu yang dibutuhkan untuk menyelesaikan tugasnya.

2. **Space Complexity**

   Adalah jenis kompleksitas yang mengukur penggunaan memori atau ruang yang diperlukan oleh algoritma. Ini menggambarkan seberapa efisien algoritma dalam menggunakan memori saat menjalankan operasinya.

Untuk mencapai algoritma yang efisien perlu mempertimbangkan kedua konsep di atas. Secara teoritis, mungkin ada kasus di mana algoritma memiliki kompleksitas waktu yang cepat dan kompleksitas ruang yang sedikit memakan memori. Namun, dalam praktikanya, ada trade-off antara kompleksitas waktu dan kompleksitas ruang, dan seringkali terdapat keterkaitan antara keduanya.

Misalnya, algoritma dengan kompleksitas waktu yang sangat cepat mungkin memerlukan penggunaan memori yang lebih besar untuk menyimpan data yang diperlukan selama eksekusi. Sebaliknya, algoritma dengan kompleksitas ruang yang sangat efisien mungkin membutuhkan lebih banyak waktu untuk menyelesaikan tugasnya, karena mungkin perlu melakukan lebih banyak operasi untuk mengompresi atau mengoptimalkan penggunaan memori.

Sebagai seorang pengembang atau perancang algoritma, tujuannya adalah untuk mencoba mengoptimalkan kedua aspek tersebut sebaik mungkin, agar algoritma yang dikembangkan berkinerja baik secara keseluruhan.

### 1.4. Mengimplementasikan Time dan Space Complexity:

**Big-O notation** adalah metode atau metrik yang digunakan untuk menentukan efisiensi algoritma. Dengan demikian, ini memberikan perkiraan berapa lama waktu yang dibutuhkan kode untuk berjalan pada set input yang berbeda atau mempertimbangkan jumlah waktu yang dibutuhkan algoritma. Sehingga dapat menumbuhkan kesadaran kita untuk mencari alternatif yang lebih baik sebelum data semakin besar dan berdampak kepada performa aplikasi yang kita buat.

Metode Big-O notation diperlukan karena ada banyak faktor yang mempengaruhi berapa lama jalannya sebuah kode. Salah satunya adalah tidak semua prosesor akan berjalan pada kecepatan yang sama, jadi alih-alih menghitung waktu aplikasi, lebih baik menghitung jumlah instruksi yang dijalankan aplikasi.

**Beberapa contoh Big-O Time complexity:**

1. **O(1) - Constant Time Complexity**

   **_Pengertian:_** algoritma membutuhkan waktu yang tetap untuk menyelesaikan tugas, tidak peduli seberapa besar atau banyaknya input yang diberikan. Sehingga algoritma dengan kompleksitas waktu Constant adalah yang terbaik.

   **_Case:_** cocok untuk kasus-kasus di mana ukuran input tidak berpengaruh pada waktu eksekusi algoritma.

   **_Contoh:_** mengakses elemen dalam array menggunakan indeks, pengoperasian matematika sederhana, atau operasi yang melibatkan jumlah data tetap.

2. **O(log n) - Logarithmic Time Complexity**

   **_Pengertian:_** pencarian ini lebih efisien daripada yang membutuhkan waktu sebanding dengan jumlah input (O(n)), tetapi memerlukan lebih banyak langkah daripada pencarian konstan (O(1)). Pencarian logaritmik atau O(log n), meningkat secara bertahap ketika input bertambah, tetapi peningkatan ini hanya bersifat marginal (peningkatan yang tidak terlalu besar meskipun ukuran inputnya bertambah). Contoh bagus dari metode ini adalah pencarian biner. Sehingga algoritma dengan kompleksitas waktu Logaritmik masih sangat bagus atau efisien, terutama untuk data yang besar.

   **_Analogi:_** bayangkan ketika bermain permainan tebak-tebakan dengan petunjuk "terlalu tinggi", "terlalu rendah", atau "benar". Rentang angkanya adalah dari 1 hingga 100. Masalah ini bisa dipecahkan secara sistematis. Misalnya, menebak angka 50 - ternyata terlalu tinggi. Lalu, menebak angka 25 - masih terlalu tinggi. Kemudian, bisa memilih angka 12 atau 13. Dengan cara ini, akan terus membagi dua rentang pencarian setiap kali menebak.

   Dengan menggunakan pendekatan pencarian biner seperti ini, meskipun rentang input adalah 100, kita bisa menemukan jawaban dalam waktu kurang dari 5 atau 6 tebakan. Metode ini memiliki kompleksitas waktu O(log n). Bahkan jika rentang input (n) sepuluh kali lipat lebih besar, waktu yang diperlukan untuk menebaknya tidak akan sepuluh kali lebih lama.

   **_Case:_** umumnya digunakan dalam kasus-kasus di mana data diurutkan atau dibagi setengahnya secara berulang.

   **_Contoh:_** biner search dalam daftar terurut atau pembagian dan conquering dalam algoritma seperti **_merge sort_** atau **_binary search tree_**.

3. **O(n) - Linear Time Complexity**

   **_Pengertian:_** algoritma membutuhkan waktu yang sebanding dengan ukuran inputnya. Algoritma dengan kompleksitas waktu linear masih dapat diterima dan efisien untuk jumlah data yang relatif kecil.

   **_Case:_** jika harus membaca setiap item dalam list atau jika melihat loop dalam algoritma dengan data yang relatif kecil.

   **_Contoh:_** iterasi melalui array untuk mencari elemen tertentu atau melakukan operasi sederhana pada setiap elemen.

4. **O(n log n) - Loglinear Time Complexity**

   **_Pengertian:_** waktu eksekusi algoritma bertumbuh sebanding dengan ukuran inputnya, tetapi juga dipengaruhi oleh algoritma dari ukuran input tersebut. Algoritma dengan kompleksitas waktu Loglinear umumnya efisien untuk jumlah data yang besar.

   **_Case:_** sangat efisien digunakan dalam kasus-kasus pengurutan atau pencarian data dalam skala besar dan kompleks.

   **_Contoh:_** algoritma pengurutan seperti Merge Sort dan Quick Sort.

5. **O(n^2) - Quadratic Time Complexity**

   **_Pengertian:_** ini adalah kompleksitas kuadratik, yang berarti bahwa pekerjaan digandakan (n²) dari ukuran input yang diberikan. Misalkan, berapa banyak perhitungan yang diperlukan jika n = 6? Jawabannya adalah 6 x 6 jadi 36. Algoritma dengan kompleksitas waktu Quadratic biasanya tidak efisien, apalagi untuk jumlah data yang besar.

   **_Case:_** meskipun mereka dapat digunakan untuk data kecil, perlu dihindari dalam kasus-kasus dengan jumlah data yang besar karena waktu eksekusi yang lambat.

   **_Contoh:_** bubble sort, selection sort atau algoritma yang melibatkan nested loop.

6. **O(n^3) - Cubic Time Complexity**

   **_Pengertian:_** algoritma membutuhkan waktu yang sebanding dengan cubik / pangkat 3 dari ukuran input. Mereka sering terjadi dalam algoritma yang melibatkan nested loop. Algoritma dengan kompleksitas waktu Cubic seringkali tidak efisien untuk jumlah data yang besar.

   **_Case:_** waktu eksekusinya tumbuh secara kuadratik dengan ukuran masukan.

   **_Contoh:_** algoritma yang melibatkan 3 nested loop.

7. **O(2^n) - Eksponensial Time Complexity**

   **_Pengertian:_** algoritma dengan waktu eksekusinya tumbuh secara eksponensial dengan ukuran input. Algoritma dengan kompleksitas waktu Eksponensial sangat tidak efisien, terutama untuk jumlah data yang besar.

   **_Case:_** algoritma ini perlu dihindari dalam kasus-kasus dengan jumlah data yang signifikan.

   **_Contoh:_** algoritma brute force atau rekursi tak terbatas.

**Beberapa contoh Big-O Space complexity:**

1. **O(1) - Constant Space Complexity**

   **_Pengertian:_** algoritma akan menggunakan jumlah memori yang tetap, tidak bergantung pada ukuran input. Ini berarti algoritma ini mengalokasikan jumlah memori yang konstan untuk menjalankan tugasnya.

   **_Contoh:_** operasi aritmetika sederhana, pengambilan elemen dari array dengan indeks yang diketahui atau sorting algoritma dalam array.

2. **O(n) - Linear Space Complexity**

   **_Pengertian:_** algoritma akan menggunakan jumlah memori yang sebanding dengan ukuran input, atau ikut bertambah seiring bertambahnya ukuran input.

   **_penggunaan:_** algoritma yang memerlukan penyimpanan data linier seperti traversal atau pemrosesan elemen dalam suatu struktur data seperti array atau linked list.

3. **O(n^2) - Quadratic Space Complexity**

   **_Pengertian:_** algoritma akan menggunakan jumlah memori yang sebanding dengan kuadrat dari ukuran input. Algoritma ini seringkali terlihat pada nested loop atau saat menggunakan matriks dua dimensi.

   **_Contoh:_** algoritma bubble sort yang membandingkan setiap elemen dengan setiap elemen lainnya.

   **_penggunaan:_** biasanya digunakan dalam algoritma pemrosesan matriks, permutasi, atau kombinasi.

4. **O(log n) - Logarithmic Space Complexity**

   **_Pengertian:_** algoritma akan menggunakan jumlah memori yang bertumbuh tetapi tidak pada jumlah yang sama dengan ukuran input. Algoritma ini seringkali terlihat pada algoritma divide and conquer seperti Binary Search atau Binary Tree.

   **_penggunaan:_** saat memproses masukan yang terurut atau terstruktur secara terbagi-bagi.

5. **O(n log n) - Loglinear Space Complexity**

   **_Pengertian:_** algoritma akan menggunakan jumlah memori tambahan yang bertumbuh secara linier terhadap ukuran masukan (n), namun juga dipengaruhi oleh logaritma dari ukuran masukan tersebut (log n).

   **_Contoh:_** Merge Sort dan Quick Sort.

### 1.5. Teknik desain algoritma:

Algorithm design techniques (teknik desain algoritma) adalah pendekatan umum untuk menerapkan algoritma.

Beberapa teknik design algoritma yang populer digunakan:

1. **Bruce force**

   Merupakan teknik sederhana dan lengkap yang mengevaluasi setiap kemungkinan hasil untuk menemukan solusi terbaik.

   Contohnya: **_Linear Search algorithm_**.

2. **Greedy**

   Pendekatan yang memilih opsi terbaik saat ini tanpa pertimbangan untuk masa yang akan datang.

   Contohnya: **_Dijkstra's algorithm_**, **_Prim's algorithm_** dan **_Kruskal's algorithm_** (yang semuanya diterapkan pada struktur data graf).

3. **Divide and Conquer**

   Teknik yang membagi masalah menjadi sub-masalah yang lebih kecil. Setiap sub-masalah kemudian diselesaikan dan solusi parsial digabungkan kembali untuk menentukan solusi keseluruhan.

   Contohnya: **_Binary Search algorithm_**, **_Quick Sort algorithm_**, **_Merge Sort algorithm_** dan **_Tower of Hanoi_**.

4. **Dynamic Programming**

   Mirip seperti Divide and Conquer, teknik yang membagi masalah menjadi sub-masalah yang lebih kecil. Namun perbedaannya membagi masalah menjadi submasalah yang lebih kecil tetapi saling tumpang tindih, menyimpan hasilnya dan menggunakannya kembali untuk sub-masalah yang sama. Ini disebut memoization dan merupakan teknik pengoptimalan yang meningkatkan time complexity dari algoritma kita.

   Contohnya: **_Fibonacci numbers_** dan **_Climbing Staircase_**.

5. **Backtracking**

   Mirip seperti "brute force", yakni membuat semua solusi yang memungkinkan tetapi akan diperiksa apakah solusi memenuhi semua kendala yang diberikan dan hanya setelah itu kita melanjutkan dengan menghasilkan solusi-solusi berikutnya. Jika kendala tidak terpenuhi, maka mundur dan pergi ke jalur yang berbeda untuk menemukan solusi.

   Contohnya: **_N-Queens problem_**.

## 2. ~ DATA STRUCTURES :

Struktur data adalah cara kita menyimpan, mengorganisir, dan mengelola data dalam program agar ketika dibutuhkan dapat diakses dengan cara yang tepat dan efisien. Struktur data menentukan **_space complexity_** (kompleksitas ruang) dari program, yaitu berapa banyak ruang memori yang dibutuhkan untuk menyimpan dan memproses data.

Mempelajari data struktur juga membantu mendapatkan pemahaman yang lebih mendalam tentang hal-hal yang sudah diketahui sebelumnya. Seperti:

- DOM: menggunakan struktur data Tree.
- Tombol maju dan mundur browser: menggunkan struktur data Stack.
- OS: menggunakan struktur data Queue.

Klasifikasi Struktur data yang dikategorikan menjadi dua cabang utama, Linear dan non-linear. Ini berkaitan dengan bagaimana elemen disimpan dalam struktur data.

**Linear data struktur:**

- Elemen-elemen dalam struktur ini disusun satu demi satu. Penyimpanan dan akses elemen dalam struktur data linear mengikuti urutan sekuensial (pencarian dilakukan dengan mengikuti urutan dari awal sampai akhir).
- Linear data struktur dibagi lagi menjadi dua bagian, Static data struktur dan Dynamic data struktur. Array merupakan contoh dari static data struktur sedangkan queue, stack, dan list adalah contoh dari dynamic data struktur.

**Non-Linear data struktur:**

- Struktur ini tidak memungkinkan penelusuran data secara sekuensial, Namun membuat pencarian data tertentu sangat cepat.
- Struktur data tree dan graph adalah bagian dari Non-linear data struktur.

### 2.1. Basic Data Structure:

1. **String**

   String adalah fitur fundamental dalam bahasa pemrograman. String didefinisikan sebagai urutan karakter atau simbol diapit oleh tanda petik tunggal atau ganda. Mayoritas bahasa mendukung karakter ASCII primer dan representasi Unicode. Sebuah karakter menempati satu byte memori, tetapi ada berbagai cara merepresentasikan string.

   Terdapat perbedaan signifikan dalam cara setiap bahasa merepresentasikan dan mendukung string. Operasi dasar termasuk membuat, memodifikasi, menyalin, dan menetapkan string ke variabel. Operasi sehari-hari melibatkan penggabungan, penambahan string, pencarian substring, dan manipulasi koleksi string. Beberapa bahasa memungkinkan tindakan aljabar pada string, seperti perbandingan alfabetis dan operasi boolean.

   Simbol escape `()` digunakan untuk memasukkan karakter khusus dalam string. Contoh: `String = "the man said \"two more pints please\" to the barman"`. Escape karakter dapat digunakan untuk menyertakan simbol seperti `#, %` atau tanda kutip ganda dalam string.

   Penggunaan:

   - Pemrosesan Bahasa Alami (Natural Language Processing / NLP) seringkali berurusan dengan string.
   - Kodek string (format yang digunakan untuk merepresentasikan string atau teks) perlu diperhatikan saat membaca dari berbagai sumber seperti Twitter atau X, file PDF, atau Reddit.
   - Ketika menulis string ke dalam program, biasanya menerapkan Tokenisasi (proses mengubah string menjadi array string yang lebih kecil, sehingga akan memudahkan pemrosesan).

   Mutabilitas string merujuk pada kemampuan untuk mengubah string setelah dibuat. Beberapa bahasa memperbolehkan perubahan (mutabilitas string) seperti Ruby dan PHP, sementara yang lain menggunakan immutabilitas seperti Java, C#, JavaScript, Python, Go. Immutabilitas dapat menghemat memori dengan mengarahkan variabel ke lokasi yang sama saat terjadi perubahan.

2. **Bilangan Bulat**

   Bilangan bulat digunakan untuk menyimpan nilai numerik, bisa menampung angka positif dan negatif, atau hanya menampung angka positif. Representasi bilangan bulat memerlukan 4 byte dalam memori.

   Ada beberapa cara untuk merepresentasikan bilangan bulat dalam biner, salah satunya adalah "Sign-magnitude" (Besaran tanda). Untuk membedakan antara nilai positif dan negatif dalam biner, Sign-magnitude menggunakan indikator di ujung kiri bilangan biner untuk menunjukkan polaritas.

   | Bilangan Bulat | Representasi Sign-magnitude(4-bit) |
   | :------------- | ---------------------------------: |
   | +2             |                               0010 |
   | +1             |                               0001 |
   | +0             |                               0000 |
   | -0             |                               1000 |
   | -1             |                               1001 |
   | -2             |                               1010 |

   Bilangan bulat tidak dapat mewakili pecahan; untuk itu, gunakan desimal atau float. IEEE 754 adalah standar umum untuk merepresentasikan angka dengan pendekatan tetap. Beberapa bahasa tingkat tinggi seperti Python dan JavaScript menggunakan pendekatan ini dan merangkum inisialisasi bilangan bulat ke representasi tetap ini. Hal ini membuat bekerja dengan angka menjadi mudah dalam bahasa dinamis tingkat tinggi ini, tetapi menghilangkan kemampuan untuk menyesuaikan pendekatan pengoptimalan memori.

   Bahasa yang diketik secara statis seperti C++, Rust, dan C memungkinkan penyesuaian ukuran memori. Contoh: C++ menggunakan `unsigned short int` hanya memerlukan 2 byte, Rust memungkinkan instantiasi bilangan bulat 1-byte yang hanya menampung angka positif, cocok untuk penghematan memori.

   Selain bilangan bulat primitif yang dilambangkan dengan `int`, Java memungkinkan Anda untuk membungkus nilai bilangan bulat ke dalam kelas pembungkus `Integer`. Hal ini memungkinkan beberapa metode untuk menangani bilangan bulat, seperti mengubah dari string ke double, perbandingan, ukuran maksimum dan minimum, dan sebagainya. Kelas integer tidak dapat diubah, yang membuatnya aman untuk di-root. Fungsionalitas dan keamanan ekstra ini membutuhkan biaya memori, dan `Integer` objek akan membutuhkan 16 byte memori untuk menyimpannya.

3. **Boolean**

   Boolean digunakan untuk merepresentasikan nilai "true (benar)" atau "false (salah)", sering ditemui dalam pernyataan pilihan ganda atau pernyataan true/false.

   - _Conditional statements (pernyataan kondisional)_

     Ekspresi Boolean melibatkan operator relasional untuk perbandingan, meliputi: Lebih besar dari (>), Kurang dari (<), Lebih besar dari atau sama dengan (>=), Kurang dari atau sama dengan (<=), Sama dengan (==), Tidak sama dengan (!=)

     Pernyataan kondisional meliputi `if`, `else`, `else if`, `while`, dll. Memungkinkan eksekusi opsi kode yang berbeda berdasarkan kondisi Boolean.

     Contoh dalam JavaScript:

     ```javascript
     if (right > left) {
       doTheRightThing();
     } else if (right < left) {
       doTheLeftThing();
     } else {
       keepResearching();
     }
     ```

   - _Logical Operators (operator logika)_

     Operator logika `||`, `&&`, `!` memperluas cakupan aplikasi: Logika OR (||), Logika AND (&&), Logika NOT (!)

     Operator logika dapat digabungkan dengan ekspresi Boolean untuk hasil kode yang lebih beragam.

     Contoh dengan Operator Logika:

     ```javascript
     if (condition_1 || condition_2) {
       doActionOne();
     } else if (condition_1 && condition_2) {
       doActionTwo();
     } else if (!condition_1) {
       doActionFour();
     } else {
       waitForInstruction();
     }
     ```

   Ekspresi Boolean bersifat biner (benar atau salah, setara dengan 0 atau 1 dalam biner). Meskipun hanya memiliki dua nilai, Booleans mencapai kompleksitas saat digabungkan dengan Conditional statements (pernyataan kondisional) dan Logical operators (operator logika).

### 2.2. Built-in Data Structure di JavaScript:

1.  **Array**

    - **_Karakteristik_**:

      Array adalah struktur data linear yang dapat menyimpan kumpulan value yang disimpan secara berurutan dalam memori. Array dapat berisi campuran tipe data yang berbeda. Elemen-elemen dalam array diakses menggunakan indeks. Index pertama dimulai dari 0 bukan 1. Array adalah iterables, mereka dapat digunakan dengan for-of loop.

    - **_Kapan penggunaannya_**:

      Berguna saat kita harus menyimpan nilai individual dan menambah/menghapus nilai dari akhir struktur data.

    - **_Kelemahan_**:

      Kurang efektif untuk menambah/menghapus elemen dalam data yang besar karena array mengakses elemen secara berurutan. Jadi akan menjadi sulit dan memakan waktu yang lebih lama jika terdapat banyak elemen terlebih lagi jika perubahan dilakukan di tengah atau di akhir array.

    - **_Mengatasi kelemahan_**:

      Beberapa bahasa pemrograman menyediakan struktur data dinamis, seperti linked list atau dynamic array.

    - **_Big-O Time Complexity dari Array_**:

      Insertion / removal element dari akhir array => O(1) - Constant

      Insertion / removal element dari awal array => O(n) - Linear

      Searching => O(n) - Linear

      Access => O(1) - Constant

    - **_Method array dengan Time Complexity yang umum terjadi_**:

      `push()` / `pop()` = O(1) - Constant.

      `shift()` / `unshift()` / `concat()` / `slice()` / `splice()` = O(n) - Linear.

      `forEach()` / `map()` / `filter()` / `reduce()` = O(n) - Linear.

1.  **Object**

    - **_Karakteristik_**:

      Object adalah struktur data berupa pasangan kunci-nilai (key-value) yang tidak diurutkan. Key nya harus berupa tipe data String atau Simbol, sedangkan valuenya dapat berupa tipe data apapun. Setiap key harus unik dalam object, tidak bisa memiliki key dengan nama yang sama. Untuk mengambil nilai, dapat menggunakan key yang sesuai dengan value yang diinginkan. Object bukan sebuah iterable, tidak bisa menggunakannya dengan for-of loop.

    - **_Kapan penggunaannya_**:

      Digunakan saat pencarian berdasarkan kunci, seperti dalam basis data, pemetaan unik antara kunci dan nilai atau query search.

    - **_Big-O Time Complexity dari Object_**:

      Insertion => O(1) - Constant

      Removal => O(1) - Constant

      Searching => O(n) - Linear

      Access => O(1) - Constant
      `Object.keys()`, `Object.values()`, `Object.entries()`, akan memiliki time complexity O(n) - Linear.

1.  **Set**

    - **_Karakteristik_**:

      Set adalah struktur data yang dapat menampung kumpulan value dan harus unik (tidak sama satu dengan yang lain). Set dapat berisi campuran tipe data yang berbeda. Set adalah dynamically sized (tidak perlu mendeklarasikan ukuran Set sebelum mendeklarasikannya). Set tidak mempertahankan urutan penyisipan yang dilakukan, misalnya elemen yang dimasukkan terlebih dahulu dalam Set bukan berarti itu akan menjadi elemen pertama di Set. Set merupakan iterable, bisa digunakan dengan for-of loop.

    - **_Set vs Array_**:

      Keduannya dapat digunakan jika hanya bermain dengan daftar nilai sederhana dan hanya memiliki nilai tanpa deskripsi apa pun.

      Array dapat berisi nilai duplicate sedangkan Set tidak bisa.

      Urutan penyisipan dipertahankan dalam array tetapi tidak pada kasus Set.

      Searching dan deleting elemen pada Set lebih cepat jika dibandingkan dengan Array.

    - **_Contoh code_**:

          // set constructor secara optional menerima array sebagai argumennya
          const set = new Set([1, 2, 3]);

          set.add(4); // menambahkan angka 4
          set.add(4); // hanya akan ada satu angka 4 dalam set.
          console.log(set.has(4)) // true
          set.delete(3); // menghapus value 3.
          console.log(set.size) // memeriksa jumlah item set.
          set.clear(); // menghapus semua item dalam set.

          // get value
          for (const item of set) {
          console.log(item);
          }

    - **_Method Set dengan big-O Time Complexity yang umum terjadi_**:

      `add(value)` / `delete(value)` / `has(value)` / `clear()` / `size` atau `length` = O(1) - Constant.

      `values()` atau `keys()` = O(n) - Linear.

      `forEach()` = O(n) - Linear.

1.  **Map**

    - **_Karakteristik_**:

      Map adalah struktur data yang digunakan untuk menyimpan pasangan key-value. Key dan value bisa berupa tipe data apapun. Untuk mengambil value dapat menggunakan key yang sesuai. Map merupakan iterable, dapat digunakan dengan for-of loop.

    - **_Map vs Object_**:

      key dalam Object harus berupa string atau simbol, sedangkan Map bisa menggunakan tipe data apapun.

      Map mempertahankan urutan elemen sesuai dengan urutan penambahannya, sementara Object tidak menjamin urutan tertentu.

      Object memiliki property dan mungkin berisi beberapa default keys yang mungkin bisa bertabrakan dengan key kita sendiri jika tidak berhati-hati. Map disisi lain tidak berisi default key appaun.

      Object bukan merupakan iterable, sedangkan Map merupakan iterable.

      Jumlah item dalam Object harus ditentukan secara manual, sedangkan itu sudah tersedia dengan property `size` pada Map.

      Selain menyimpan data, kita dapat melampirkan fungsionalitas ke dalam Object sedangkan Map hanya dibatasi untuk menyinpan data.

    - **_Contoh code_**:

          // map constructor secara optional menerima array sebagai argumennya
          const map = new Map([["a", 1], ["b", 2]]);

          map.set("c", 2); // menambahkan value
          console.log(map.has("a")) // true
          map.delete("c"); // menghapus value.
          console.log(map.size) // memeriksa jumlah item map.
          map.clear(); // menghapus semua item dalam map.

          // get value
          for (const [key, value] of map) {
          console.log(`${key} = ${value}`);
          }

    - **_Method Map dengan big-O Time Complexity yang umum terjadi_**:

      `set(key, value)` / `get(key)` / `has(key)` / `delete(key)` / `clear()` / `size` atau `Map.size` = O(1) - Constant.

      `values()` / `keys()` / `entries()` = O(n) - Linear.

      `forEach()` = O(n) - Linear.

### 2.2. Custom Data Structure di JavaScript:

1.  **Stack**

    - **_Karakteristik_**:

      Stack adalah struktur data linear yang berupa kumpulan elemen berurutan dalam bentuk list. Menambah atau menghapus elemen menggunakan prinsip LIFO (Last-In-First-Out), yang berarti elemen terakhir yang dimasukkan ke dalam stack akan menjadi elemen pertama yang dihapus. Stack adala tipe data abstract, dimana Stack hanyalah list dan apa yang membuatnya menjadi Stack adalah bagaimana perilakunya. Stack mendukung dua operasi utama, `push()` dan `pop()`.

    - **_Analogi_**:

      Ada tumpukan kertas di meja. Kita hanya dapat menambahkan lebih banyak kertas ke tumpukan dengan menempatkannya di atas yang lain. Ketika ingin mengeluarkan kertas dari tumpukan harus mengambil kertas dari yang teratas terlebih dahulu.

    - **_Kelemahan_**:

      Hanya dari elemen teratas yang dapat diakses dan dihapus.

    - **_Contoh kegunaan_**:

      Biasanya Stack bagus ketika harus melacak kembali steps sebelumnya. Contoh: pelacakan riwayat browser, operasi undo ketika mengetik, Call Stack di javascript runtime atau mengelola pemanggilan fungsi.

    - **_Implementasi Stack di JavaScript_**:

      [Code example »»](./data-structures/stack.js)

      `push()` => menambahkan elemen ke bagian atas Stack.

      `pop()` => menghapus elemen dari bagian paling tinggi di Stack dan mengembalikan elemen tersebut.

      `peek()` => mendapatkan nilai elemen teratas tanpa menghapusnya.

      `isEmpty()` => mengecek jika Stack kosong.

      `size()` => untuk mendapatkan jumlah elemen dalam Stack.

      `print()` => untuk memvisualisasikan elemen dalam Stack.

      `clear()` => untuk mengosongkan Stack.

    - **_Big-O dari Stack method_**:

      Insertion => O(1) - Constant

      Removal => O(1) - Constant

    - **_Alasan mengapa struktur data stack khusus lebih disarankan daripada menggunakan struktur data array yang memiliki method serupa_**:

      Fokus pada fungsionalitas => struktur data Stack dirancang khusus untuk operasi tumpukan, memastikan bahwa operasi yang relevan dengan konsep tumpukan dilakukan dengan jelas.

      Kode yang lebih bersih dan terbaca => penggunaan struktur data Stack khusus membuat niat dan tujuan kode lebih jelas, menghindari kebingungan dan kesalahan interpretasi saat membaca dan memodifikasi kode di masa depan.

      Penggunaan memori yang efisien => struktur data Stack khusus, seperti Stack yang diimplementasikan menggunakan linked list, mengalokasikan memori secara dinamis, menghindari alokasi memori berlebihan dan mengoptimalkan penggunaan memori.

2.  **Queue**

    Linear queue dan circular queue dapat digunakan dalam berbagai aplikasi yang memerlukan pengaturan dan pengelolaan data dalam urutan linier dengan prinsip FIFO (First-In-First-Out).

    Intinya adalah circular queue memungkinkan penggunaan ruang penyimpanan yang lebih efisien karena dapat mengisi kembali ruang kosong yang ada di belakang elemen terakhir yang telah dihapus. Namun, dalam hal alokasi memori dasar, baik linear queue maupun circular queue membutuhkan jumlah memori yang sama untuk menyimpan elemen-elemen yang sama.

    - [ ] **Linear Queue**

      - **_Karakteristik_**:

        Linear queue adalah struktur data queue yang memiliki batas awal dan batas akhir yang tetap. Ketika elemen-elemen ditambahkan `enqueue` ke linear queue, mereka ditempatkan di belakang elemen terakhir dan batas akhir bergerak ke elemen baru tersebut. Ketika elemen-elemen dihapus `dequeue` dari linear queue, elemen pertama dihapus dan batas awal bergerak ke elemen berikutnya.

      - **_Analogi_**:

        Saat orang-orang yang mengantri membeli makanan. Logikanya disini adalah orang yang berada pada antrean pertama, itulah yang akan dilayani terlebih dahulu. Jika sampai di sana lebih dulu, akan menjadi yang pertama keluar (FIFO).

      - **_Kelemahan_**:

        Hanya elemen pertama yang dapat diakses dan dihapus.

      - **_Kapan penggunaannya_**:

        Saat membutuhkan elemen-elemen untuk disimpan dan diakses dalam urutan linier dan tidak perlu memanfaatkan ruang kosong yang dihasilkan oleh penghapusan elemen.

        Jika hanya membutuhkan implementasi yang sederhana dan tidak memerlukan manajemen index batas yang kompleks.

        Jika alokasi memori tidak menjadi masalah utama dan tidak terbatas pada ruang penyimpanan.

      - **_Contoh kegunaan_**:

        Biasanya sangat bagus ketika harus memproses secara teratur. Misalnya, printer yang mencetak beberapa document, CPU ketika menjadwalkan tugas atau yang paling penting Callback Queue pada JavaScript runtime.

      - **_Implementasi linear queue di JavaScript_**:

        [Code example »»](./data-structures/queue-linear.js)

        `enqueue(elemen)` => menambahkan elemen ke Queue

        `dequeue()` => menghapus elemen pertama dari Queue

        `peek()` => mendapatkan elemen pertama dari Queue tanpa menghapusnya

        `isEmpty()` => mengecek apakah Queue kosong

        `size()` => mendapatkan jumlah elemen pada Queue

        `print()` => memvisualisasikan elemen pada Queue

      - **_big-O dari queue method_**:

        `enqueue()` => O(1) - Constant

        `dequeue()` => O(1) - Constant

    - [ ] **Circular Queue**

      - **_Karakteristik_**:

        Circular queue adalah variasi dari struktur data queue yang memperlakukan array atau buffer penyimpanan sebagai cincin atau siklus. Ini berarti batas awal dan batas akhir tidak tetap pada indeks awal dan akhir array, melainkan dapat melintasi batas array dan kembali ke awal. Ketika elemen-elemen ditambahkan ke circular queue, batas akhir bergerak maju dan jika mencapai batas akhir array, ia melompat ke indeks awal. Demikian pula, ketika elemen-elemen dihapus, batas awal bergerak maju dan jika mencapai batas akhir array, ia melompat kembali ke indeks awal. Data struktur Circular Queue didukung 2 operasi utama yaitu **enqueue** (menambahkan elemen ke belakang/ekor dari koleksi) dan **dequeue** (menghapus elemen dari depan/kepala koleksi)

      - **_Analogi_**:

        Kita dapat membayangkan Circular Queue sebagai lintasan balapan berbentuk lingkaran. Mobil-mobil balap (elemen-elemen dalam antrian) bergerak di sepanjang lintasan dan ketika mobil terakhir mencapai akhir lintasan, mobil berikutnya akan kembali ke awal lintasan tanpa memerlukan perubahan posisi fisik.

      - **_Kelemahan_**:

        Kapasitas terbatas pada jumlah elemen yang dapat disimpan dalam antrian dan kompleksitas implementasi yang rumit karena memerlukan manipulasi index untuk mengatur penambahan dan penghapusan elemen.

      - **_Kapan penggunaannya_**:

        Jika efisiensi memori sangat penting, terutama jika memiliki sumber daya yang terbatas atau membatasi alokasi memori. karena circular queue dapat memungkinkan penggunaan memori yang lebih efisien dengan memanfaatkan kembali ruang kosong yang dihasilkan oleh penghapusan elemen.

        Jika perlu mengakses elemen secara berulang dengan perputaran yang cepat tanpa mempengaruhi kinerja keseluruhan. Karena circular queue dapat memungkinkan akses yang lebih efisien dan menghindari pergeseran data yang tidak perlu.

        Jika membutuhkan implementasi buffer atau antrian berputar yang memproses data secara kontinu, circular queue dapat menjadi solusi yang cocok untuk memperlakukan array sebagai cincin.

      - **_Contoh penggunaan_**:

        **Buffer audio**: untuk menyimpan sampel audio dengan efisien dan penggantian yang mudah tanpa realokasi memori.

        **Sistem komunikasi**: sebagai buffer pesan untuk menyimpan pesan masuk sebelum diproses, dengan penambahan pesan baru di akhir antrian dan penghapusan pesan tertua dari awal antrian ketika penuh.

        **Algoritma penjadwalan**: untuk mengalokasikan sumber daya sesuai dengan urutan dan prioritas tugas-tugas.

      - **_Implementasi circular queue di JavaScript_**:

        [Code example »»](./data-structures/queue-circular.js)

        `enqueue(elemen)` => menambahkan elemen ke belakang/ekor Queue

        `dequeue()` => menghapus elemen dari depan/kepala Queue

        `isFull()` => mengecek apakah Queue penuh

        `isEmpty()` => mengecek apakah Queue kosong

        `peek()` => mendapatkan elemen terdepan dari Queue tanpa menghapusnya

        `print()` => memvisualisasikan elemen pada Queue

      - **_big-O dari queue method_**:

        Enqueue => O(1) - Constant

        Dequeue => O(1) - Constant

3.  **Linked List**

    Linked list adalah struktur data linier yang terdiri dari simpul-simpul (node) yang saling terhubung secara dinamis menggunakan referensi atau pointer.

    Struktur data linked list mendukung tiga operasi utama yaitu **_insertion_** (untuk menambahkan elemen dari awal atau akhir atau juga pada index yang diberikan dalam list), **_deletion_** (untuk menghapus elemen berdasarkan index atau nilai yang ditentukan) dan **_search_** (untuk menemukan elemen berdasarkan nilainya).

    Ada dua jenis linked list yang umum yaitu **singly linked list** (linked list tunggal) di mana setiap simpul hanya memiliki pointer ke simpul berikutnya, dan **doubly linked list** (linked list ganda) di mana setiap simpul memiliki pointer ke simpul berikutnya dan sebelumnya.

    - [x] **Singly Linked List**

      - **_Karakteristik_**:

        Singly linked list adalah struktur data linear di mana setiap elemen (node) terhubung ke node berikutnya dalam satu arah. Setiap node memiliki dua komponen: `element` yang menyimpan data dan pointer `next` yang menunjuk ke node berikutnya.

      - **_Kelebihan_**:

        Penambahan dan penghapusan elemen dari depan (head) maupun dari belakang (tail) dilakukan dengan sederhana dan efisien, karena hanya perlu memperbarui pointer head dan tail.

        Memiliki penggunaan memori yang lebih efisien dibandingkan dengan doubly linked list karena tidak memerlukan pointer ke node sebelumnya.

      - **_Kelemahan_**:

        Akses lambat: mencari atau mengakses elemen secara acak (random) dalam linked list tidak efisien, karena perlu melintasi linked list dari awal hingga mencapai elemen yang ditentukan.

        Ruang overhead: membutuhkan lebih banyak ruang penyimpanan dibandingkan dengan array, karena setiap node memiliki overhead tambahan untuk menyimpan pointer.

        Tidak dapat melakukan iterasi mundur secara langsung.

      - **_Kapan penggunaannya_**:

        Jika perlu melakukan operasi penambahan atau penghapusan elemen secara efisien di awal atau akhir linked list.

        Jika pencarian elemen jarang dilakukan dalam struktur data.

      - **_Contoh penggunaan_**:

        Ketika perlu melakukan penambahan atau penghapusan elemen dari depan atau belakang list secara efisien, seperti dalam implementasi stack atau queue.

        Implementasi algoritma pemrosesan berkas berurutan.

      - **_Implementasi singly linked list di JavaScript_**:

        [Code example »»](./data-structures/linked-list.js)

        `isEmpty()` => mengecek apakah linked list kosong.

        `getSize()` => mendapatkan jumlah elemen pada linked list.

        `prepend(value)` => menambahkan node baru (dengan nilai value) di awal linked list jika list sudah terisi, atau sebagai node pertama jika list masih kosong.

        `append(value)` => menambahkan node baru (dengan nilai value) di akhir linked list jika list sudah terisi, atau sebagai node pertama jika list masih kosong.

        `insert(value, position)` => memasukkan node baru pada index yang ditentukan.

        `removeFrom(position)` => menghapus value dalam linked list berdasarkan index valid yang ditentukan.

        `removeValue(value)` => menghapus value dalam linked list berdasarkan value valid yang ditentukan.

        `removeFromFront()` => menghapus elemen atau node dari depan(head).

        `removeFromEnd()` => menghapus elemen atau node dari belakang(tail).

        `search(value)` => mencari index berdasarkan value valid yang ditentukan.

        `reverse()` => untuk membalik urutan simpul-simpul dalam list.

        `print()` => memvisualisasikan elemen pada linked list.

      - **_Big-O dari singly linked list method_**:

        `prepend(value)` => O(1) - Constant

        `append(value)` => O(1) - Constant

        `insert(value, position)` => jika menyisipkan elemen di awal maka O(1) - Constant, namun selebihnya O(n) - Linear

        `removeFrom(position)` => O(n) - Linear

        `removeValue(value)` => O(n) - Linear

        `removeFromFront()` => O(1) - Constant

        `removeFromEnd()` => O(n) - Linear

        `search(value)` => O(n) - Linear

        `reverse()` => O(n) - Linear

      - **_Implementasi Stack data structure menggunakan singly linkede list di JavaScript_**:

        Stack data structure dapat diimplementasikan dengan linked list. berikut beberapa faktor atau pertimbangan yang dapat dijadikan acukan kapan harus menggunakan Stack data structure dengan atau tanpa linked list:

        Stack tanpa Linked List:

        - Cocok jika kebutuhan operasi push (penambahan) dan pop (penghapusan) pada elemen dalam urutan terbalik.
        - Tidak dinamis, elemen tetap, dan jumlah elemen kecil.
        - Alokasi memori tidak menjadi masalah utama.

        Stack dengan Linked List:

        - Cocok jika membutuhkan struktur data stack yang dinamis dan dapat menyesuaikan ukuran dan jumlah elemen.
        - Efisien dalam penambahan dan penghapusan elemen tanpa memerlukan pergeseran.
        - Cocok untuk mengelola jumlah elemen yang berubah secara dinamis.

        [Code example »»](./data-structures/linked-list-stack.js)

        `push()` => menambahkan elemen atau node diatas node teratas saat ini.

        `pop()` => menghapus elemen atau node dari stack teratas dan mengembalikan elemen tersebut.

        `peek()` => mengembalikan elemen teratas pada stack tanpa menghapusnya.

      - **_Implementasi Queue data structure menggunakan singly linkede list di JavaScript_**:

        Queue data structure dapat diimplementasikan dengan linked list. berikut beberapa faktor atau pertimbangan yang dapat dijadikan acukan kapan harus menggunakan Queue data structure dengan atau tanpa linked list:

        Queue tanpa Linked List:

        - Cocok jika kebutuhan operasi enqueue (penambahan) dan dequeue (penghapusan) pada elemen dalam urutan tetap.
        - Tidak dinamis, elemen tetap, dan jumlah elemen kecil.
        - Alokasi memori tidak menjadi masalah utama.

        Queue dengan Linked List:

        - Cocok jika membutuhkan struktur data queue yang dinamis dan dapat menyesuaikan ukuran dan jumlah elemen.
        - Efisien dalam penambahan dan penghapusan elemen di ujung-ujung queue tanpa pergeseran.
        - Cocok untuk mengelola jumlah elemen yang berubah secara dinamis.

        [Code example »»](./data-structures/linked-list-queue.js)

        `enqueue()` => menambahkan elemen ke queue di belakang node terakhir saat ini.

        `dequeue()` => menghapus elemen terdepan queue dan mengembalikan elemen tersebut.

        `peek()` => mengembalikan elemen terdepan pada queue tanpa menghapusnya.

    - [x] **Doubly Linked List**

      - **_Karakteristik_**:

        Doubly linked list adalah struktur data linear di mana setiap elemen (node) terhubung ke node sebelumnya dan node berikutnya dalam satu arah. Setiap node memiliki dua komponen: `element` yang menyimpan data, pointer `prev` yang merujuk ke node sebelumnya dan pointer `next` yang menunjuk ke node berikutnya.

      - **_Kelebihan_**:

        Mendukung pencarian maju dan mundur secara efisien. Iterasi maju dan mundur dapat dilakukan dengan mudah.

        Memungkinkan operasi penambahan atau penghapusan elemen di awal, akhir, dan tengah linked list dengan efisiensi yang lebih baik dibandingkan dengan singly linked list, meskipun untuk penghapusan elemen di tengah linked list keduanya mempunyai kompleksitas linear O(n).

      - **_Kelemahan_**:

        Memerlukan penggunaan memori lebih banyak dibandingkan dengan singly linked list karena setiap node menyimpan pointer ke node sebelumnya dan node berikutnya.

      - **_Kapan penggunaannya_**:

        Jika perlu melakukan operasi pencarian maju dan mundur yang efisien.

        Jika operasi penambahan atau penghapusan elemen di awal, akhir, dan tengah linked list perlu dilakukan dengan efisiensi yang lebih baik dibandingkan dengan singly linked list.

      - **_Contoh penggunaan_**:

        Implementasi cache dengan kemampuan untuk menghapus entri tertentu dengan cepat.

        Implementasi history management pada web browser.

      - **_Implementasi doubly linked list di JavaScript_**:

        [Code example »»](./data-structures/linked-list-double.js)

      - **_Big-O dari doubly linked list method_**:

        `prepend(value)` => O(1) - Constant

        `append(value)` => O(1) - Constant

        `removeFromFront()` => O(1) - Constant

        `removeFromEnd()` => O(1) - Constant

4.  **Hash Table**

    - **_Karakteristik_**:

      Hash table adalah struktur data yang digunakan untuk menyimpan data dalam bentuk pasangan kunci-nilai (`key`-`value`). Karakteristik utama dari hash table adalah penggunaan fungsi `hash` untuk mengubah `key` menjadi indeks dalam array, di mana `value` yang sesuai disimpan. Dengan teknik ini, pencarian, penghapusan, dan pengambilan data biasanya dapat dilakukan dalam waktu konstan, membuat hash table sangat efisien untuk banyak kasus.

      Hash table mendukung tiga operasi utama: `Set`, `Get` dan `Remove`.

      Map dan Object javascript adalah implementasi khusus dari data struktur hash table. Object Class menambahkan `key`nya sendiri, sehingga key yang dimasukkan kemungkinan akan terjadi konflik dan menimpa default property bawaan. Sedangkan struktur data Map datang untuk mengatasi masalah ini, dan sejujurnya ini adalah implementasi yang harus digunakan saat menulis kode. Meskipun javascript sudah memiliki dua implementasi hash table, menulis implementasi hash table kita sendiri juga penting untuk pertanyaan wawancara.

    - **_Kelebihan_**:

      Kecepatan: operasi pencarian, penambahan, dan penghapusan data biasanya berjalan dengan waktu konstan O(1) dengan catatan kasus terburuk linear O(n), menjadikan hash table sangat efisien.

      Efisien: Dalam situasi tertentu, hash table dapat mengungguli struktur data lainnya dalam hal kecepatan dan efisiensi memori.

    - **_Kelemahan_**:

      Collision (tabrakan): dalam beberapa kasus, dua atau lebih kunci berbeda dapat menghasilkan indeks yang sama. Untuk mengatasinya, teknik resolusi tabrakan seperti **chaining** (menggunakan linked list di setiap index) atau **open addressing** (menyimpan data di index lain jika terjadi tabrakan) digunakan, yang dapat mengurangi kecepatan operasi menjadi O(n) dalam situasi terburuk.

      Pengurangan efisiensi: jika fungsi hash yang buruk digunakan, banyak tabrakan dapat terjadi, menyebabkan performa hash table menurun.

    - **_Kapan penggunaannya_**:

      Dapat diimplementasikan jika ingin pencarian, penyisipan dan penghapusan data berdasarkan `key` secara konstan diperlukan.

      Hash table sangat disarankan untuk algoritma yang memprioritaskan operasi pencarian dan pengambilan data. Karena akan menghasilkan time complexity constant.

      Hash table adalah pilihan yang tepat untuk data yang diurutkan secara acak karena pengaturan pasangan kunci-nilainya.

      Jika ingin menghindari pengulangan data dalam kumpulan besar dan menginginkan operasi yang efisien untuk memastikan uniknya setiap kunci.

    - **_Contoh penggunaan_**:

      Kamus (dictionary): Hash table dapat digunakan untuk mengimplementasikan kamus, di mana setiap kata memiliki arti atau definisi yang terkait.

      Caching: Hash table sering digunakan dalam teknik caching untuk menyimpan hasil perhitungan atau data yang sering digunakan sehingga dapat diakses dengan cepat.

      Penghitungan frekuensi: Hash table dapat digunakan untuk menghitung frekuensi kemunculan elemen dalam array atau string.

      Autentikasi: Hash table digunakan dalam pengembangan sistem keamanan untuk menyimpan informasi pengguna dan token otentikasi.

    - **_Implementasi Hash table menggunakan Object dengan Chaining untuk menghindari tabrakan index yang sama di JavaScript_**:

      Kelebihan:

      - Sederhana dan cepat: Objek adalah struktur data yang sangat cepat dan mudah digunakan di JavaScript. Pengambilan nilai berdasarkan kunci di objek memiliki kompleksitas O(1) (waktu konstan), yang menjadikannya pilihan yang cepat untuk hash table dengan kunci yang sederhana seperti string atau angka.
      - Dukungan pada versi javascript lama: Objek adalah bagian dari bahasa JavaScript sejak awal, sehingga dapat digunakan pada versi JavaScript yang lebih lama tanpa masalah.

      Kekurangan:

      - Tidak mendukung semua tipe data kunci: Objek hanya mendukung kunci dalam bentuk string atau simbol. Penggunaan kunci yang kompleks seperti array atau objek dapat menghadirkan tantangan dalam implementasi hash table.
      - Iterasi lebih rumit: meskipun objek dapat diiterasi melalui loop `for...in`, pengaturan loop yang benar untuk mendapatkan seluruh pasangan kunci-nilai dalam hash table dapat sedikit rumit.
      - Penanganan tabrakan lebih rumit: ketika terjadi tabrakan, kita harus memperhatikan cara mengelola data dalam objek agar tidak menimpa nilai-nilai yang ada dan memastikan kunci yang unik.

      [Code example »»](./data-structures/hash-table-object.js)

      `hash()` => fungsi yang menentukan index dari pasangan `key` dan `value` yang ditentukan. Kompleksitas waktunya O(n) - Linear rata-rata kasus

      `set()` => untuk mengatur penyimpanan pasangan `key`-`value`. Kompleksitas waktunya O(k) di rata-rata kasus, dengan k adalah jumlah kunci yang ada dalam setiap bucket. Biasanya memiliki kompleksitas lebih baik karena penggunaan teknik chaining yang efektif.

      `get()` => untuk mengambil `value` berdasarkan `key`. Kompleksitas waktunya O(k) di rata-rata kasus, dengan k adalah jumlah kunci yang ada dalam setiap bucket. Biasanya memiliki kompleksitas lebih baik karena penggunaan teknik chaining yang efektif.

      `remove()` => untuk menghapus pasangan `key`-`value`. Kompleksitas waktunya O(k) di rata-rata kasus, dengan k adalah jumlah kunci yang ada dalam setiap bucket. Biasanya memiliki kompleksitas lebih baik karena penggunaan teknik chaining yang efektif.

    - **_Implementasi Hash table menggunakan Map dengan Chaining untuk menghindari tabrakan index yang sama di JavaScript_**:

      Kelebihan:

      - Tipe kunci yang fleksibel: Map dapat menggunakan berbagai tipe data sebagai kunci, termasuk string, angka, objek, dan tipe data lainnya. Ini memberikan fleksibilitas lebih besar dalam memilih kunci sesuai kebutuhan.
      - Iterasi mudah: Map memiliki method `forEach()` dan `for...of`, yang memudahkan iterasi melalui seluruh pasangan kunci-nilai dalam hash table tanpa perlu mengonversi menjadi array terlebih dahulu.
      - Efisiensi pada kunci Objek: Ketika ingin menggunakan objek JavaScript sebagai kunci dalam hash table, Map menangani objek dengan benar sebagai kunci, sehingga kunci objek yang berbeda dianggap unik.
      - Method bawaan yang berguna: Map menyediakan method bawaan untuk memeriksa ukuran hash table (`size`), menghapus semua pasangan kunci-nilai (`clear()`), dan lainnya, yang membuatnya lebih mudah digunakan dan dikelola.

      Kekurangan:

      - Kompatibilitas: Map mungkin tidak sepenuhnya kompatibel dengan beberapa pustaka atau lingkungan lama yang belum mendukung ECMAScript 6 (ES6), karena Map diperkenalkan dalam ES6.
      - Keterbatasan key ttype: beberapa penggunaan kunci dengan tipe data yang kompleks, seperti array asosiatif, bisa lebih rumit dalam Map. Meskipun Map mendukung objek sebagai kunci, terkadang keterbatasannya tergantung pada cara objek tersebut di-hash.

      [Code example »»](./data-structures/hash-table-map.js)

      `set()` => untuk mengatur penyimpanan pasangan `key`-`value`. Kompleksitas waktunya O(1) - Constant rata-rata kasus

      `get()` => untuk mengambil `value` berdasarkan `key`. Kompleksitas waktunya O(1) - Constant rata-rata kasus

      `remove()` => untuk menghapus pasangan `key`-`value`. Kompleksitas waktunya O(1) - Constant rata-rata kasus

      `hash()` => fungsi yang menentukan index dari pasangan `key` dan `value` yang ditentukan. Kompleksitas waktunya O(n) - Linear rata-rata kasus

5.  **Tree**

    - **_Karakteristik_**:

      Struktur data tree adalah struktur data yang berbentuk seperti pohon yang terdiri dari simpul-simpul (node) yang saling terhubung melalui garis-garis (edge). Setiap simpul memiliki tepat satu simpul atasannya, kecuali simpul atas (root) yang tidak memiliki simpul atasannya, dan setiap simpul dapat memiliki banyak simpul anak (child).

      Struktur data tree adalah struktur data non-linear, tidak seperti array, linked list, stack dan queue yang merupakan struktur data linear. Dalam struktur data linear, waktu yang diperlukan untuk melakukan "search" sebanding dengan ukuran kumpulan data, lebih banyak data lebih banyak pula waktu yang dibutuhkan untuk mencari data tersebut. Disisi lain non-linear memungkinkan akses yang lebih cepat dan lebih mudah ke data.

      Struktur data tree juga tidak akan berisi loop atau siklus apapun

    - **_Kelebihan_**:

      Representasi hierarki: tree sangat baik untuk merepresentasikan data dalam bentuk hierarki.

      Pencarian efisien: pencarian pada tree biasanya lebih efisien daripada pencarian linear pada array atau linked list jika tree cukup terstruktur.

      Penyimpanan data terstruktur: tree memungkinkan penyimpanan data yang terstruktur dengan mudah sehingga operasi seperti penambahan, penghapusan, dan pemutakhiran data dapat dilakukan secara efisien.

      Pengurutan: tree dapat digunakan untuk mengimplementasikan struktur data lain seperti binary search tree (BST) yang memungkinkan pengurutan data.

    - **_Kelemahan_**:

      Penggunaan memori: implementasi tree memerlukan alokasi memori untuk menyimpan simpul dan tepi, yang dapat menyebabkan penggunaan memori yang lebih besar daripada struktur data lain seperti array atau linked list.

      Kesulitan pengelolaan: tree memerlukan pengelolaan dan perhatian lebih untuk memastikan agar tree tetap terstruktur dan tidak menjadi cemara (degenerate), yang dapat mempengaruhi efisiensi operasi.

    - **_Contoh penggunaan_**:

      Struktur organisasi: representasi hierarki dari departemen dan pegawai dalam sebuah organisasi.

      Folder dalam sistem file: representasi folder dan subfolder dalam sistem file komputer.

      Kehidupan: representasi silsilah keluarga atau hierarki kehidupan dalam biologi.

      DOM

      Chat bots

    - **_Implementasi Tree menggunakan Binary Search Tree di JavaScript_**:

      Biasanya struktur data tree jarang diminta untuk mengimplementasikannya dengan **generic tree**, melainkan menggunakan **binary search tree**.

      Binary search tree (BST):

      Binary search tree (BST) adalah salah satu jenis struktur data tree yang memiliki sifat terurut dan efisien dalam melakukan operasi pencarian, penambahan, dan penghapusan data. BST memiliki struktur data hierarki dimana setiap simpul memiliki paling banyak **_dua anak_**, yaitu anak kiri dan anak kanan.

      Binary search tree memiliki dua sifat berikut: nilai di setiap simpul anak kiri harus lebih kecil daripada nilai di simpul induk, sedangkan nilai di setiap simpul anak kanan harus lebih besar daripada nilai di simpul induk.

      Operasi utama binary search tree: `insert` (untuk menambahkan sebuah node ke tree), `search` (untuk menemukan node berdasarkan valuenya), `DFS` atau `BFS` dan `deletion` (untuk menghapus node berdasarkan valuenya).

      Teknik traversal (BST):

      Teknik traversal pada struktur data Binary Search Tree (BST) dalam JavaScript adalah metode pencarian dengan cara mengunjungi atau melintasi semua node dalam BST dengan urutan tertentu.

      - Teknik traversal pada (BST) menggunakan pendekatan **Depth-First Search (DFS)** mempunyai tiga varian pencarian, yaitu : `inorder` (node-node dalam BST dikunjungi secara urut mulai dari node paling kiri, kemudian ke node induk, dan akhirnya ke node paling kanan), `preorder` (node-node dalam BST dikunjungi secara urut mulai dari node induk, kemudian ke node kiri, dan akhirnya ke node kanan), dan `postorder` (node-node dalam BST dikunjungi secara urut mulai dari node paling kiri, kemudian ke node paling kanan, dan akhirnya ke node induk). Dengan menggunakan salah satu teknik traversal ini, kita dapat mengakses dan memanipulasi data pada BST sesuai dengan urutan yang diinginkan.

      - Teknik traversal pada (BST) menggunakan pendekatan **Breadth-First Search (BFS)** adalah untuk mencetak nilai (value) dari setiap node dalam BST secara level-by-level, dimulai dari root node hingga mencapai daun pada level terakhir.

      Kelebihan (BST):

      - Pencarian efisien: BST memungkinkan pencarian data dengan cepat karena kita dapat mengurangi jumlah simpul yang harus diperiksa secara signifikan pada setiap langkah.
      - Penyimpanan terurut: data dalam BST disimpan secara terurut, sehingga memudahkan dalam operasi pengurutan dan pemrosesan data dalam urutan tertentu.
      - Operasi sisip dan hapus: BST memungkinkan penambahan dan penghapusan data dengan efisien, mempertahankan sifat terurutnya.

      Kekurangan (BST):

      - kemungkinan degenerasi: jika data yang dimasukkan ke BST sudah terurut atau hampir terurut, BST dapat menjadi tidak seimbang dan berubah menjadi struktur linear, yang dapat mengurangi efisiensi operasi.
      - Sensitif terhadap data: kinerja BST sangat bergantung pada seberapa seimbang struktur tree. Jika data yang dimasukkan memiliki pola yang tidak seimbang, performa pencarian bisa menurun.

      Kapan harus menggunakan (BST):

      - Data perlu disimpan secara terurut untuk memudahkan pencarian dan pengurutan data.
      - Diperlukan operasi pencarian, penambahan, dan penghapusan data dengan efisien.
      - Data yang dimasukkan tidak memiliki pola yang cenderung tidak seimbang atau terurut.

      [Code example »»](./data-structures/binary-search-tree.js)

      `isEmpty()` => memeriksa apakah BST kosong atau tidak. Time Complexity: O(1) - Constant.

      `insert(value)` => untuk memasukkan nilai baru ke dalam BST. Time Complexity: O(log n) dalam kasus rata-rata dan O(n) dalam kasus terburuknya.

      `search(value)` => untuk mencari nilai tertentu dalam BST. Time Complexity: O(log n) dalam kasus rata-rata dan O(n) dalam kasus terburuknya.

      `preorderTraversal(rootNode)`, `inorderTraversal(rootNode)`, `postorderTraversal(rootNode)` => melakukan traversal pada BST. Time Complexity: O(n).

      `levelOrderTraversal()` => untuk melakukan traversal pada BST secara level-by-level (BFS). Time Complexity: O(n).

      `printLevel(level, rootNode)` => untuk mencetak nilai dari node pada level tertentu dalam BST secara (DFS). Time Complexity: O(n).

      `min(rootNode)`, `max(rootNode)` => untuk mencari nilai terkecil (min) dan terbesar (max) dalam BST. Time Complexity: O(log n) dalam kasus rata-rata dan O(n) dalam kasus terburuk.

      `remove(value)`, `removeNode(rootNode, value)` => untuk menghapus nilai tertentu dari BST. Time Complexity: O(log n) dalam kasus rata-rata dan O(n) dalam kasus terburuk.

6.  **Graph**

    - **_Karakteristik_**:

      Graph adalah struktur data non-linear yang terdiri dari kumpulan node atau vertex (simpul) yang saling terhubung melalui edge (garis). Node mewakili objek atau entitas dan setiap Node diberi nama unik yang membedakannya dari Node yang lain, sedangkan edge menunjukkan hubungan antara dua node. Graph digunakan untuk merepresentasikan berbagai jenis koneksi, seperti jaringan sosial, peta, dan sistem transportasi. Tree merupakan tipe khusus dari struktur data Graph.

      Ada dua jenis Graph:

      - **Directed** yang berarti hubungan antara dua node atau edge memiliki arah (biasanya edge direpresentasikan oleh arah panah pada Graph yang dapat dilalui) ini seperti jalur satu arah, misalnya instagram yang mana kita bisa mengikuti seseorang tapi dia tidak otomatis mengikuti kita.
      - **Undirected** yang berarti edge tidak memiliki arah (tidak adanya panah memberi tahu kita bahwa graph merupakan undirected) ini seperti jalur dua arah, misalnya facebook yang mana kita dan teman kita saling berteman.

      Setiap edge juga bisa memiliki bobot (weighted) atau tidak memiliki bobot (unweighted). Bobot ini bisa berarti jarak, waktu, atau nilai lainnya yang mewakili tingkat keterkaitan antara dua node. Misalnya dalam Graph rute transportasi, bobot bisa merepresentasikan jarak atau waktu antara dua tempat yang ditentukan.

      Intinya, data struktur Graph ini memudahkan kita untuk menggambarkan dan menganalisis hubungan kompleks antara berbagai elemen, dan banyak aplikasi keren yang bisa dibangun dengan bantuan Graph.

    - **_Kelebihan_**:

      Representasi hubungan yang kompleks: Graph memungkinkan representasi hubungan yang kompleks antara entitas-entitas yang terkait.

      Pencarian jalur: Graph sangat efisien untuk melakukan pencarian jalur dan menjawab pertanyaan seperti "Apakah ada jalan dari node A ke node B?".

      Model real-world scenarios: Graph digunakan untuk memodelkan banyak skenario dalam kehidupan nyata, seperti jaringan sosial, sistem transportasi, dan jaringan komputer.

    - **_Kelemahan_**:

      Penggunaan memori: Implementasi graph dengan jumlah node dan edge yang besar bisa memakan banyak memori.

      Kompleksitas implementasi: Mengelola graph, terutama ketika ukurannya besar, dapat menjadi rumit.

    - **_Contoh penggunaan_**:

      Peta dan rute (google map): Graph digunakan untuk merepresentasikan jalan dan keterhubungan antara tempat-tempat di peta.

      Grafik akhir (finite state machine): Graph digunakan untuk merepresentasikan aliran program atau bahasa formal.

      Sistem rekomendasi: Graph digunakan untuk merepresentasikan hubungan antara produk dan preferensi pengguna.

      Jaringan sosial: Graph digunakan untuk merepresentasikan koneksi antara pengguna. Facebook, instagram, linkedin semuanya menggunakan strukur data Graph untuk menunjukkan hubungan timbal balik, saran postingan dan rekomendasi lainnya.

    - **_Representasi struktur data Graph_**:

      1.  Representasi Graph dengan menggunakan Array (Adjacency Matrix)

          Metode ini menggunakan array dua dimensi untuk menyimpan status keterhubungan antara node-node. Ukuran array ini adalah (n x n), dimana n adalah jumlah node dalam graph. Baris dan kolom dalam matriks menunjukkan node-node yang ada, dan nilai dalam sel matriks menunjukkan apakah ada edge atau tidak antara node-node tersebut. Metode ini cocok untuk graph yang padat dengan banyak edge.

          Contoh:

              // graph:

                  B
                /   \
              A       C

              // asumsikan urutan node adalah A, B, C
              const graphMatrix = [
                /* A B C */
                [ 0, 1, 0], // Node A terhubung dengan B (nilai 1 menunjukkan adanya edge)
                [ 1, 0, 1], // Node B terhubung dengan A dan C
                [ 0, 1, 0], // Node C terhubung dengan B
              ];

      2.  Representasi Graph dengan menggunakan Object (Adjacency List)

          Metode ini menggunakan objek (atau Map) JavaScript untuk merepresentasikan setiap node dan array (arau Set) untuk menyimpan node yang terhubung. Setiap node akan menjadi properti dari objek, dan nilai dari properti tersebut akan berupa array yang berisi node-node yang terhubung dengan node tersebut melalui edge. Ini adalah metode yang paling umum digunakan karena efisien untuk graph yang jarang terhubung (sparse graph) karena hanya menyimpan informasi tentang edge yang ada.

          Contoh: misalkan kita memiliki graph untuk merepresentasikan jaringan sosial sederhana. Node-node dalam graph mewakili pengguna, dan edge-edge mewakili pertemanan di antara mereka.

              Graph:
              A -- B -- C
               \            /
                 \        /
                     D

              // Representasi dengan Adjacency List:
              const graph = {
                A: ["B", "D"], // A berteman dengan B dan D
                B: ["A", "C"], // B berteman dengan A dan C
                C: ["B"],      // C berteman dengan B
                D: ["A"],      // D berteman dengan A
              };

              console.log(graph["A"]) // Output: ["B", "D"]
              console.log(graph["B"]) // Output: ["A", "C"]
              console.log(graph["C"]) // Output: ["B"]
              console.log(graph["D"]) // Output: ["A"]

      Adjacency Matrix Vs Adjacency List:

      - Jika graph jarang terhubung, representasi menggunakan objek (Adjacency List) lebih efisien karena hanya menyimpan informasi tentang edge yang ada. Sedangkan menggunakan array (Adjacency Matrik) akan menyimpan informasi tentang ada atau tidaknya edge.
      - Jika graph padat dan memiliki banyak edge, representasi menggunakan array (Adjacency Matrix) dapat lebih efisien karena hanya menggunakan ruang memori untuk seluruh kumpulan node.
      - Dengan Adjacency List, menyisipkan (inserting) dan mendapatkan (finding) node yang bersebelahan memiliki constant time complexity. lain halnya dengan Adjacency Matrik yang memiliki linear time complexity.

      - **_Implementasi graph dengan adjacency list di JavaScript_**:

        [Code example »»](./data-structures/graph.js)

        `addNode(node)` => menambahkan node baru ke dalam graph.

        `addEdge(fromNode, toNode)` => menambahkan edge antara dua node yang ada dalam graph.

        `removeNode(node)` => menghapus node beserta seluruh edge yang terhubung dengan node tersebut.

        `removeEdge(fromNode, toNode)` => menghapus edge antara dua node yang ada dalam graph.

        `display()` => mencetak adjacency list untuk menampilkan hubungan antara node-node dalam graph.

        `hasEdge(fromNode, toNode)` => mengecek apakah ada edge yang menghubungkan dua node yang diberikan.

      - **_Big-O dari graph dengan adjacency list method_**:

        `addNode(node)` => O(1) - Constant

        `addEdge(fromNode, toNode)` => O(1) - Constant

        `removeNode(node)` => O(n) - Linear

        `removeEdge(fromNode, toNode)` => O(1) - Constant

        `display()` => O(v + e) - Linear

        `hasEdge(fromNode, toNode)` => O(1) - Constant

## 3. ~ SUMMARY

### Algoritma::

**Search Algorithms**

1. Linear Search
   - Time complexity: O(n) - Linear
   - Space complexity: O(1) - Constant
   - Digunakan ketika: list atau array kecil, data tidak terurut, atau tidak ada informasi tentang pola data.
2. Binary Search
   - Time complexity: O(log n) - Logarithmic
   - Space complexity: O(1) - Constant
   - Digunakan ketika: data sudah terurut dan besar, untuk mengurutkan daftar sebelum mencari.

**Sort Algorithms**

1. Bubble Sort
   - Time complexity: O(n^2) - Quadratic
   - Space complexity: O(1) - Constant
   - Digunakan ketika: jumlah data terbatas dan tidak terlalu besar.
2. Selection Sort
   - Time complexity: O(n^2) - Quadratic
   - Space complexity: O(1) - Constant
   - Digunakan ketika: jumlah data terbatas dan tidak terlalu besar.
3. Insertion Sort
   - Time complexity: O(n^2) - Quadratic
   - Space complexity: O(1) - Constant
   - Digunakan ketika: jumlah data terbatas dan sebagian besar sudah terurut.
4. Merge Sort
   - Time complexity: O(n log n)
   - Space complexity: O(n) - Linear
   - Digunakan ketika: menguatkan pengurutan data besar, performa dan stabilitas sangat diutamakan
5. Quick Sort
   - Time complexity: O(n log n) pada kasus rata-rata dan O(n^2) pada kasus terburuk
   - Space complexity: O(log n) pada kasus rata-rata dan O(n) pada kasus terburuk
   - Digunakan ketika: menguatkan pengurutan data besar, performa baik pada kasus rata-rata.

**Graph Algorithms**

1. Depth-First Search (DFS)
   - Time complexity: O(v + e) dimana 'v' = jumlah node dan 'e' = jumlah edge
   - Space complexity: O(v)
   - Digunakan ketika: ingin menjelajahi seluruh cabang suatu graph, atau mencari jalur tertentu dari satu node ke node lainnya.
2. Breadth-First Search (BFS)
   - Time complexity: O(v + e) dimana 'v' = jumlah node dan 'e' = jumlah edge
   - Space complexity: O(v)
   - Digunakan ketika: mencari jalur terpendek atau menjelajahi seluruh level pada graph.

### Struktur data:

**Built-in Data Struktur:**

1. Array:

   - Time complexity:
     - Akses elemen berdasarkan indeks: O(1)
     - Pencarian elemen: O(n)
     - Penambahan atau penghapusan elemen di akhir: O(1)
     - Penambahan atau penghapusan elemen di tengah: O(n)
   - Space complexity: O(n)
   - Digunakan ketika:
     - Mengakses elemen berdasarkan indeks atau pengaksesan data yang cepat melalui index.
     - Untuk penyimpanan data dengan ukuran tetap atau terurut.

2. Object:

   - Time complexity:
     - Akses elemen: O(1)
     - Pencarian elemen: O(n)
     - Penambahan atau penghapusan elemen: O(1)
   - Space complexity: O(n)
   - Digunakan ketika:
     - Untuk menyimpan data dalam bentuk key-value (pair) dengan akses cepat berdasarkan key.

3. Set:

   - Time complexity:
     - Insert (penambahan data): O(1)
     - Search (pencarian data): O(1)
     - Delete (penghapusan data): O(1)
   - Space complexity: O(n)
   - Digunakan ketika:
     - Untuk menyimpan himpunan data unik tanpa duplikat.
     - Contoh penggunaan: menghilangkan duplikat dalam array, operasi matematika.

4. Map:

   - Time complexity:
     - Insert (penambahan data): O(1)
     - Search (pencarian data): O(1)
     - Delete (penghapusan data): O(1)
   - Space complexity: O(n)
   - Digunakan ketika:
     - Untuk memetakan kunci unik ke nilai tertentu.
     - Contoh penggunaan: penyimpanan data berstruktur dengan kunci yang dapat diakses.

**Custom Data Struktur:**

1. Stack:

   - Time complexity:
     - Push (penambahan elemen): O(1)
     - Pop (penghapusan elemen): O(1)
     - Top (mengakses elemen teratas): O(1)
   - Space complexity: O(n)
   - Digunakan ketika:
     - Untuk menangani tumpukan data dengan prinsip "last in, first out" (LIFO).
     - Contoh penggunaan: pengelolaan rekursi, penghitungan ekspresi matematika.

2. Queue:

   - Time complexity:
     - Enqueue (penambahan elemen): O(1)
     - Dequeue (penghapusan elemen): O(1)
     - Front (mengakses elemen depan): O(1)
   - Space complexity: O(n)
   - Digunakan ketika:
     - Untuk mengelola antrian data dengan prinsip "first in, first out" (FIFO).
     - Contoh penggunaan: pengelolaan antrian tugas, simulasi proses.

3. Linked List:

   - Time complexity:
     - Akses elemen berdasarkan indeks: O(1)
     - Pencarian elemen: O(n)
     - Penambahan atau penghapusan elemen: O(1) (jika akses ke node yang bersangkutan telah diketahui), O(n) (jika mencari node terlebih dahulu)
   - Space complexity: O(n)
   - Digunakan ketika:
     - Membutuhkan fleksibilitas dalam penambahan atau penghapusan elemen secara dinamis.
     - Untuk mengimplementasikan stack, queue, dan linked list terurut.

4. Doubly Linked List:

   - Time complexity: sama dengan Linked List
   - Space complexity: O(n)
   - Digunakan ketika:
     - Membutuhkan kemampuan untuk mengakses elemen ke depan dan ke belakang.
     - Untuk implementasi yang lebih kompleks yang membutuhkan traversal maju dan mundur.

5. Hash Table:

   - Time complexity:
     - Insert (penambahan data): O(1) (rata-rata), O(n) (kasus terburuk)
     - Search (pencarian data): O(1) (rata-rata), O(n) (kasus terburuk)
     - Delete (penghapusan data): O(1) (rata-rata), O(n) (kasus terburuk)
   - Space complexity: O(n)
   - Digunakan ketika:
     - Untuk melakukan pencarian cepat berdasarkan kunci unik.
     - Contoh penggunaan: penyimpanan data dengan indeks yang dikenali.

6. Trie:

   - Time complexity:
     - Insert (penambahan data): O(m), m adalah panjang string
     - Search (pencarian data): O(m), m adalah panjang string
     - Delete (penghapusan data): O(m), m adalah panjang string
   - Space complexity: O(n \* m), n adalah jumlah node, m adalah panjang string
   - Digunakan ketika:
     - Untuk pencarian, penambahan, dan penghapusan cepat dari string.
     - Contoh penggunaan: kamus, autocorrect, spell checker.

7. Binary Search Tree (BST):

- Time complexity:
  - Insert (penambahan data): O(log n) (rata-rata), O(n) (kasus terburuk, jika sudah terurut)
  - Search (pencarian data): O(log n) (rata-rata), O(n) (kasus terburuk, jika sudah terurut)
  - Delete (penghapusan data): O(log n) (rata-rata), O(n) (kasus terburuk, jika sudah terurut)
- Space complexity: O(n)
- Digunakan ketika:
  - Untuk mencari, menambahkan, dan menghapus data dengan efisien.
  - Contoh penggunaan: struktur data tree dengan kunci terurut.

Note: kompleksitas waktu dan ruang dapat berbeda tergantung pada implementasi algoritma dan struktur data tertentu, serta input yang diberikan. Dalam pemrograman, pemilihan algoritma dan struktur data yang tepat sangat penting untuk mencapai performa yang optimal sesuai dengan kasus penggunaan.
