let number = 1; //gloval variable

// var showNumber = document.getElementById('number1');

function setImg(number) {
  var img = document.getElementById('number');
  img.setAttribute('src', + number + '.jpg');
  img.setAttribute('alt', number);
}

function counter() {
  const button = document.getElementById('up');
  button.addEventListener('click', increment, false);
  const button2 = document.getElementById('down');
  button2.addEventListener('click', decrement, false);
}

function increment() {
  if (number < 9) {
    number++;
    updateNumber();
    // document.getElementById("number1") = number;
    setImg(number);
  }
}

function decrement() {
  if (number > 1) {
    number--;
    updateNumber();
    // document.getElementById("number1") = number;
    setImg(number);
  }
}

function updateNumber() {
  document.getElementById("number1").innerHTML = number;
}

window.addEventListener('load', counter, false);