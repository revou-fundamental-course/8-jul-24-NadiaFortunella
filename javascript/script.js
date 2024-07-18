
// Fungsi untuk menghitung BMI
function calculateBMI() {
  // Ambil nilai dari input
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value)/100;
  const kategoriBMI = document.getElementById('kategoriBMI');
  const solusi = document.getElementById('solusi')
  let body = document.body


  // Validasi input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Masukkan nilai berat badan dan tinggi badan yang valid.");
    return;
  }

  // Hitung BMI
  const bmi = (weight / (height * height));

  // Tampilkan hasil BMI
  document.getElementById("hasilBMI").innerHTML = "BMI Anda: " + bmi.toFixed(2);

  // Tampilkan kategori BMI
  let kategori = "";
  if (bmi < 18.5) {
    kategori.innerHTML = "Kekurangan Berat Badan";
    solusi.innerHTML = "Perlu konsultasi dengan ahli gizi untuk mengetahui penyebab kekurangan berat badan.";
  } else if (bmi >= 18.5 && bmi < 25) {
    kategori.innerHTML = "Normal";
    solusi.innerHTML ="Tetap pertahankan berat badan dengan mengatur keseimbangan antara pola makan dan aktivitas fisik.";
  } else if (bmi >= 25 && bmi < 30) {
    kategori.innerHTML = "Kelebihan Berat Badan";
    solusi.innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
  } else{
    kategori.innerHTML = "Obesitas";
    solusi.innerHTML = "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Perlu konsultasi dengan ahli gizi untuk mengetahui resiko dari obesitas."
  }
  document.getElementById("kategoriBMI").innerHTML = "Kategori: " + kategori;

  // Penginputan
  body.append('bmi')
  body.append('kategori')
  body.append('solusi')
}


// Fungsi untuk mereset form
function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("hasilBMI").innerHTML = "";
  document.getElementById("kategoriBMI").innerHTML = "";
}
