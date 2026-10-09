# Indo Jasa Website

Landing page Indo Jasa Website menggunakan HTML5, Bootstrap 5.3, CSS kustom, dan JavaScript modular.

## Struktur proyek

- `index.html`: struktur halaman dan komponen Bootstrap.
- `assets/css/style.css`: styling utama responsif.
- `assets/css/animations.css`: transisi, hover, dan gaya carousel.
- `assets/js/main.js`: menu navigasi, tahun footer, dan konfigurasi WhatsApp.
- `assets/js/carousel.js`: kontrol carousel hero, autoplay, dan interaksi manual.
- `assets/js/animations.js`: animasi masuk saat konten terlihat ketika scroll.
- `assets/images/hero/`: gambar hero carousel.
- `assets/images/services/`: gambar bagian layanan.
- `assets/images/portfolio/`: gambar contoh kategori usaha.
- `code.html`: ekspor Stitch asli, dipertahankan sebagai referensi.
- `DESIGN.md` dan `screen.png`: referensi desain dari Stitch.

## Menjalankan lokal

Jalankan server lokal dari folder proyek:

```powershell
python -m http.server 8000
```

Lalu buka http://localhost:8000. Bootstrap, Bootstrap Icons, dan Google Fonts masih dimuat dari CDN, jadi tampilan lengkap memerlukan internet. Foto yang dipakai halaman utama sekarang disimpan lokal di folder `assets/images/`.

## Fitur yang ditambahkan

- Hero carousel dengan tiga konsep usaha, tombol navigasi, indikator, dukungan sentuh, dan rotasi otomatis.
- Animasi reveal saat scroll dan hover halus pada kartu.
- Menghormati preferensi `prefers-reduced-motion` untuk mengurangi gerakan.
- Foto halaman disimpan di direktori proyek agar tidak bergantung pada URL gambar eksternal saat runtime.

## Konfigurasi sebelum publikasi

1. Buka `assets/js/main.js` dan isi `WHATSAPP_PHONE` dengan nomor WhatsApp bisnis dalam format internasional tanpa tanda plus, spasi, atau tanda hubung.
2. Pastikan harga, cakupan domain/hosting, waktu pengerjaan, dan semua klaim layanan sesuai penawaran yang benar-benar tersedia.
3. Gambar saat ini adalah gambar stok untuk konsep demo. Pastikan lisensi dan kebutuhan atribusi sesuai sebelum publikasi komersial, atau ganti dengan aset milik sendiri.
4. Buat halaman kebijakan privasi dan syarat ketentuan jika diperlukan sebelum menautkannya.
5. Uji tampilan, carousel, dan interaksi di browser desktop serta perangkat mobile sebelum deploy.

`index.html` menggunakan Bootstrap, bukan Tailwind CDN. File ekspor Stitch asli tidak diubah.
