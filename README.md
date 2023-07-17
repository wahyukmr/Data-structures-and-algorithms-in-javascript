[1. ~ ALGORITMA :](#1--algoritma-)

- [1. ~ ALGORITMA :](#1--algoritma-)
  - [1.1. Mendefinisikan algoritma](#11-mendefinisikan-algoritma)
  - [1.2. Mengapa algoritma](#12-mengapa-algoritma)
  - [1.3. Menganalisis algoritma](#13-menganalisis-algoritma)
  - [1.4. Mengimplementasikan Time dan Space Complexity](#14-mengimplementasikan-time-dan-space-complexity)
  - [1.5. Teknik desain algoritma](#15-teknik-desain-algoritma)
- [2. ~ DATA STRUCTURES :](#2--data-structures-)
  - [2.1. Built-in Data Structure di JavaScript:](#21-built-in-data-structure-di-javascript)
  - [2.2. Custom Data Structure di JavaScript:](#22-custom-data-structure-di-javascript)

## 1. ~ ALGORITMA :

**Algoritma** adalah sekumpulan langkah-langkah atau instruksi yang dapat diimplementasikan dalam bahasa pemrograman yang berbeda untuk memecahkan masalah tertentu.

**Algorithmic Thinking Concept** adalah memecahkan masalah menjadi beberapa bagian kemudian mengidentifikasi algoritma atau data structure mana yang terbaik untuk tugas tersebut.

Mempelajari algoritma akan memberikan pemahaman yang lebih dalam tentang **Complexity** dan **Efficiency**.

### 1.1. Mendefinisikan algoritma

1. Mengurai persoalan dengan jelas, input dan outpur.
2. Langkah-langkah dalam keperluan algoritma harus diurutkan secara spesifik.
3. langkah-langkahnya juga harus berbeda.
4. Algoritma harus menghasilkan sebauh hasil.
5. Algoritma harus selesai dalam jumlah waktu yang terbatas.

### 1.2. Mengapa algoritma

Sebagai developer, kita akan menemukan masalah yang perlu kita selesaikan. Saat mempelajari algoritma, pada dasarnya akan mempelajari berbagai teknik untuk menyelesaikan masalah tersebut secara efisien. Satu masalah bisa diselesaikan dengan banyak cara menggunakan algoritma yang berbeda. Setiap algoritma memiliki keuntungan dan kerugian masing-masing dalam hal kinerja.

### 1.3. Menganalisis algoritma

Tidak ada satu pun cara untuk mengukur apakah suatu algoritma merupakan solusi yang tepat karena tidak dapat diprediksi dan bergantung pada sejumlah faktor, diantaranya:

- bahasa pemrograman yang digunakan untuk mengimplementasikan algoritma.
- komputer tempat program dijalankan.
- program lain yang berjalan bersamaan.
- kualitas sistem operasi.

Jadi, dengan mempertimbangkan poin-poin diatas, kita dapat mengevaluasi kinerja suatu algoritma bergantung kepada **_input size_** atau ukuran inputnya.

Efisiensi suatu algoritma penting karena membantu memecahkan masalah lebih cepat dan memberikan hasil akhir yang baik. Ada dua konsep untuk mengevaluasi kinerja suatu algoritma yang perlu dipertimbangkan dalam mengukur efisiensi algoritma :

1. **Time complexity** merupakan langkah atau upaya untuk mengukur seberapa efisien sebuah algoritma dalam menangani ukuran masukan atau input size yang diberikan. Time complexity menggambarkan berapa banyak waktu yang dibutuhkan oleh algoritma untuk menyelesaikan operasinya, dan biasanya dinyatakan dalam notasi Big-O.
2. **Space complexity** adalah jenis kompleksitas yang mengukur penggunaan memori atau ruang yang diperlukan oleh algoritma. Ini menggambarkan seberapa efisien algoritma dalam menggunakan memori saat menjalankan operasinya, dan juga dinyatakan dalam notasi Big-O.

Untuk mencapai algoritma yang efisien perlu mempertimbangkan kedua konsep di atas. Secara teoritis, mungkin ada kasus di mana algoritma memiliki kompleksitas waktu yang cepat dan kompleksitas ruang yang sedikit memakan memori. Namun, dalam praktikanya, ada trade-off antara kompleksitas waktu dan kompleksitas ruang, dan seringkali terdapat keterkaitan antara keduanya.

Misalnya, algoritma dengan kompleksitas waktu yang sangat cepat mungkin memerlukan penggunaan memori yang lebih besar untuk menyimpan data yang diperlukan selama eksekusi. Sebaliknya, algoritma dengan kompleksitas ruang yang sangat efisien mungkin membutuhkan lebih banyak waktu untuk menyelesaikan tugasnya, karena mungkin perlu melakukan lebih banyak operasi untuk mengompresi atau mengoptimalkan penggunaan memori.

Sebagai seorang pengembang atau perancang algoritma, tujuannya adalah untuk mencoba mengoptimalkan kedua aspek tersebut sebaik mungkin, agar algoritma yang dikembangkan berkinerja baik secara keseluruhan.

### 1.4. Mengimplementasikan Time dan Space Complexity

**Big-O notation** adalah metode yang digunakan untuk memperkirakan kompleksitas waktu (time complexity) dan kompleksitas ruang (space complexity) terburuk dari sebuah algoritma. Sehingga dapat menumbuhkan kesadaran kita untuk mencari alternatif yang lebih baik sebelum data semakin besar dan berdampak kepada performa aplikasi yang kita buat.

Metode Big-O notation diperlukan karena ada banyak faktor yang mempengaruhi berapa lama jalannya sebuah kode. Faktor itu seperti jumlah data, koneksi, jumlah memori, kecepatan prosesor, dll.

**Beberapa contoh Big-O Time complexity**

1. **O(1) - Constant Time Complexity:**

   **_pengertian:_** algoritma membutuhkan waktu yang tetap untuk menyelesaikan tugas, tidak peduli seberapa besar input size nya. Algoritma dengan kompleksitas waktu Constant sangat efisien.
   **_case:_** cocok untuk kasus-kasus di mana input size tidak berpengaruh pada waktu eksekusi algoritma.
   **_contoh:_** mengakses elemen dalam array menggunakan indeks, pengoperasian matematika sederhana, atau operasi yang melibatkan jumlah data tetap.

2. **O(log n) - Logarithmic Time Complexity:**

   **_pengertian:_** algoritma membutuhkan waktu yang meningkat secara perlahan seiring dengan pertambahan input size. Algoritma dengan kompleksitas waktu logaritmik juga efisien, terutama untuk data yang besar.
   **_case:_** umumnya digunakan dalam kasus-kasus di mana data diurutkan atau dibagi setengahnya secara berulang.
   **_contoh:_** biner search dalam daftar terurut atau pembagian dan conquering dalam algoritma seperti **_merge sort_** atau **_binary search tree_**.

3. **O(n) - Linear Time Complexity:**

   **_pengertian:_** algoritma membutuhkan waktu yang sebanding dengan input size. Algoritma dengan kompleksitas waktu linier efisien untuk jumlah data yang relatif kecil.
   **_case:_** jika harus membaca setiap item dalam list atau jika melihat loop dalam algoritma.
   **_contoh:_** iterasi melalui array untuk mencari elemen tertentu atau melakukan operasi sederhana pada setiap elemen.

4. **O(n log n) - Loglinear Time Complexity:**

   **_pengertian:_** waktu eksekusi algoritma bertumbuh sebanding secara linear dengan input size, tetapi juga dipengaruhi oleh algoritma dari input size tersebut. Algoritma dengan kompleksitas waktu Loglinear umumnya efisien untuk jumlah data yang besar.
   **_case:_** sangat efisien digunakan dalam kasus-kasus pengurutan atau pencarian data dalam skala besar dan kompleks.
   **_contoh:_** algoritma pengurutan seperti Merge Sort dan Quick Sort.

5. **O(n^2) - Quadratic Time Complexity:**

   **_pengertian:_** algoritma membutuhkan waktu yang sebanding dengan kuadrat / pangkat 2 dari input size. Algoritma dengan kompleksitas waktu Quadratic biasanya tidak efisien untuk jumlah data yang besar.
   **_case:_** Meskipun mereka dapat digunakan untuk data kecil, perlu dihindari dalam kasus-kasus dengan jumlah data yang besar karena waktu eksekusi yang lambat.
   **_contoh:_** bubble sort, selection sort atau algoritma yang melibatkan nested loop..

6. **O(n^3) - Cubic Time Complexity:**

   **_pengertian:_** algoritma membutuhkan waktu yang sebanding dengan cubik / pangkat 3 dari input size. Mereka sering terjadi dalam algoritma yang melibatkan nested loop. Algoritma dengan kompleksitas waktu Cubic seringkali tidak efisien untuk jumlah data yang besar.
   **_case:_** Waktu eksekusinya tumbuh secara kuadratik dengan ukuran masukan.
   **_contoh:_** algoritma yang melibatkan 3 nested loop.

7. **O(2^n) - Eksponensial Time Complexity:**

   **_pengertian:_** algoritma dengan waktu eksekusinya tumbuh secara eksponensial dengan ukuran masukan. Algoritma dengan kompleksitas waktu Eksponensial sangat tidak efisien, terutama untuk jumlah data yang besar.
   **_case:_** algoritma ini perlu dihindari dalam kasus-kasus dengan jumlah data yang signifikan.
   **_contoh:_** algoritma brute force atau rekursi tak terbatas.

**Beberapa contoh Space complexity:**

1. **O(1) - Constant Space Complexity:**

   **_pengertian:_** algoritma akan menggunakan jumlah memori yang tetap, tidak bergantung pada input size. Ini berarti algoritma ini mengalokasikan jumlah memori yang konstan untuk menjalankan tugasnya.
   **_contoh:_** operasi aritmetika sederhana, pengambilan elemen dari array dengan indeks yang diketahui atau sorting algoritma dalam array.

2. **O(n) - Linear Space Complexity:**

   **_pengertian:_** algoritma akan menggunakan jumlah memori yang sebanding dengan input size, atau ikut bertambah seiring bertambahnya input size.
   **_penggunaan:_** algoritma yang memerlukan penyimpanan data linier seperti traversal atau pemrosesan elemen dalam suatu struktur data seperti array atau linked list.

3. **O(n^2) - Quadratic Space Complexity:**

   **_pengertian:_** algoritma akan menggunakan jumlah memori yang sebanding dengan kuadrat dari input size. Algoritma ini seringkali terlihat pada nested loop atau saat menggunakan matriks dua dimensi.
   **_contoh:_** algoritma bubble sort yang membandingkan setiap elemen dengan setiap elemen lainnya.
   **_penggunaan:_** biasanya digunakan dalam algoritma pemrosesan matriks, permutasi, atau kombinasi.

4. **O(log n) - Logarithmic Space Complexity:**

   **_pengertian:_** algoritma akan menggunakan jumlah memori yang bertumbuh tetapi tidak pada jumlah yang sama dengan input size. Algoritma ini seringkali terlihat pada algoritma divide and conquer seperti Binary Search atau Binary Tree.
   **_penggunaan:_** saat memproses masukan yang terurut atau terstruktur secara terbagi-bagi.

5. **O(n log n) - Loglinear Space Complexity:**

   **_pengertian:_** algoritma akan menggunakan jumlah memori tambahan yang bertumbuh secara linier terhadap ukuran masukan (n), namun juga dipengaruhi oleh logaritma dari ukuran masukan tersebut (log n).
   **_contoh:_** Merge Sort dan Quick Sort.

Jadi, meskipun ada keterkaitan antara kompleksitas waktu dan kompleksitas ruang, keduanya adalah konsep yang berbeda. Sebuah algoritma dapat memiliki kompleksitas waktu yang baik tetapi kompleksitas ruang yang buruk, atau sebaliknya.

### 1.5. Teknik desain algoritma

Algorithm design techniques adalah pendekatan umum untuk menerapkan algoritma.

Beberapa teknik design algoritma yang populer digunakan:

1. **Bruce force** - merupakan teknik sederhana dan lengkap yang mengevaluasi setiap kemungkinan hasil untuk menemukan solusi terbaik. Contohnya **_Linear Search algorithm_**.
2. **Greedy** - pendekatan yang memilih opsi terbaik saat ini tanpa pertimbangan untuk masa yang akan datang. Contohnya **_Dijkstra's algorithm_**, **_Prim's algorithm_** dan **_Kruskal's algorithm_** yang semuanya diterapkan pada struktur data graf.
3. **Divide and Conquer** - teknik yang membagi masalah menjadi sub-masalah yang lebih kecil. Setiap sub-masalah kemudian diselesaikan dan solusi parsial digabungkan kembali untuk menentukan solusi keseluruhan. Contohnya **_Binary Search algorithm_**, **_Quick Sort algorithm_**, **_Merge Sort algorithm_** dan **_Tower of Hanoi_**.
4. **Dynamic Programming** - mirip seperti Divide and Conquer, teknik yang membagi masalah menjadi sub-masalah yang lebih kecil. Namun perbedaannya membagi masalah menjadi submasalah yang lebih kecil tetapi saling tumpang tindih, menyimpan hasilnya dan menggunakannya kembali untuk sub-masalah yang sama. Ini disebut memoization dan merupakan teknik pengoptimalan yang meningkatkan time complexity dari algoritma kita. Contohnya **_Fibonacci numbers_** dan **_Climbing Staircase_**.
5. **Backtracking** - mirip seperti brute force, yakni membuat semua solusi yang memungkinkan tetapi akan diperiksa apakah solusi memenuhi semua kendala yang diberikan dan hanya setelah itu kita melanjutkan dengan menghasilkan solusi-solusi berikutnya. Jika kendala tidak terpenuhi, maka mundur dan pergi ke jalur yang berbeda untuk menemukan solusi. Contohnya **_N-Queens problem_**.

## 2. ~ DATA STRUCTURES :

Struktur data adalah cara kita menyimpan, mengorganisir, dan mengelola data dalam program kita agar ketika dibutuhkan dapat diakses dengan cara yang tepat dan efisien. Data Struktur membantu menyelesaikan persoalan dengan cara yang lebih efisien dalam hal **time** dan **memory**.

Mempelajari data struktur juga membantu mendapatkan pemahaman yang lebih mendalam tentang hal-hal yang sudah diketahui sebelumnya. Contoh diantaranya:

- DOM: menggunakan struktur data Tree.
- Tombol maju dan mundur browser: menggunkan struktur data Stack.
- OS: menggunakan struktur data Queue.

### 2.1. Built-in Data Structure di JavaScript:

1.  **Array**

    - **_karakteristik_**:

      Array adalah struktur data linear yang dapat menyimpan kumpulan value yang disimpan secara berurutan dalam memori. Array dapat berisi campuran tipe data yang berbeda. Elemen-elemen dalam array diakses menggunakan indeks. Index pertama dimulai dari 0 bukan 1. Array adalah iterables, mereka dapat digunakan dengan for-of loop.

    - **_penggunaan yang tepat_**:

      berguna saat kita harus menyimpan nilai individual dan menambah/menghapus nilai dari akhir struktur data.

    - **_kelemahan_**:

      kurang efektif untuk menambah/menghapus elemen dalam data yang besar karena array mengakses elemen secara berurutan. Jadi akan menjadi sulit dan memakan waktu yang lebih lama jika terdapat banyak elemen terlebih lagi jika perubahan dilakukan di tengah atau di akhir array.

    - **_mengatasi kelemahan_**:

      beberapa bahasa pemrograman menyediakan struktur data dinamis, seperti linked list atau dynamic array.

    - **_big-O Time Complexity dari Array_**:

      insertion / removal element dari akhir array => O(1) - Constant

      insertion / removal element dari awal array => O(n) - Linear

      searching => O(n) - Linear

      access => O(1) - Constant

    - **_method array dengan Time Complexity yang umum terjadi_**:

      `push()` / `pop()` = O(1) - Constant.

      `shift()` / `unshift()` / `concat()` / `slice()` / `splice()` = O(n) - Linear.

      `forEach()` / `map()` / `filter()` / `reduce()` = O(n) - Linear.

2.  **Object**

    - **_karakteristik_**:

      Object adalah struktur data berupa pasangan kunci-nilai (key-value) yang tidak diurutkan. Key nya harus berupa tipe data String atau Simbol, sedangkan valuenya dapat berupa tipe data apapun. Setiap key harus unik dalam object, tidak bisa memiliki key dengan nama yang sama. Untuk mengambil nilai, dapat menggunakan key yang sesuai dengan value yang diinginkan. Object bukan sebuah iterable, tidak bisa menggunakannya dengan for-of loop.

    - **_penggunaan yang tepat_**:

      digunakan saat pencarian berdasarkan kunci, seperti dalam basis data, pemetaan unik antara kunci dan nilai atau query search.

    - **_big-O Time Complexity dari Object_**:

      insertion => O(1) - Constant

      removal => O(1) - Constant

      searching => O(n) - Linear

      access => O(1) - Constant
      `Object.keys()`, `Object.values()`, `Object.entries()`, akan memiliki time complexity O(n) - Linear.

3.  **Set**

    - **_karakteristik_**:

      Set adalah struktur data yang dapat menampung kumpulan value dan harus unik (tidak sama satu dengan yang lain). Set dapat berisi campuran tipe data yang berbeda. Set adalah dynamically sized (tidak perlu mendeklarasikan ukuran Set sebelum mendeklarasikannya). Set tidak mempertahankan urutan penyisipan yang dilakukan, misalnya elemen yang dimasukkan terlebih dahulu dalam Set bukan berarti itu akan menjadi elemen pertama di Set. Set merupakan iterable, bisa digunakan dengan for-of loop.

    - **_Set vs Array_**:

      keduannya dapat digunakan jika hanya bermain dengan daftar nilai sederhana dan hanya memiliki nilai tanpa deskripsi apa pun.

      array dapat berisi nilai duplicate sedangkan Set tidak bisa.

      urutan penyisipan dipertahankan dalam array tetapi tidak pada kasus Set.

      searching dan deleting elemen pada Set lebih cepat jika dibandingkan dengan Array.

    - **_contoh code_**:

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

    - **_method Set dengan big-O Time Complexity yang umum terjadi_**:

      `add(value)` / `delete(value)` / `has(value)` / `clear()` / `size` atau `length` = O(1) - Constant.

      `values()` atau `keys()` = O(n) - Linear.

      `forEach()` = O(n) - Linear.

4.  **Map**

    - **_karakteristik_**:

      Map adalah struktur data yang digunakan untuk menyimpan pasangan key-value. Key dan value bisa berupa tipe data apapun. Untuk mengambil value dapat menggunakan key yang sesuai. Map merupakan iterable, dapat digunakan dengan for-of loop.

    - **_Map vs Object_**:

      key dalam Object harus berupa string atau simbol, sedangkan Map bisa menggunakan tipe data apapun.

      Map mempertahankan urutan elemen sesuai dengan urutan penambahannya, sementara Object tidak menjamin urutan tertentu.

      Object memiliki property dan mungkin berisi beberapa default keys yang mungkin bisa bertabrakan dengan key kita sendiri jika tidak berhati-hati. Map disisi lain tidak berisi default key appaun.

      Object bukan merupakan iterable, sedangkan Map merupakan iterable.

      jumlah item dalam Object harus ditentukan secara manual, sedangkan itu sudah tersedia dengan property `size`pada Map.

      selain menyimpan data, kita dapat melampirkan fungsionalitas ke dalam Object sedangkan Map hanya dibatasi untuk menyinpan data.

    - **_contoh code_**:

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

    - **_method Map dengan big-O Time Complexity yang umum terjadi_**:

      `set(key, value)` / `get(key)` / `has(key)` / `delete(key)` / `clear()` / `size` atau `Map.size` = O(1) - Constant.

      `values()` / `keys()` / `entries()` = O(n) - Linear.

      `forEach()` = O(n) - Linear.

### 2.2. Custom Data Structure di JavaScript:

1.  **Stack**

    - **_karakteristik_**:

      stack adalah struktur data linear yang berupa kumpulan elemen berurutan dalam bentuk list. Menambah atau menghapus elemen menggunakan prinsip LIFO (Last-In-First-Out), yang berarti elemen terakhir yang dimasukkan ke dalam stack akan menjadi elemen pertama yang dihapus. Stack adala tipe data abstract, dimana Stack hanyalah list dan apa yang membuatnya menjadi Stack adalah bagaimana perilakunya. Stack mendukung dua operasi utama, `push()` dan `pop()`.

    - **_analogi_**:

      ada tumpukan kertas di meja. Kita hanya dapat menambahkan lebih banyak kertas ke tumpukan dengan menempatkannya di atas yang lain. Ketika ingin mengeluarkan kertas dari tumpukan harus mengambil kertas dari yang teratas terlebih dahulu.

    - **_kelemahan_**:

      hanya dari elemen teratas yang dapat diakses dan dihapus.

    - **_contoh kegunaan_**:

      biasanya Stack bagus ketika harus melacak kembali steps sebelumnya. Contoh: pelacakan riwayat browser, operasi undo ketika mengetik, Call Stack di javascript runtime atau mengelola pemanggilan fungsi.

    - **_implementasi Stack di JavaScript_**:

      [Code example »»](./data-structures/stack.js)

      `push()` => menambahkan elemen ke bagian atas Stack.

      `pop()` => menghapus elemen dari bagian paling tinggi di Stack dan mengembalikan elemen tersebut.

      `peek()` => mendapatkan nilai elemen teratas tanpa menghapusnya.

      `isEmpty()` => mengecek jika Stack kosong.

      `size()` => untuk mendapatkan jumlah elemen dalam Stack.

      `print()` => untuk memvisualisasikan elemen dalam Stack.

      `clear()` => untuk mengosongkan Stack.

    - **_big-O dari Stack method_**:

      insertion => O(1) - Constant

      removal => O(1) - Constant

    - **_alasan mengapa struktur data stack khusus lebih disarankan daripada menggunakan struktur data array yang memiliki metode serupa_**:

      Fokus pada fungsionalitas => struktur data Stack dirancang khusus untuk operasi tumpukan, memastikan bahwa operasi yang relevan dengan konsep tumpukan dilakukan dengan jelas.

      Kode yang lebih bersih dan terbaca => penggunaan struktur data Stack khusus membuat niat dan tujuan kode lebih jelas, menghindari kebingungan dan kesalahan interpretasi saat membaca dan memodifikasi kode di masa depan.

      Penggunaan memori yang efisien => struktur data Stack khusus, seperti Stack yang diimplementasikan menggunakan linked list, mengalokasikan memori secara dinamis, menghindari alokasi memori berlebihan dan mengoptimalkan penggunaan memori.

2.  **Queue**

    linear queue dan circular queue dapat digunakan dalam berbagai aplikasi yang memerlukan pengaturan dan pengelolaan data dalam urutan linier dengan prinsip FIFO (First-In-First-Out).

    intinya adalah circular queue memungkinkan penggunaan ruang penyimpanan yang lebih efisien karena dapat mengisi kembali ruang kosong yang ada di belakang elemen terakhir yang telah dihapus. Namun, dalam hal alokasi memori dasar, baik linear queue maupun circular queue membutuhkan jumlah memori yang sama untuk menyimpan elemen-elemen yang sama.

    - [ ] **Linear Queue**

      - **_karakteristik_**:

        linear queue adalah struktur data queue yang memiliki batas awal dan batas akhir yang tetap. Ketika elemen-elemen ditambahkan `enqueue` ke linear queue, mereka ditempatkan di belakang elemen terakhir dan batas akhir bergerak ke elemen baru tersebut. Ketika elemen-elemen dihapus `dequeue` dari linear queue, elemen pertama dihapus dan batas awal bergerak ke elemen berikutnya.

      - **_analogi_**:

        saat orang-orang yang mengantri membeli makanan. Logikanya disini adalah orang yang berada pada antrean pertama, itulah yang akan dilayani terlebih dahulu. Jika sampai di sana lebih dulu, akan menjadi yang pertama keluar (FIFO).

      - **_kelemahan_**:

        Hanya elemen pertama yang dapat diakses dan dihapus.

      - **_penggunaan yang tepat_**:

        saat membutuhkan elemen-elemen untuk disimpan dan diakses dalam urutan linier dan tidak perlu memanfaatkan ruang kosong yang dihasilkan oleh penghapusan elemen.

        jika hanya membutuhkan implementasi yang sederhana dan tidak memerlukan manajemen index batas yang kompleks.

        jika alokasi memori tidak menjadi masalah utama dan tidak terbatas pada ruang penyimpanan.

      - **_contoh kegunaan_**:

        biasanya sangat bagus ketika harus memproses secara teratur. Misalnya, printer yang mencetak beberapa document, CPU ketika menjadwalkan tugas atau yang paling penting Callback Queue pada JavaScript runtime.

      - **_implementasi linear queue di JavaScript_**:

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

      - **_karakteristik_**:

        circular queue adalah variasi dari struktur data queue yang memperlakukan array atau buffer penyimpanan sebagai cincin atau siklus. Ini berarti batas awal dan batas akhir tidak tetap pada indeks awal dan akhir array, melainkan dapat melintasi batas array dan kembali ke awal. Ketika elemen-elemen ditambahkan ke circular queue, batas akhir bergerak maju dan jika mencapai batas akhir array, ia melompat ke indeks awal. Demikian pula, ketika elemen-elemen dihapus, batas awal bergerak maju dan jika mencapai batas akhir array, ia melompat kembali ke indeks awal. Data struktur Circular Queue didukung 2 operasi utama yaitu **enqueue** (menambahkan elemen ke belakang/ekor dari koleksi) dan **dequeue** (menghapus elemen dari depan/kepala koleksi)

      - **_analogi_**:

        kita dapat membayangkan Circular Queue sebagai lintasan balapan berbentuk lingkaran. Mobil-mobil balap (elemen-elemen dalam antrian) bergerak di sepanjang lintasan dan ketika mobil terakhir mencapai akhir lintasan, mobil berikutnya akan kembali ke awal lintasan tanpa memerlukan perubahan posisi fisik.

      - **_kelemahan_**:

        kapasitas terbatas pada jumlah elemen yang dapat disimpan dalam antrian dan kompleksitas implementasi yang rumit karena memerlukan manipulasi index untuk mengatur penambahan dan penghapusan elemen.

      - **_penggunaan yang tepat_**:

        jika efisiensi memori sangat penting, terutama jika memiliki sumber daya yang terbatas atau membatasi alokasi memori. karena circular queue dapat memungkinkan penggunaan memori yang lebih efisien dengan memanfaatkan kembali ruang kosong yang dihasilkan oleh penghapusan elemen.

        jika perlu mengakses elemen secara berulang dengan perputaran yang cepat tanpa mempengaruhi kinerja keseluruhan. Karena circular queue dapat memungkinkan akses yang lebih efisien dan menghindari pergeseran data yang tidak perlu.

        jika membutuhkan implementasi buffer atau antrian berputar yang memproses data secara kontinu, circular queue dapat menjadi solusi yang cocok untuk memperlakukan array sebagai cincin.

      - **_contoh penggunaan_**:

        buffer audio: untuk menyimpan sampel audio dengan efisien dan penggantian yang mudah tanpa realokasi memori.

        sistem komunikasi: sebagai buffer pesan untuk menyimpan pesan masuk sebelum diproses, dengan penambahan pesan baru di akhir antrian dan penghapusan pesan tertua dari awal antrian ketika penuh.

        algoritma penjadwalan: untuk mengalokasikan sumber daya sesuai dengan urutan dan prioritas tugas-tugas.

      - **_implementasi circular queue di JavaScript_**:

        [Code example »»](./data-structures/queue-circular.js)

        `enqueue(elemen)` => menambahkan elemen ke belakang/ekor Queue

        `dequeue()` => menghapus elemen dari depan/kepala Queue

        `isFull()` => mengecek apakah Queue penuh

        `isEmpty()` => mengecek apakah Queue kosong

        `peek()` => mendapatkan elemen terdepan dari Queue tanpa menghapusnya

        `print()` => memvisualisasikan elemen pada Queue

      - **_big-O dari queue method_**:

        enqueue => O(1) - Constant

        dequeue => O(1) - Constant

3.  **Linked List**

    linked list adalah struktur data linier yang terdiri dari simpul-simpul (node) yang saling terhubung secara dinamis menggunakan referensi atau pointer.

    struktur data linked list mendukung tiga operasi utama yaitu **_insertion_** (untuk menambahkan elemen dari awal atau akhir atau juga pada index yang diberikan dalam list), **_deletion_** (untuk menghapus elemen berdasarkan index atau nilai yang ditentukan) dan **_search_** (untuk menemukan elemen berdasarkan nilainya).

    ada dua jenis linked list yang umum yaitu **singly linked list** (linked list tunggal) di mana setiap simpul hanya memiliki pointer ke simpul berikutnya, dan **doubly linked list** (linked list ganda) di mana setiap simpul memiliki pointer ke simpul berikutnya dan sebelumnya.

    - [x] **Singly Linked List**

      - **_karakteristik_**:

        singly linked list adalah struktur data linear di mana setiap elemen (node) terhubung ke node berikutnya dalam satu arah. Setiap node memiliki dua komponen: `element` yang menyimpan data dan pointer `next` yang menunjuk ke node berikutnya.

      - **_kelebihan_**:

        penambahan dan penghapusan elemen dari depan (head) maupun dari belakang (tail) dilakukan dengan sederhana dan efisien, karena hanya perlu memperbarui pointer head dan tail.

        memiliki penggunaan memori yang lebih efisien dibandingkan dengan doubly linked list karena tidak memerlukan pointer ke node sebelumnya.

      - **_kelemahan_**:

        akses lambat: mencari atau mengakses elemen secara acak (random) dalam linked list tidak efisien, karena perlu melintasi linked list dari awal hingga mencapai elemen yang ditentukan.

        ruang overhead: membutuhkan lebih banyak ruang penyimpanan dibandingkan dengan array, karena setiap node memiliki overhead tambahan untuk menyimpan pointer.

        tidak dapat melakukan iterasi mundur secara langsung.

      - **_penggunaan yang tepat_**:

        jika perlu melakukan operasi penambahan atau penghapusan elemen secara efisien di awal atau akhir linked list.

        jika pencarian elemen jarang dilakukan dalam struktur data.

      - **_contoh penggunaan_**:

        ketika perlu melakukan penambahan atau penghapusan elemen dari depan atau belakang list secara efisien, seperti dalam implementasi stack atau queue.

        implementasi algoritma pemrosesan berkas berurutan.

      - **_implementasi singly linked list di JavaScript_**:

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

      - **_big-O dari singly linked list method_**:

        `prepend(value)` => O(1) - Constant

        `append(value)` => O(1) - Constant

        `insert(value, position)` => jika menyisipkan elemen di awal maka O(1) - Constant, namun selebihnya O(n) - Linear

        `removeFrom(position)` => O(n) - Linear

        `removeValue(value)` => O(n) - Linear

        `removeFromFront()` => O(1) - Constant

        `removeFromEnd()` => O(n) - Linear

        `search(value)` => O(n) - Linear

        `reverse()` => O(n) - Linear

      - **_implementasi Stack data structure menggunakan singly linkede list di JavaScript_**:

        Stack data structure dapat diimplementasikan dengan linked list. berikut beberapa faktor atau pertimbangan yang dapat dijadikan acukan kapan harus menggunakan Stack data structure dengan atau tanpa linked list:

        Stack tanpa Linked List:

        - cocok jika kebutuhan operasi push (penambahan) dan pop (penghapusan) pada elemen dalam urutan terbalik.
        - tidak dinamis, elemen tetap, dan jumlah elemen kecil.
        - alokasi memori tidak menjadi masalah utama.

        Stack dengan Linked List:

        - cocok jika membutuhkan struktur data stack yang dinamis dan dapat menyesuaikan ukuran dan jumlah elemen.
        - efisien dalam penambahan dan penghapusan elemen tanpa memerlukan pergeseran.
        - cocok untuk mengelola jumlah elemen yang berubah secara dinamis.

        [Code example »»](./data-structures/linked-list-stack.js)

        `push()` => menambahkan elemen atau node diatas node teratas saat ini.

        `pop()` => menghapus elemen atau node dari stack teratas dan mengembalikan elemen tersebut.

        `peek()` => mengembalikan elemen teratas pada stack tanpa menghapusnya.

      - **_implementasi Queue data structure menggunakan singly linkede list di JavaScript_**:

        Queue data structure dapat diimplementasikan dengan linked list. berikut beberapa faktor atau pertimbangan yang dapat dijadikan acukan kapan harus menggunakan Queue data structure dengan atau tanpa linked list:

        Queue tanpa Linked List:

        - cocok jika kebutuhan operasi enqueue (penambahan) dan dequeue (penghapusan) pada elemen dalam urutan tetap.
        - tidak dinamis, elemen tetap, dan jumlah elemen kecil.
        - alokasi memori tidak menjadi masalah utama.

        Queue dengan Linked List:

        - cocok jika membutuhkan struktur data queue yang dinamis dan dapat menyesuaikan ukuran dan jumlah elemen.
        - efisien dalam penambahan dan penghapusan elemen di ujung-ujung queue tanpa pergeseran.
        - cocok untuk mengelola jumlah elemen yang berubah secara dinamis.

        [Code example »»](./data-structures/linked-list-queue.js)

        `enqueue()` => menambahkan elemen ke queue di belakang node terakhir saat ini.

        `dequeue()` => menghapus elemen terdepan queue dan mengembalikan elemen tersebut.

        `peek()` => mengembalikan elemen terdepan pada queue tanpa menghapusnya.

    - [x] **Doubly Linked List**

      - **_karakteristik_**:

        doubly linked list adalah struktur data linear di mana setiap elemen (node) terhubung ke node sebelumnya dan node berikutnya dalam satu arah. Setiap node memiliki dua komponen: `element` yang menyimpan data, pointer `prev` yang merujuk ke node sebelumnya dan pointer `next` yang menunjuk ke node berikutnya.

      - **_kelebihan_**:

        mendukung pencarian maju dan mundur secara efisien. Iterasi maju dan mundur dapat dilakukan dengan mudah.

        memungkinkan operasi penambahan atau penghapusan elemen di awal, akhir, dan tengah linked list dengan efisiensi yang lebih baik dibandingkan dengan singly linked list, meskipun untuk penghapusan elemen di tengah linked list keduanya mempunyai kompleksitas linear O(n).

      - **_kelemahan_**:

        memerlukan penggunaan memori lebih banyak dibandingkan dengan singly linked list karena setiap node menyimpan pointer ke node sebelumnya dan node berikutnya.

      - **_penggunaan yang tepat_**:

        jika perlu melakukan operasi pencarian maju dan mundur yang efisien.

        jika operasi penambahan atau penghapusan elemen di awal, akhir, dan tengah linked list perlu dilakukan dengan efisiensi yang lebih baik dibandingkan dengan singly linked list.

      - **_contoh penggunaan_**:

        implementasi cache dengan kemampuan untuk menghapus entri tertentu dengan cepat.

        implementasi history management pada web browser.

      - **_implementasi doubly linked list di JavaScript_**:

        [Code example »»](./data-structures/linked-list-double.js)

      - **_big-O dari doubly linked list method_**:

        `prepend(value)` => O(1) - Constant

        `append(value)` => O(1) - Constant

        `removeFromFront()` => O(1) - Constant

        `removeFromEnd()` => O(1) - Constant
