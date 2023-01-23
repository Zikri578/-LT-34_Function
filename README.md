# -LT-34_Function

Function di JavaScript adalah sebuah blok kode yang dapat digunakan secara berulang kali untuk menjalankan tugas tertentu. Function dapat menerima input (parameter) dan mengembalikan output (return value). Function dapat digunakan untuk mengorganisir kode Anda dan membuatnya lebih bersahabat bagi pemeliharaan. Sintaks dari function di JavaScript adalah sebagai berikut:

    function functionName(parameter1, parameter2, ...) {
        // code to be executed
    }

Di mana `"functionName"` adalah nama dari function yang didefinisikan, dan `"parameter1, parameter2, ..."` adalah parameter yang diterima oleh function. Setiap parameter di pisahkan oleh koma. Sebagai contoh:

    function greet(name) {
        console.log("Hello, " + name);
    }
    greet("John"); // Output: "Hello, John"

Dalam contoh di atas, kita mendefinisikan function `"greet"` yang menerima satu parameter, `"name"`. Kemudian function di panggil dengan memberikan parameter `"John"` yang akan mencetak `"Hello, John"` 

Selain itu, function dapat mengembalikan nilai dengan menggunakan kata kunci `"return"`.

    function add(a, b) {
        return a + b;
    }
    let result = add(1, 2); // result akan bernilai 3

Dalam contoh di atas, function `"add"` menerima dua parameter dan menggunakan kata kunci `"return"` untuk mengembalikan hasil penjumlahan dari kedua parameter tersebut. Kemudian hasil dari function disimpan dalam variabel `"result"` yang akan bernilai 3.

Function juga dapat digunakan sebagai sebuah object yang dapat di assign ke sebuah variabel, di pass sebagai parameter ke function lain, atau di return sebagai hasil dari function lain.

Secara keseluruhan, function adalah komponen penting dalam JavaScript yang digunakan untuk mengorganisir kode dan membuatnya lebih mudah untuk dikelola dan digunakan kembali. Function memungkinkan Anda untuk menulis kode yang dapat digunakan secara berulang kali dan membuat kode Anda lebih modular dan mudah dibaca.

