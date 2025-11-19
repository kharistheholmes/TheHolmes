
function hitungWeton(tanggalInput) {
    const date = new Date(tanggalInput);

    if (isNaN(date)) return null;

    // --------------------------
    // 1. Hitung Hari Jawa
    // --------------------------
    const dayIndex = date.getDay(); // 0–6

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
    // Rumus pasaran: jumlah hari dari 1 Jan 1970 modulo 5
    const pasaranList = [
        { nama: "Legi", neptu: 5 },
        { nama: "Pahing", neptu: 9 },
        { nama: "Pon", neptu: 7 },
        { nama: "Wage", neptu: 4 },
        { nama: "Kliwon", neptu: 8 }
    ];

    const timeSince1970 = date.getTime() / 86400000; // jumlah hari
    const pasaranIndex = Math.floor(timeSince1970) % 5;
    const pasaran = pasaranList[pasaranIndex];

    // --------------------------
    // 3. Total Neptu
    // --------------------------
    const totalNeptu = hari.neptu + pasaran.neptu;

    return {
        hari: hari.nama,
        pasaran: pasaran.nama,
        neptu: totalNeptu
    };
}

function ramalanJodoh(totalNeptu) {
    const sisa = totalNeptu % 7;

    const ramalanList = {
        1: {
            nama: "Wasesa Segara",
            arti: " Kalian akan menjadi pasangan yang memiliki keluhuran budi pekerti, mudah memberikan maaf, memiliki wibawa dimata orang lain, dan berlapang dada dalam berbagai hal. "
        },
        2: {
            nama: "Tunggak Semi",
            arti: "Kalian akan menjadi pasangan yang memiliki rezeki melimpah dalam rumah tangga."
        },
        3: {
            nama: "Satria Wibawa",
            arti: "Kalian akan menjadi pasangan yang dalam kehidupan rumah tangganya memiliki kemuliaan dan keluhuran didalam keluarga maupun masyarakat."
        },
        4: {
            nama: "Sumur Sinaba",
            arti: "Pasangan anda memiliki pengetahuan atau kepandaian yang luar biasa sehingga sering menjadi tempat bertanya bagi orang lain.
."
        },
        5: {
            nama: "Satria Wirang",
            arti: "Anda dan pasangan akan sering menanggung malu dan kesusahan."
        },
        6: {
            nama: "Bumi Kepetak",
            arti: "Rumah tangga anda akan tahan pada kondisi sengsara dan kalut hati. Kalian adalah pasangan yang rajin bekerja dan selalu menjaga kebersihan."
        },
        0: {
            nama: "Lebu Ketiup Angin",
            arti: "Kalian akan mengalami kehidupan yang sengsara, keinginan seringkali tidak terkabul, dan memiliki kecenderungan sering berpindah rumah."
        }
    };

    return ramalanList[sisa];
}

 document.getElementById("hasil").classList.remove("hidden");
document.getElementById("hasil").innerHTML = `
    <h2>Hasil Perhitungan Weton</h2>

    <p><b>Hari:</b> ${hasil.hari}</p>
    <p><b>Pasaran:</b> ${hasil.pasaran}</p>
    <p><b>Total Neptu:</b> ${hasil.neptu}</p>
    <hr>
    <p><b>Ramalan:</b><br><b>${ramalan.nama}</b></p>
    <p>${ramalan.arti}</p>
`;
function proses() {
    const t1 = document.getElementById("tanggal1").value;
    const t2 = document.getElementById("tanggal2").value;

    const p1 = hitungWeton(t1);
    const p2 = hitungWeton(t2);

    if (!p1 || !p2) {
        alert("Mohon pilih tanggal lahir kedua pasangan!");
        return;
    }

    const total = p1.neptu + p2.neptu;
    const ramalan = ramalanJodoh(total);
    const sisa = total % 7;

    let hariBaikHtml = "";
    // Jika sisa 1,2,3,4 → tampilkan opsi hari baik
  // Menentukan pesan tambahan
let tambahan = "";

if ([1, 2, 3, 4].includes(sisa)) {
    tambahan = `
        <div class="hari-baik">
            <h3>Rekomendasi Hari Baik Menikah</h3>
            <ul>
                <li><b>Minggu</b> – Baik, membawa kebahagiaan dan rezeki.</li>
                <li><b>Senin</b> – Rumah tangga langgeng dan damai.</li>
                <li><b>Selasa</b> – Banyak tantangan tapi kuat.</li>
                <li><b>Rabu</b> – Banyak keberuntungan.</li>
                <li><b>Kamis</b> – Banyak rejeki.</li>
                <li><b>Jumat</b> – Harmonis dan penuh kedamaian.</li>
                <li><b>Sabtu</b> – Cocok untuk memulai kehidupan baru.</li>
            </ul>
            <small>Sumber: Tradisi Weton Jawa (Orami)</small>
        </div>
    `;
} else {
    tambahan = `
        <div class="solusi">
            <h3>Solusi Agar Tetap Bisa Menikah</h3>
            <ul>
                <li>Tirakat / laku spiritual (puasa, doa, dsb)</li>
                <li>Ruwatan untuk menetralkan energi buruk</li>
                <li>Ritual tolak bala / sesajen</li>
                <li>Pilih hari pernikahan yang lebih serasi sesuai primbon</li>
            </ul>
            <small>Sumber: Suara Merdeka – 7 Solusi Weton Tidak Cocok</small>
        </div>
    `;
}

// TAMPILKAN HASIL
document.getElementById("hasil").classList.remove("hidden");
document.getElementById("hasil").innerHTML = `
    <h2>Hasil Perhitungan Weton</h2>
    <p><b>Hari:</b> ${hasil.hari}</p>
    <p><b>Pasaran:</b> ${hasil.pasaran}</p>
    <p><b>Total Neptu:</b> ${hasil.neptu}</p>
    <p><b>Sisa:</b> ${sisa}</p>
    <p><b>Ramalan:</b> ${ramalan.nama} – ${ramalan.arti}</p>
    <hr>
    ${tambahan}
`;
