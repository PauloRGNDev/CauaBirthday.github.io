var confettis = document.getElementsByClassName('confetti');
for (var i = 0; i < confettis.length; i++) {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    confettis[i].style.backgroundColor = randomColor;
  }