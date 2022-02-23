import { Component, HostListener, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { EnergyCost } from '../../models/energyCost/energy-cost';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss'],
})
export class ChartDoughnutComponent implements OnInit {
  energyCost: EnergyCost = {
    id: 3947,
    agriculture: 0.0,
    transformation: 0.05078,
    packaging: 0.05165,
    transport: 0.01375,
    supermarket: 0.00243,
    consomation: 0.00442,
  };

  ecoScore: number = 5;

  canvas: any;

  ctx: any;

  size: string = "30px";

  resizeDoughnut(event:any) {
    event.target.innerWidth
    if(event.target.innerWidth <= 425) {
      this.size = "20px";
      console.log(event.target.innerWidth);
      console.log(this.size);
    } else {
      this.size = "30px";
      console.log(event.target.innerWidth);
      console.log(this.size);
    }
    this.centerText()
  }

  ngOnInit(): void {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
    
    this.createDoughnut();
  }

  private createDoughnut() {
    const myChart = new Chart("doughnut", {
      type: 'doughnut',
      data: {
        datasets: [
        {
          data: this.splitedObject()[1],
          backgroundColor: this.splitedObject()[2],
          borderWidth: 1,
        },
        ],
        labels: this.splitedObject()[0],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              font: {
                size: 15
              }
            }
          },
          datalabels: {
              formatter: (value) => {
                  return value + '%';
              },
              display: true,
              backgroundColor: '#fff',
              borderRadius: 3,
              font: {
                  size: 15,
                  weight: 'bold',
              },
              color: '#666666',
          },
      }
      },
      plugins: [this.centerText()],
    });
  }

  private centerText(): any {
    const ecoScore = this.ecoScore;
    const color = this.color();
    const size = this.size;

    const centerText = {
      id: 'centerText',
      afterDatasetsDraw(chart:any, args:any, options:any) {
          const { ctx, chartArea: { top, right, bottom, left, width, height }} = chart;
          ctx.save();
          ctx.font = `bolder ${size} Varela`;
          ctx.fillStyle = '#000';
          ctx.textAlign = 'center';
          ctx.fillText('EcoScore:', width / 2, height / 2 + top);
          ctx.restore();

          ctx.font = `bolder ${size} Arial`;
          ctx.fillStyle = color;
          ctx.textAlign = 'center';
          ctx.fillText(ecoScore, width / 2, height / 1.7 + top);
          ctx.restore();
      }
  }
  return centerText;
  }

  private color(): string {
    let color: string = '';
    if (this.ecoScore > 0 && this.ecoScore <= 1) color = '#79eb6f';
    else if (this.ecoScore > 1 && this.ecoScore <= 2) color = '#cfea2a';
    else if (this.ecoScore > 2 && this.ecoScore <= 3) color = '#fefe32';
    else if (this.ecoScore > 3 && this.ecoScore < 4) color = '#fd5307';
    else color = '#fe2712';
    return color;
  }

  private splitedObject(): any {
    const names = [];
    const vals = [];
    const colors = [];

    if (this.energyCost['agriculture']) {
      colors.push('#fcc096');
      names.push('🚜 Agriculture');
      vals.push(this.energyCost['agriculture']);
    }
    if (this.energyCost['transformation']) {
      colors.push('#b2ecf7');
      names.push('🥫 Transformation');
      vals.push(this.energyCost['transformation']);
    }
    if (this.energyCost['packaging']) {
      colors.push('#cebde1');
      names.push('🧴 Emballage');
      vals.push(this.energyCost['packaging']);
    }
    if (this.energyCost['transport']) {
      colors.push('#bbe7d6');
      names.push('🚚 Transport');
      vals.push(this.energyCost['transport']);
    }
    if (this.energyCost['supermarket']) {
      colors.push('#fcc096');
      names.push('🏪 Supermarché');
      vals.push(this.energyCost['supermarket']);
    }
    if (this.energyCost['consomation']) {
      colors.push('#fcedb6');
      names.push('🍽️ Consommation');
      vals.push(this.energyCost['consomation']);
    }

    const synthese = vals.reduce((acc, curr) => acc += curr);
    const pourcentages = vals.map(n => Math.trunc(n / synthese * 10000) / 100);

    return [names, pourcentages, colors];
  }

}
