// // membuat sebuah function pertambahan
// function pertambahan() {
//     let tambah1 = parseInt(prompt("Masukkan Angka Pertama : "));
//     let tambah2 = parseInt(prompt("Masukkan Angka Kedua : "));
//     let hasil = tambah1 + tambah2;

//     console.info(`Hasil Pertambahan yaitu : ` + hasil);
// }

// melakukan perulangan
function printNames() {
    let nama = prompt("Masukkan Nama Anda : ");
    let printNama = prompt("Berapa kali anda mau mencetak nama anda?");

    for (let index = 0; index < printNama; index++) {
        console.info(`Nama Anda : ` + nama);
    }
}
