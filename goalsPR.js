function initGoalsPR() {
  var currentDay = new Date().getDate();
  var dayOfTheWeek = new Date().getDay();
  var sundayDay = currentDay - dayOfTheWeek;
  var data = [
        {
          x: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          y: getWeekSleepTime(sundayDay),
          type: 'bar'
        }
      ];

    Plotly.newPlot('sleepPlot', data);
}

function getWeekSleepTime(sundayDay) {
  var sleepTimes = [];
  for(var i = 0; i < 7; i++) {
    sleepTimes.push(days[sundayDay + i]);
  }
  return sleepTimes;
}