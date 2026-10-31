// ===== Program 1: Percabangan (if / else if / else) =====
function tentukanGrade(nilai) {
  let grade;
  let komentar;

  if (nilai >= 85) {
    grade = "A";
    komentar = "Sangat baik, pertahankan!";
  } else if (nilai >= 70) {
    grade = "B";
    komentar = "Baik, sedikit lagi menuju A.";
  } else if (nilai >= 55) {
    grade = "C";
    komentar = "Cukup, masih bisa ditingkatkan.";
  } else if (nilai >= 40) {
    grade = "D";
    komentar = "Kurang, perlu belajar lebih giat.";
  } else {
    grade = "E";
    komentar = "Belum lulus, coba ulangi lagi.";
  }

  return { grade, komentar };
}

document.getElementById("btnNilai").addEventListener("click", function () {
  const input = document.getElementById("inputNilai");
  const hasil = document.getElementById("hasilNilai");
  const nilai = parseFloat(input.value);

  hasil.classList.remove("error");

  if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    hasil.classList.add("error");
    hasil.textContent = "Masukkan angka antara 0 sampai 100.";
    return;
  }

  const { grade, komentar } = tentukanGrade(nilai);
  hasil.textContent = "Nilai " + nilai + " mendapat grade " + grade + ".\n" + komentar;
});

// ===== Program 2: Perulangan for + percabangan =====
function keteranganBilangan(i) {
  if (i % 15 === 0) {
    return "Kelipatan 3 dan 5";
  } else if (i % 5 === 0) {
    return "Kelipatan 5";
  } else if (i % 3 === 0) {
    return "Kelipatan 3";
  } else if (i % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

document.getElementById("btnBilangan").addEventListener("click", function () {
  const n = parseInt(document.getElementById("inputN").value, 10);
  const daftar = document.getElementById("hasilBilangan");

  daftar.innerHTML = "";

  if (isNaN(n) || n < 1 || n > 100) {
    const li = document.createElement("li");
    li.innerHTML = '<span class="ket" style="color:#b3261e">Masukkan angka antara 1 sampai 100.</span>';
    daftar.appendChild(li);
    return;
  }

  for (let i = 1; i <= n; i++) {
    const ket = keteranganBilangan(i);
    const li = document.createElement("li");

    // Beri sorotan untuk bilangan kelipatan 3 / 5
    if (i % 3 === 0 || i % 5 === 0) {
      li.className = "istimewa";
    }

    li.innerHTML = '<span class="angka">' + i + '</span><span class="ket">' + ket + "</span>";
    daftar.appendChild(li);
  }
});

// ===== Program 3: Perulangan while =====
document.getElementById("btnDigit").addEventListener("click", function () {
  const hasil = document.getElementById("hasilDigit");
  const nilaiAwal = parseInt(document.getElementById("inputDigit").value, 10);

  hasil.classList.remove("error");

  if (isNaN(nilaiAwal) || nilaiAwal < 0) {
    hasil.classList.add("error");
    hasil.textContent = "Masukkan bilangan bulat positif.";
    return;
  }

  let angka = nilaiAwal;
  let jumlah = 0;
  let jumlahDigit = 0;
  const langkah = [];

  if (angka === 0) {
    langkah.push("0");
    jumlahDigit = 1;
  }

  while (angka > 0) {
    const digit = angka % 10;
    jumlah += digit;
    jumlahDigit++;
    langkah.unshift(digit);
    angka = Math.floor(angka / 10);
  }

  hasil.textContent =
    "Bilangan " + nilaiAwal + " punya " + jumlahDigit + " digit.\n" +
    langkah.join(" + ") + " = " + jumlah;
});
