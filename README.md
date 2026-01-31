# GENTLEMAN — Parfum Pria

Deskripsi singkat

GENTLEMAN adalah situs sederhana untuk menampilkan koleksi parfum pria. Pada versi ini, bagian hero menampilkan gambar botol parfum yang berubah secara otomatis untuk menampilkan produk dari bagian `#products`.

## Fitur utama

- Hero berganti otomatis (carousel) menampilkan gambar produk secara bergantian.
- Carousel berhenti saat pengguna mengarahkan kursor atau saat gambar mendapat fokus keyboard.
- Mudah dikustomisasi: menambah atau menghapus gambar pada `#products` akan otomatis mempengaruhi carousel.
- Tidak menggunakan dependensi eksternal—hanya HTML, CSS, dan JavaScript.

## Berkas penting

- `index.html` — struktur halaman.
- `style.css` — gaya halaman, termasuk transisi fade untuk gambar hero.
- `script.js` — logika carousel dan fungsi utilitas lain; `initHeroCarousel()` mengatur pergantian gambar dengan mekanisme retry dan fallback.
- `image/` — folder gambar produk.

## Cara menjalankan (lokal)

1. Buka `index.html` langsung di browser (Chrome, Firefox, Edge).

   Jika ingin menjalankan lewat server lokal:
   - Dengan Python: jalankan `python -m http.server 8000` lalu buka `http://localhost:8000`
   - Atau gunakan server lain seperti `http-server` dari Node.js

2. Setelah terbuka, gambar hero akan mulai berganti otomatis. Rotasi pertama dimulai singkat setelah halaman siap.

## Kustomisasi carousel

- Mengubah interval: buka `script.js` lalu ubah nilai pada pemanggilan `initHeroCarousel({ interval: 3500 })`—nilai dalam milidetik.
- Menambah produk: tambahkan elemen `article.product-card` dengan tag `<img src="image/nama.png">` di dalam section `#products`.
- Bila ingin kontrol tambahan (tombol prev/next atau indikator), saya bisa membantu menambahkannya.

## Troubleshooting

- Pastikan ada setidaknya dua gambar di `#products` agar carousel bisa berputar.
- Jika carousel tidak berjalan otomatis, coba buka melalui server lokal karena beberapa browser membatasi resource saat membuka file langsung.
- Jika masih bermasalah, sebutkan browser dan versinya agar saya bisa membantu lebih lanjut.

## Aksesibilitas dan perilaku

- Carousel berhenti saat hover atau saat gambar mendapat fokus keyboard untuk mendukung pengguna keyboard dan pembaca layar.
- Transisi menggunakan perubahan opacity sehingga pergantian gambar lebih halus.

## Lisensi dan kontribusi

Proyek ini tidak memiliki lisensi khusus pada berkas ini. Untuk kontribusi
silakan kirim pull request atau beri tahu perubahan yang diinginkan.