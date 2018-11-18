
function initGoalsPR() {
  var currentDay = new Date().getDate();
  var dayOfTheWeek = new Date().getDay();
  var sundayDay = currentDay - dayOfTheWeek;
  var ctx = $("#sleepPlot");
  var sleepArr = getWeekSleepTime(sundayDay);
  var colourArr = getColourArr(sleepArr, 9, 9);
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {"labels": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
          "datasets":[{"data":sleepArr, "backgroundColor": colourArr}]},
    options: {}
  });
}

function getWeekSleepTime(sundayDay) {
  var sleepTimes = [];
  for(var i = 0; i < 7; i++) {
    sleepTimes.push(days[sundayDay + i].sleepTime);
  }
  return sleepTimes;
}

function getColourArr(data, optimal, max) {
  var colourData = [];
  for(var i = 0; i < data.length; i++) {
    colourData.push(HSVtoRGB(120 - (120/max) * constrain(optimal - data[i].sleepTime, 0, optimal), 100, 100));
  }
  return colourData;
}

function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
      s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
  }
  return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
      a: 0.3
  };
}

function constrain(num, min, max) {
  return Math.min(Math.max(parseInt(num), min), max);
}