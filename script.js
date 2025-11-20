// Data Neptu Hari & Pasaran
const neptuHari = [5, 4, 3, 7, 8, 6, 9];
const neptuPasaran = {
    "Legi": 5, "Pahing": 9, "Pon": 7, "Wage": 4, "Kliwon": 8
};

// Dapatkan pasaran dari tanggal (rumus siklus 5)
function getPasaran(date) {
    const ref = new Date("2020-01-01"); // patokan Wage
    const diff = Math.floor((date - ref) / (1000 * 60 * 60 * 24));
    const pasaranList = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"];
    return pasaranList[(diff % 5 + 5) % 5];
}

// Hitung neptu weton
function hitungNeptu(date) {
    const d = new Date(date);
    const hari = d.getDay(); 
    const pasaran = getPasaran(d);

    return {
        neptu: neptuHari[hari] + neptuPasaran[pasaran],
        hari: hari,
        pasaran: pasaran
    };
}

function hitungWeton() {
    const namaA = document.getElementById("namaA").value;
    const namaB = document.getElementById("namaB").value;
    const tglA = document.getElementById("tglA").value;
    const tglB = document.getElementById("tglB").value;

    if (!tglA || !tglB || !namaA || !namaB) {
        alert("Isi semua data dulu!");
        return;
    }

    // Hitung neptu kedua pasangan
    const wA = hitungNeptu(tglA);
    const wB = hitungNeptu(tglB);

    const total = wA.neptu + wB.neptu;

    let kecocokan = "";
    let solusi = "";
    let hariBaik = "";

    if (total <= 20) {
        kecocokan = "Kurang Cocok (Rentan konflik)";
        solusi = "Disarankan melakukan sedekah kecil, doa tolak bala, atau slametan sederhana untuk menetralkan energi buruk.";
        hariBaik = "Pilihan hari baik menikah: Jumat Legi, Rabu Kliwon.";
    } 
    else if (total <= 30) {
        kecocokan = "Cocok Sedang";
        solusi = "Bisa melanjutkan, namun disarankan memilih hari baik agar hubungan langgeng.";
        hariBaik = "Hari baik: Kamis Pahing, Sabtu Legi.";
    } 
    else {
        kecocokan = "Sangat Cocok!";
        solusi = "Tidak perlu ritual khusus. Energi perjodohan kuat.";
        hariBaik = "Hari baik: Semua hari, terutama Minggu Kliwon.";
    }

    // Tampilkan hasil
    document.getElementById("hasilCard").style.display = "block";
    document.getElementById("solusiCard").style.display = "block";

    document.getElementById("hasilText").innerHTML =
        `<b>${namaA}</b> & <b>${namaB}</b><br>
         Total Neptu: <b>${total}</b><br>
         Kecocokan: <b>${kecocokan}</b>`;

    document.getElementById("solusiText").innerHTML = `<b>Solusi:</b> ${solusi}`;
    document.getElementById("hariBaikText").innerHTML = `<b>Hari Baik:</b> ${hariBaik}`;
}
