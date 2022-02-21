import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss'],
})
export class ChartDoughnutComponent implements OnInit {
  canvas: any;
  ctx: any;
  ngOnInit(): void {
    Chart.register(...registerables);
    const myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        datasets: [
        {
          data: [10, 10, 10, 10, 10, 10],
          backgroundColor: this.colors(),
          borderWidth: 1,
        },
        ],
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      },
      options: {
        
      },

    });
  }

  colors() {
    return ['#fcedb6', '#fcc096', '#bbe7d6', '#cebde1', '#b2ecf7', '#fcc096'];
  }



}
