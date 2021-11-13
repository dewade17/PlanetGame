var countDate = new Date('nov 31 2021 00:00:00').getTime();

function promosi() {
  var now = new Date().getTime();
  gap = countDate - now;

  var Detik = 1000;
  var Menit = Detik * 60;
  var Jam = Menit * 60;
  var Hari = Jam * 24;

  var h = Math.floor(gap / Hari);
  var j = Math.floor((gap % Hari) / Jam);
  var m = Math.floor((gap % Jam) / Menit);
  var d = Math.floor((gap % Menit) / Detik);

  document.getElementById('Hari').innerText = h;
  document.getElementById('Jam').innerText = j;
  document.getElementById('Menit').innerText = m;
  document.getElementById('Detik').innerText = d;
}

setInterval(function () {
  promosi();
}, 1000);
