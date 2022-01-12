var countDate = new Date('Feb 1 2022 00:00:00').getTime();

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

  if (gap < 0) {
    clearInterval(gap);
    document.getElementById('Hari').innerText = '0';
    document.getElementById('Jam').innerText = '0';
    document.getElementById('Menit').innerText = '0';
    document.getElementById('Detik').innerText = '0';
  }
}

setInterval(function () {
  promosi();
}, 1000);
