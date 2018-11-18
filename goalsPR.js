class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function initGoalsPR() {
  var currentDay = new Date().getDate();
  var dayOfTheWeek = new Date().getDay();
  var sundayDay = currentDay - dayOfTheWeek;
  var myBarChart = new Chart($("#sleepPlot"), {
    type: 'bar',
    data: getWeekSleepTime(sundayDay),
    options: {}
});
}

function getWeekSleepTime(sundayDay) {
  var sleepTimes = [];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  for(var i = 0; i < 7; i++) {
    sleepTimes.push(new Point(dayNames[i], days[sundayDay + i].sleepTimes));
  }
  return sleepTimes;
}