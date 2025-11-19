function hitungWeton(tanggalInput) {
const date = new Date(tanggalInput);

```
if (isNaN(date)) return null;

// --------------------------
// 1. Hitung Hari Jawa
// --------------------------
const dayIndex = date.getDay(); 

const hariList = [
    { nama: "Minggu", neptu: 5 },
    { nama: "Senin", neptu: 4 },
    { nama: "Selasa", neptu: 3 },
    { nama: "Rabu", neptu: 7 },
    { nama: "Kamis", neptu: 8 },
    { nama: "Jumat", neptu: 6 },
    { nama: "Sabtu", neptu: 9 }
];

const hari = hariList[dayIndex];

// --------------------------
// 2. Hitung pasaran
// --------------------------
const pasaranList = [
    { nama: "Legi", neptu: 5 },
    { nama: "Pahing", neptu: 9 },
    { nama: "Pon", neptu: 7 },
    { nama: "Wage", neptu: 4 },
    { nama: "Kliwon", neptu: 8 }
];

const timeSince1970 = date.getTime() / 86400000; 
const pasaranIndex = Math.floor(timeSince1970) % 5;
const pasaran = pasaranList[pasaranIndex];

const totalNeptu = hari.neptu + pasaran.neptu;

return {
    hari: hari.nama,
    pasaran: pasaran.nama,
    neptu: totalNeptu
};
```

}

function ramalanJodoh(totalNeptu) {
const sisa = totalNeptu % 7;

```
const ramalanList = {
    1: {
        nama: "Wasesa Segara",
        arti: "Pasangan yang luhur budi pekerti, pemaaf, dan berwibawa."
    },
    2: {
        nama: "Tunggak Semi",
        arti: "Rezeki berkembang baik dalam rumah tangga."
    },
    3: {
        nama: "Satria Wibawa",
        arti: "Keluarga disegani dan berkedudukan baik."
    },
    4: {
        nama: "Sumur Sinaba",
        arti: "Menjadi tempat bertanya dan sumber pengetahuan."
    },
    5: {
        nama: "Satria Wirang",
        arti: "Sering mendapatkan kesulitan dan malu."
    },
    6: {
        nama: "Bumi Kepetak",
        arti: "Banyak kerja keras namun tetap bertahan."
    },
    0: {
        nama: "Lebu Ketiup Angin",
        arti: "Sering menemui kesulitan, cita-cita sulit tercapai."
    }
};

return ramalanList[sisa];
```

}

const maknaHariBaik = {
"Minggu": "Membawa kebahagiaan dan rezeki.",
"Senin": "Rumah tangga langgeng dan damai.",
"Selasa": "Banyak tantangan tapi kuat menghadapinya.",
"Rabu": "Banyak keberuntungan dalam rumah tangga.",
"Kamis": "Mendapatkan banyak rezeki dan doa baik.",
"Jumat": "Hidup harmonis dan penuh kedamaian.",
"Sabtu": "Cocok memulai kehidupan baru."
};

function cariHariBaik(jumlah = 7) {
const hasil = [];
let date = new Date();

```
while (hasil.length < jumlah) {
    date.setDate(date.getDate() + 1);

    const hitung = hitungWeton(date.toISOString().split("T")[0]);
    hasil.push({
        tanggal: date.toLocaleDateString("id-ID", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        hari: hitung.hari,
        pasaran: hitung.pasaran,
        makna: maknaHariBaik[hitung.hari]
    });
}

return hasil;
```

}

function proses() {
const t1 = document.getElementById("tanggal1").value;
const t2 = document.getElementById("tanggal2").value;

```
const p1 = hitungWeton(t1);
const p2 = hitungWeton(t2);

if (!p1 || !p2) {
    alert("Mohon pilih tanggal lahir kedua pasangan!");
    return;
}

const total = p1.neptu + p2.neptu;
const sisa = total % 7;
const ramalan = ramalanJodoh(total);

let tambahan = "";

if ([1, 2, 3, 4].includes(sisa)) {

    const hariRekom = cariHariBaik();
    let htmlList = "<h3>Rekomendasi 7 Hari Baik Terdekat</h3><ul>";

    hariRekom.forEach(h => {
        htmlList += `
            <li>
                <b>${h.hari} ${h.pasaran}</b> – ${h.tanggal}<br>
                <i>${h.makna}</i>
            </li>
        `;
    });

    htmlList += "</ul>";

    tambahan = `
        <div class="hari-baik">
            <h3>Hasil Bagus — Banyak Hari Cocok!</h3>
            ${htmlList}
        </div>
    `;

} else {
    tambahan = `
        <div class="solusi">
            <h3>Hasil Kurang Baik — Tapi Masih Ada Solusi</h3>
            <ul>
                <li>Tirakat atau laku spiritual</li>
                <li>Ruwatan atau netralisasi</li>
                <li>Tolak bala / sesajen khusus</li>
                <li>Memilih hari yang lebih serasi</li>
            </ul>
            <small>Sumber: Suara Merdeka</small>
        </div>
    `;
}

const output = `
    <h2>Hasil Perhitungan Weton</h2>

    <p><b>Pasangan 1:</b> ${p1.hari} ${p1.pasaran} (Neptu: ${p1.neptu})</p>
    <p><b>Pasangan 2:</b> ${p2.hari} ${p2.pasaran} (Neptu: ${p2.neptu})</p>
    <hr>
    <p><b>Total Neptu:</b> ${total}</p>
    <p><b>Sisa Perhitungan:</b> ${sisa}</p>
    <p><b>Ramalan:</b> <b>${ramalan.nama}</b> — ${ramalan.arti}</p>
    <hr>
    ${tambahan}
`;

const hasilDiv = document.getElementById("hasil");
hasilDiv.classList.remove("hidden");
hasilDiv.innerHTML = output;
```

}
