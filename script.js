const nilaiHari = {
    "Minggu": 5,
    "Senin": 4,
    "Selasa": 3,
    "Rabu": 7,
    "Kamis": 8,
    "Jumat": 6,
    "Sabtu": 9
};

const nilaiPasaran = {
    "Legi": 5,
    "Pahing": 9,
    "Pon": 7,
    "Wage": 4,
    "Kliwon": 8
};

function hitungWeton() {
    let hariPria = document.getElementById("hariPria").value;
    let pasaranPria = document.getElementById("pasaranPria").value;
    let hariWanita = document.getElementById("hariWanita").value;
    let pasaranWanita = document.getElementById("pasaranWanita").value;

    if (!hariPria || !pasaranPria || !hariWanita || !pasaranWanita) {
        alert("Mohon lengkapi semua weton!");
        return;
    }

    let neptuPria = nilaiHari[hariPria] + nilaiPasaran[pasaranPria];
    let neptuWanita = nilaiHari[hariWanita] + nilaiPasaran[pasaranWanita];
    let total = neptuPria + neptuWanita;

    let interpretasi = "";

    if (total >= 7 && total <= 15) {
        interpretasi = "Hasilnya sangat baik. Weton kalian saling melengkapi.";
    } else if (total >= 16 && total <= 22) {
        interpretasi = "Baik. Ada beberapa tantangan yang bisa diatasi bersama.";
    } else if (total >= 23 && total <= 30) {
        interpretasi = "Perlu kehati-hatian. Komunikasi adalah kunci.";
    } else {
        interpretasi = "Kuat tetapi rawan konflik. Usahakan saling memahami.";
    }

    document.getElementById("hasil").classList.remove("hidden");
    document.getElementById("hasil").innerHTML = `
        <h2>Hasil Perhitungan</h2>
        <p><b>Neptu Pria:</b> ${neptuPria}</p>
        <p><b>Neptu Wanita:</b> ${neptuWanita}</p>
        <p><b>Total Neptu:</b> ${total}</p>
        <hr>
        <p><b>Interpretasi:</b><br>${interpretasi}</p>
    `;
}
