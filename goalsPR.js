function initGoalsPR() {
    var data = [
        {
          x: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          y: [20, 14, 23],
          type: 'bar'
        }
      ];

    Plotly.newPlot('sleepPlot', data);
}