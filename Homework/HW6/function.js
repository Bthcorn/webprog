var days_of_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var week1 = document.getElementById("week1");
var week2 = document.getElementById("week2");
var week3 = document.getElementById("week3");
var week4 = document.getElementById("week4");
var week5 = document.getElementById("week5");
var week6 = document.getElementById("week6");
var month = document.getElementById("monthNo");
let m_of_year = 1;

let total_days = days_of_month[0];

function show_monthOf2024(m_of_year, total_days_of_year) {
  var days = 0;
  let m = m_of_year - 1;
  const firstDay = new Date(2024, m, 1).getDay();
  document.getElementById("monthNo").innerHTML = m_of_year;
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 7; j++) {
      day = document.createElement("td");
      if (i == 0 && j + 1 < firstDay) {
        text = document.createTextNode("");
        day.appendChild(text);
      }
      else if (days < days_of_month[m]) {
        days++;
        text = document.createTextNode(days);
        day.appendChild(text);
      } else {
        text = document.createTextNode("");
        day.appendChild(text);
      }

      if (i == 0) {
        document.getElementById("week1").appendChild(day);
      } else if (i == 1) {
        document.getElementById("week2").appendChild(day);
      } else if (i == 2) {
        document.getElementById("week3").appendChild(day);
      } else if (i == 3) {
        document.getElementById("week4").appendChild(day);
      } else if (i == 4) {
        document.getElementById("week5").appendChild(day);
      } else if (i == 5) {
        document.getElementById("week6").appendChild(day);
      }
    }
  }
}

function clear() {
  document.getElementById("week1").innerHTML = "";
  document.getElementById("week2").innerHTML = "";
  document.getElementById("week3").innerHTML = "";
  document.getElementById("week4").innerHTML = "";
  document.getElementById("week5").innerHTML = "";
  document.getElementById("week6").innerHTML = "";
}

function next() {
  if (m_of_year < 12) {
    clear();
    total_days += days_of_month[m_of_year];
    m_of_year++;
    show_monthOf2024(m_of_year, 366);
    console.log(total_days);
  } else {
    return;
  }
}

function previous() {
  if (m_of_year >= 2) {
    clear();
    total_days -= days_of_month[m_of_year - 2];
    m_of_year--;
    console.log(total_days);
    show_monthOf2024(m_of_year, 366);
  } else {
    return;
  }
}

function start() {
  show_monthOf2024(1, 366);
  document.getElementById("previous").addEventListener("click", previous);
  document.getElementById("next").addEventListener("click", next);
}

window.addEventListener("load", start);


