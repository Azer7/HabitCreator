
function initGoalsPR() {
  var currentDay = new Date().getDate();
  var dayOfTheWeek = new Date().getDay();
  var sundayDay = currentDay - dayOfTheWeek;
  var ctx = $("#sleepPlot");
  var sleepArr = getWeekSleepTime(sundayDay);
  var colourArr = getColourArr(sleepArr, 9, 7, 0);
  var hoverColourArr = getColourArr(sleepArr, 9, 7, 50)
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {"labels": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
          "datasets":[{"data":sleepArr, "backgroundColor": colourArr, "hoverBackgroundColor": hoverColourArr}]}, 
          options: {
            legend: {
              display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 16
                    }
                }]
            }
        }
  });
}

function getWeekSleepTime(sundayDay) {
  var sleepTimes = [];
  for(var i = 0; i < 7; i++) {
    sleepTimes.push(days[sundayDay + i].sleepTime);
  }
  return sleepTimes;
}

function getColourArr(data, optimal, max, darkness) {
  var colourData = [];
  for(var i = 0; i < data.length; i++) {
    var tc = getGTR(constrain(optimal - data[i], 0, max) / max, darkness); //value from 0 to 1, 0 is perfect sleep
    colourData.push("rgba(" + tc.r + "," + tc.g + "," + tc.b + "," + tc.a + ")");
  }
  return colourData;
}

function getGTR(failure, darkness) {
  var netSuccess = 400 - failure * 400; // 0 is bad 400 is good
  var colour = {
    r: 200,
    g: 200,
    b: 0,
    a: 0.4
  }
  if(netSuccess > 200) {
    colour.r = 400 - netSuccess;
  } else {
    colour.g = netSuccess;
  }
  colour.r -= darkness;
  colour.g -= darkness;
  return colour;
}


function constrain(num, min, max) {
  return Math.min(Math.max(parseInt(num), min), max);
}