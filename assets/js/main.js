// toggler 
// $(document).ready(function () {
  
//   $(".menu-bar").click(function () {
//     $(".left-sidebar").toggle(200);
//   });
// });

// Google chart curving chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Number of user 2022', 'Total Business 2022'],
    ['Jan',  10,     10],
    ['Fab',  30,      40],
    ['March',  45,       50],
    ['May',  70,      55],
    ['Jun',  75,     65],
    ['July',  80,      75],
    ['Aug',  85,       68],
    ['Sep',  75,      95]
  ]);

  var options = {  
    curveType: 'function',
    legend: { position: 'top'}
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
 
