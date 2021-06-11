/**
 * Langkah-Langkah
 *
 * 1. npm init --y
 * 2. npm install nodemon --save-dev (nodemon => package untuk menjalankan ulang server saat terjadi perubahan)
 * 3. npm install eslint --save-dev (eslint => membantu menulis kode js dengan konsisten)
 * 4. npm install @hapi/hapi
 * 5. Ubah kode server.js
 * 6. buka http://notesapp-v1.dicodingacademy.com/ => Change URL (localhost:5000)
 *
 */

/*
 * [Langkah Create]
 * 1. Tambahkan method post dan module.exports pada routes.js
 * 2. Buat array untuk menampung objek notes pada notes.js dan export
 * 3. Buat addNoteHandler pada handler.js dan export dengan object literals karena nantinya
 *    akan ada banyak nilai yang harus dieksport
 * 4. Tulis logika create untuk menyimpan data dari client ke array notes
 * 5. Gunakan request.payload untuk mengambil datanya.
 * 6. npm install nanoid
 * 7. Buat properti id engan nanoid dan properti createdAt denga Date()
 * 8. Masukkan nilai ke dalam array notes dengan push()
 * 9. Gunakan filter untuk melihat apakah newNotes sudah masuk ke dalam array
 * 10. Buat var isSuccess untuk mnentukan respon server.
 * 11. Ganti fungsi handler pada routes.js dengan addNoteHandler.
 * 12. Tambahkan server.route(routes) pada server.js
 * 13. Untuk menghindari origin-policy, tambahkan routes.cors
 *     di configurasi server.js agar cangkupan cors lebih luas
 */

/**
 * [Langkah Read]
 *
 * 1. Buat dua method get (path: /notes dan /notes/{id}) di routes.js
 * 2. Buat getAllNotesHandler pada handler.js, kembalikan respon dan nilai notes di dalamnya
 * 3. Buat getNoteByIdHandler untuk membuat handler agar bisa melihat detail data.
 * 4. Dapatkan nilai id dari request.param
 * 5. Dapatkan objek note dengan id tersebut dari objek notes. Gunakan filter
 * 6. Pastikan objek note tidak undefined, jika undefined kembalikan response fail
 * 7. Kembalikan data dari objek note secara spesifik berdasarkan id yanng digunakan pada path parameter.
 * 8. Jangan lupa export pada handler dan import pada routes.js
 */

/**
 * [Langkah Delete]
 *
 * 1. Buat method delete di routes.js
 * 2. Buat deleteNoteByHandler di handler.js
 * 3. Dapatkan nilai id dari request.param
 * 4. Dapatkan index dari objek catatan sesuai dengan id yang didapat
 * 5. Lakukan pengecekan nilai index menggunakan splice, pastikan tidak ada nilai -1
 * 6. Bila index = -1, maka berikan response gagal
 * 7. Export dan import
 *
 */

/**
 * Same-Origin Policy
 *
 * Tidak semua data bisa diambil dari origin yang berbeda.
 * Contohnya data JSON yang didapatkan melalui teknik XMLHTTPRequest atau fetch.
 * Jika website meminta sesuatu menggunakan teknik tersebut dari luar origin-nya, maka permintaan tersebut akan ditolak.
 * Itu disebabkan oleh kebijakan same-origin.
 *
 * Origin terdiri dari tiga hal: protokol, host, dan port number.
 * Origin dari aplikasi client kita adalah: http://notesapp-v1.dicodingacademy.com
 * Di mana protokolnya adalah http://, host-nya adalah notesapp-v1.dicodingacademy.com, dan port-nya adalah :80 (implisit).
 * Selama aplikasi client mengakses data dari origin yang sama, hal itu dapat dilakukan.
 * Namun bila ada salah satu saja yang berbeda contohnya port 8001, maka permintaan itu akan ditolak.
 *
 * Penyebab aplikasi gagal karena keduanya memiliki origin yang berbeda, yaitu port 5000 dan port 8001.
 * Solusinya, gunakan Cross-origin resource sharing (CORS).
 *
 *
 */
