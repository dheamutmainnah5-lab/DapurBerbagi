
let jenisAkun = "";
let namaUser = "";

// Data makanan awal
let dataMakanan = [
    {
        nama: "Nasi Kotak",
        jumlah: 10,
        lokasi: "Makassar"
    },
    {
        nama: "Roti dan Susu",
        jumlah: 5,
        lokasi: "Panakkukang"
    }
];

// Fungsi menampilkan halaman
function tampilkan(id) {
    document.querySelectorAll(".halaman").forEach(halaman => {
        halaman.hidden = true;
    });

    document.getElementById(id).hidden = false;
}

// Tombol mulai
function bukaPilihan() {
    tampilkan("pilihan");
}

// Memilih jenis akun
function pilihAkun(jenis) {
    jenisAkun = jenis;

    document.getElementById("jenisAkun").innerText =
        "Anda masuk sebagai " + jenis;

    tampilkan("login");
}

// Proses login
function login() {
    namaUser = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();

    if (namaUser === "" || email === "") {
        alert("Nama dan email harus diisi!");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Masukkan alamat email yang valid!");
        return;
    }

    document.getElementById("salam").innerText =
        "Selamat Datang, " + namaUser + "!";

    document.getElementById("infoAkun").innerText =
        "Anda login sebagai " + jenisAkun;

    document.getElementById("formDonatur").hidden =
        jenisAkun !== "Donatur";

    tampilkan("dashboard");
    tampilkanMakanan();
}

// Menambahkan makanan
function tambahMakanan() {
    let nama = document.getElementById("makanan").value.trim();
    let jumlah = Number(document.getElementById("jumlah").value);
    let lokasi = document.getElementById("lokasi").value.trim();

    if (nama === "" || jumlah <= 0 ||
        !Number.isInteger(jumlah) || lokasi === "") {
        alert("Lengkapi data makanan dengan benar!");
        return;
    }

    dataMakanan.push({
        nama: nama,
        jumlah: jumlah,
        lokasi: lokasi
    });

    alert("Makanan berhasil dibagikan!");

    document.getElementById("makanan").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("lokasi").value = "";

    tampilkanMakanan();
}

// Menampilkan daftar makanan
function tampilkanMakanan() {
    let daftar = document.getElementById("daftarMakanan");

    daftar.innerHTML = "";

    dataMakanan.forEach(item => {
        let kartu = document.createElement("div");
        kartu.className = "makanan-card";

        let judul = document.createElement("h3");
        judul.textContent = item.nama;

        let porsi = document.createElement("p");
        porsi.textContent = "Jumlah: " + item.jumlah + " porsi";

        let tempat = document.createElement("p");
        tempat.textContent = "Lokasi: " + item.lokasi;

        kartu.append(judul, porsi, tempat);
        daftar.appendChild(kartu);
    });
}

// Keluar akun
function keluar() {
    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";

    tampilkan("beranda");
}
