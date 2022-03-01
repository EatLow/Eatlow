import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { EnergyCost } from '../../models/energyCost/energy-cost';
import { NumberParse } from '../../services/numberParse';

enum Colors
{
  RED = "hsla(0, 75%, 71%, 1)",
  ORANGE = "hsla(30, 75%, 71%, 1)",
  YELLOW = "hsla(50, 75%, 71%, 1)",
  SOFTGREEN = "hsla(75, 75%, 71%, 1)",
  GREEN = "hsla(144, 75%, 71%, 1)",
}
@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss'],
})
export class ChartDoughnutComponent implements OnInit
{
  @Input() energyCost!: EnergyCost;
  @Input() otherStepCost?: number;

  ngOnInit(): void
  {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
    this.createDoughnut();
  }

  private createDoughnut()
  {
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
        maintainAspectRatio: false,
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
            formatter: (value: any) =>
            {
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
    const ecoScore = NumberParse.shortenedNumber(this.energyCost.ecoScore);
    const color = this.color();
    const size = window.innerWidth >= 425 ? "30px" : "20px";

    const centerText = {
      id: 'centerText',
      afterDatasetsDraw(chart: any, args: any, options: any)
      {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = `bolder ${size} Varela`;
        ctx.fillStyle = '#4a4a4a';
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
    const ecoScore = NumberParse.shortenedNumber(this.energyCost.ecoScore);
    let color: string = '';
    if (ecoScore > 0 && ecoScore <= 1) color = Colors.GREEN;
    else if (ecoScore > 1 && ecoScore <= 2) color = Colors.SOFTGREEN;
    else if (ecoScore > 2 && ecoScore <= 3) color = Colors.YELLOW;
    else if (ecoScore > 3 && ecoScore < 4) color = Colors.ORANGE;
    else color = Colors.RED;
    return color;
  }

  private splitedObject(): any
  {
    const names = [];
    const vals = [];
    const colors = [];

    if (this.energyCost['agriculture'])
    {
      colors.push('#fcc096');
      names.push('🚜 Agriculture');
      vals.push(this.energyCost['agriculture']);
    }
    if (this.energyCost['transformation'])
    {
      colors.push('#b2ecf7');
      names.push('🥫 Transformation');
      vals.push(this.energyCost['transformation']);
    }
    if (this.energyCost['packaging'])
    {
      colors.push('#cebde1');
      names.push('🧴 Emballage');
      vals.push(this.energyCost['packaging']);
    }
    if (this.energyCost['transport'])
    {
      colors.push('#bbe7d6');
      names.push('🚚 Transport');
      vals.push(this.energyCost['transport']);
    }
    if (this.energyCost['supermarket'])
    {
      colors.push('#f4becb');
      names.push('🏪 Supermarché');
      vals.push(this.energyCost['supermarket']);
    }
    if (this.energyCost['consomation'])
    {
      colors.push('#fcedb6');
      names.push('🍽️ Consommation');
      vals.push(this.energyCost['consomation']);
    }

    const synthese = vals.reduce((acc, curr) => acc += curr);
    const pourcentages = vals.map(n => Math.trunc(n / synthese * 10000) / 100);

    return [names, pourcentages, colors];
  }

}
