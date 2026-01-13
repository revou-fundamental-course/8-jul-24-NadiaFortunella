// Fungsi untuk menghitung BMI
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  const hasilBMI = document.getElementById('hasilBMI');
  const kategoriBMI = document.getElementById('kategoriBMI');
  const solusi = document.getElementById('solusi');

  // Validasi input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Masukkan nilai berat badan dan tinggi badan yang valid.");
    return;
  }

  // Hitung BMI
  const bmi = weight / (height * height);

  // Tampilkan hasil BMI
  hasilBMI.innerHTML = bmi.toFixed(2);

  // Tentukan kategori & solusi
  if (bmi < 18.5) {
    kategoriBMI.innerHTML = "Kategori: Kekurangan Berat Badan";
    solusi.innerHTML = "Perlu konsultasi dengan ahli gizi untuk mengetahui penyebab kekurangan berat badan.";
  } 
  else if (bmi < 25) {
    kategoriBMI.innerHTML = "Kategori: Normal";
    solusi.innerHTML = "Tetap pertahankan berat badan dengan mengatur keseimbangan antara pola makan dan aktivitas fisik.";
  } 
  else if (bmi < 30) {
    kategoriBMI.innerHTML = "Kategori: Kelebihan Berat Badan";
    solusi.innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
  } 
  else {
    kategoriBMI.innerHTML = "Kategori: Obesitas";
    solusi.innerHTML = "Usahakan menurunkan berat badan dan menerapkan pola hidup sehat. Konsultasi dengan ahli gizi sangat dianjurkan.";
  }
}


// Fungsi untuk mereset form
function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";

  document.getElementById("hasilBMI").innerHTML = "00.00";
  document.getElementById("kategoriBMI").innerHTML = "";
  document.getElementById("solusi").innerHTML = "";
}
