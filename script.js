window.onload = function() {
  this.setInterval(function() {

    let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

    // Tambahkan angka nol di depan jam, menit dan detik
    hours = (hours <= 9) ? ('0' + hours) : hours;
    minutes = (minutes <= 9) ? ('0' + minutes) : minutes;
    seconds = (seconds <= 9) ? ('0' + seconds) : seconds;
    
    // Tampilkan jam, menit dan detik
    document.getElementsByClassName('hours')[0].innerHTML = hours;
	  document.getElementsByClassName('minutes')[0].innerHTML = minutes;
    document.getElementsByClassName('seconds')[0].innerHTML = seconds;
    
    // Deteksi AM dan PM sistem
    am = document.getElementsByClassName('am')[0].classList,
    pm = document.getElementsByClassName('pm')[0].classList;
    
    // Memberi efek aktif pada elemen AM dan PM
    (hours >= 12) ? pm.add('light-on') : am.add('light-on');
    (hours >= 12) ? am.remove('light-on') : pm.remove('light-on');

    // Audio mp3 untuk bunyi tik di setiap detiknya
    var audio = new Audio('sound.mp3');
    for(i = 0; i <= 59; i++) {
      if(seconds == i) {
        audio.play();
      }
    }
  }, 1000);
}