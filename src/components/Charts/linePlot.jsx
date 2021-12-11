import React from "react";
import ReactApexChart from "react-apexcharts";

class LinePlot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
          name: "Actual Payout",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Expected Payout",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        // {
        //   name: 'Total Visits',
        //   data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        // }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        colors:['#00008B','#FF9900'],
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          // dashArray: [0, 8, 5]
        },
        title: {
          text: 'Payroll Stats',
          align: 'left'
        },
        legend: {
          position: 'top',
          // horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
  
          borderColor:'#FFF'
        },
        fill: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
 
      },
    
    
    };
  }



  render() {
    return (
      


<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>



    );
  }
}


export default LinePlot;