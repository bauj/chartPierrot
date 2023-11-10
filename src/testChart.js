import Chart from 'chart.js/auto'
import 'chartjs-plugin-dragdata'

// en general, tout est dans des fonctions en javascript, meme si c'est du script
(async function() {
  var x_data = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
  var y_data_1 = [86,114,106,106,107,111,133,221,783,2478];
  var y_data_2 = [2000,700,200,100,100,100,100,50,25,0];

  var options = {
        // IMPORTANT - You need a chart of type "scatter"
        // in order to drag a line chart along the x axis
        type: 'scatter',
        data: {
        labels: x_data,
        datasets: [{
          data: y_data_1,
          label: "data1",
          borderColor: "#3e95cd",
          backgroundColor: "#3e95cd",
          fill: false,
          pointRadius: 10,
          pointHitRadius: 25,
          showLine: true,
          borderWidth: 2.5,
          },
        {
          data: y_data_2,
          label: "data2",
          borderColor: "#cd3e4a",
          backgroundColor: "#cd3e4a",
          fill: false,
          pointRadius: 10,
          pointHitRadius: 25,
          showLine: true,
          borderWidth: 2.5,          
        }],
        },
        options: {
          plugins: {
            dragData: {
              round: 1, // rounds the values to n decimal places 
                        // in this case 1, e.g 0.1234 => 0.1)
              showTooltip: true, // show the tooltip while dragging [default = true]
              // dragX: true // also enable dragging along the x-axis.
                             // this solely works for continous, numerical x-axis scales (no categories or dates)!
              onDragStart: function(e, element) {
                /*
                // e = event, element = datapoint that was dragged
                // you may use this callback to prohibit dragging certain datapoints
                // by returning false in this callback
                if (element.datasetIndex === 0 && element.index === 0) {
                  // this would prohibit dragging the first datapoint in the first
                  // dataset entirely
                  return false
                }
                */
              },
              onDrag: function(e, datasetIndex, index, value) {         
                /*     
                // you may control the range in which datapoints are allowed to be
                // dragged by returning `false` in this callback
                if (value < 0) return false // this only allows positive values
                if (datasetIndex === 0 && index === 0 && value > 20) return false 
                */
              },
              onDragEnd: function(e, datasetIndex, index, value) {
                // you may use this callback to store the final datapoint value
                // (after dragging) in a database, or update other UI elements that
                // dependent on it
                console.log("> onDragEnd : Val dataSetIndex : ", datasetIndex);
                console.log("> onDragEnd : Val index (X axis) : ", index);
                console.log("> onDragEnd : Val value (Y axis) : ", value);
              },
            }
          },
          scales: {
            y: {
              // dragData: false // disables datapoint dragging for the entire axis
            }
          }
        }
      }

  var ctx = document.getElementById('id-canvas').getContext('2d');
  window.test = new Chart(ctx, options);

})()