# GENTLEMAN — Parfum Pria (Beast Parfume)

**Deskripsi singkat**

GENTLEMAN adalah laman statis produk parfum pria yang menampilkan koleksi produk, hero image carousel, testimoni, dan integrasi pemesanan melalui WhatsApp. Proyek ini dibuat tanpa dependensi eksternal — hanya HTML, CSS, dan JavaScript.

---

## Fitur utama

- Hero carousel otomatis yang berganti berdasarkan gambar dari `#products`.
- Carousel berhenti saat pengguna melakukan hover atau saat gambar mendapat fokus keyboard.
- Tombol *Beli* pada setiap produk membuka pesan WhatsApp dengan produk dan harga terisi.
- Panel kontak menyediakan pilihan produk dan tombol *Pesan via WhatsApp* yang mengarahkan ke nomor WA proyek.
- Smooth scroll untuk tombol hero yang menavigasi ke section terkait.
- Gambar produk menggunakan `loading="lazy"` untuk performa lebih baik.
- Aksesibilitas dasar: `aria-label`, fokus keyboard, dan perilaku pause/resume carousel.

## Berkas penting

- `index.html` — struktur halaman dan konten (hero, products, advantages, testimonials, contact, footer).
- `style.css` — seluruh gaya tampilan (layout, transisi, responsif).
- `script.js` — logika: carousel (`initHeroCarousel()`), tombol hero, tombol WhatsApp, dan panel kontak.
- `assets/img/` — gambar produk (contoh: `azure.png`, `valor.png`, `noir.png`, `imperial.png`).
- `assets/ikon/` — ikon (WhatsApp, sosial, dll.).

## Menjalankan secara lokal

1. Cara cepat: buka `index.html` langsung di browser.
2. Direkomendasikan: jalankan server lokal untuk menghindari pembatasan resource:
   - Dengan Python: `python -m http.server 8000` lalu buka `http://localhost:8000`.
   - Atau gunakan `http-server` (Node.js): `npx http-server`.

## Kustomisasi cepat

- Mengubah nomor WhatsApp: buka `script.js` dan ubah konstanta `WA_NUMBER` (format: kode negara + nomor; contoh `6281234567890`).
- Menambah/mengubah produk: edit section `#products` di `index.html`. Tambahkan `article.product-card` yang berisi `<img src="assets/img/nama.png">`, judul, harga, dan tombol `.wa-btn` dengan atribut `data-name` dan `data-price`.
- Mengubah interval carousel: ubah pemanggilan `initHeroCarousel({ interval: 3500 })` atau parameter default di `script.js`.
- Menambah tombol prev/next atau indikator: tambahkan elemen di HTML dan sesuaikan `script.js` (bisa saya bantu jika diperlukan).

## Troubleshooting singkat

- Jika carousel tidak berganti: pastikan ada setidaknya 2 gambar dalam `#products`.
- Jika pesan WhatsApp tidak terbuka: periksa `WA_NUMBER` dan koneksi internet.
- Jika gambar tidak muncul: pastikan path di `src` mengarah ke `assets/img/` dan nama file sesuai.

## Lisensi & kontribusi

Tidak ada lisensi khusus yang ditetapkan di berkas ini. Untuk kontribusi, silakan buka issue atau kirim pull request.
