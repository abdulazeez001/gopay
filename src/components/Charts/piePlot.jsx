import React from "react";
import ReactApexChart from "react-apexcharts";
class PiePlot extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [1305, 3915],
        options: {
          chart: {
            width: 320,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          colors:['#00008B','#FF9900'],
          labels:[`Actual Payout ${'₦1305'}`,`Expected Payout ${' ₦3915'}`],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
            position: 'bottom',
            // offsetY: 0,
            // height: 230,
          }
        },
      
      
      };
    }

  
    render() {
      return (
        


  <div>
<div class="chart-wrap">
<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={320}/>
</div>
</div>
</div>



      );
    }
  }


export default PiePlot;
