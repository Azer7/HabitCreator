
function initGoalsPR() {
  var currentDay = new Date().getDate();
  var dayOfTheWeek = new Date().getDay();
  var sundayDay = currentDay - dayOfTheWeek;
  var ctx = $("#sleepPlot");
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {"labels": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
          "datasets":[{"data":getWeekSleepTime(sundayDay),"fill":false}]},
    options: {}
  });
}

function getWeekSleepTime(sundayDay) {
  var sleepTimes = [];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  for(var i = 0; i < 7; i++) {
    sleepTimes.push(days[sundayDay + i].sleepTime);
  }
  return sleepTimes;
}