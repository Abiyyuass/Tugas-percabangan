# Latihan Percabangan & Perulangan

Program web sederhana untuk latihan percabangan (`if / else if / else`) dan perulangan (`for` dan `while`) menggunakan HTML, CSS, dan JavaScript.

## Struktur File
program-percabangan/
`index.html`   # Struktur halaman
`style.css`    # Tampilan
`script.js`    # Logika program

## Cara Menjalankan

1. Simpan ketiga file (`index.html`, `style.css`, `script.js`) dalam satu folder.
2. Buka `index.html` di browser (klik dua kali atau klik kanan lalu *Open with*).

Tidak perlu instalasi atau server tambahan.

## Fitur

### 1. Penilai Nilai (percabangan)

Masukkan nilai 0–100, lalu program menentukan grade dengan 5 kondisi:

| Rentang nilai | Grade |
|---------------|-------|
| 85 – 100      | A     |
| 70 – 84       | B     |
| 55 – 69       | C     |
| 40 – 54       | D     |
| 0 – 39        | E     |

### 2. Daftar Bilangan (perulangan `for`)

Masukkan angka N (1–100). Program menampilkan bilangan dari 1 sampai N dan memberi keterangan dengan 5 kondisi:

| Kondisi                 | Keterangan          |
|-------------------------|---------------------|
| Habis dibagi 15         | Kelipatan 3 dan 5   |
| Habis dibagi 5          | Kelipatan 5         |
| Habis dibagi 3          | Kelipatan 3         |
| Habis dibagi 2          | Genap               |
| Selain itu              | Ganjil              |

Urutan pengecekan penting: kondisi kelipatan 15 harus diperiksa lebih dulu agar tidak tertangkap oleh kondisi kelipatan 3 atau 5.

### 3. Jumlah Digit (perulangan `while`)

Masukkan bilangan bulat positif. Program memecah bilangan digit demi digit dan menjumlahkannya.

Contoh: `12345` → `1 + 2 + 3 + 4 + 5 = 15`

Cara kerjanya:

- `angka % 10` mengambil digit terakhir.
- `Math.floor(angka / 10)` membuang digit terakhir.
- Perulangan berhenti saat `angka` sudah bernilai 0.
