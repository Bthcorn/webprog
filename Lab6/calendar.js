document.writeln("<table border='1'>");
document.writeln("<tr>");
document.writeln("<th>Mo</th>");
document.writeln("<th>Tu</th>");
document.writeln("<th>We</th>");
document.writeln("<th>Th</th>");
document.writeln("<th>Fr</th>");
document.writeln("<th>Sa</th>");
document.writeln("<th>Su</th>");
document.writeln("</tr>");

// August 2024
const year = 2024;
const month = 7; // August (0-based index in JS Date)
const daysInMonth = 31;
const firstDay = new Date(year, month, 1).getDay(); // Get the day of the week of the 1st day
let currentDay = 1;


for (let week = 0; week < 5; week++) {
  document.writeln("<tr>");

  for (let dayOfWeek = 1; dayOfWeek <= 7; dayOfWeek++) {
    if (week === 0 && dayOfWeek < firstDay) {
      document.writeln("<td></td>");
    }
    else if (currentDay <= daysInMonth) {
      document.writeln("<td>" + currentDay + "</td>");
      currentDay++;
    }
    else {
      document.writeln("<td></td>");
    }
  }
  document.writeln("</tr>");
}
document.writeln("</table>");

