import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit { 

  totalAssets: number = 0;
  distrubuteAssets: number = 0; 
  transferAssets: number = 0; 
  distroyAssets: number = 0; 
  
  
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  title!: ApexTitleSubtitle;


  constructor() {}

  ngOnInit(): void {
    this.totalAssets = 200;
    this.distrubuteAssets = 200;
    this.transferAssets = 200;
    this.distroyAssets = 200;
    this.initializeChart();
  }

  public chartOptions: any = {
    series: [
      {
        name: "basic",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      },
      {
        name: "yesuf",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany"
      ]
    }
  };

  public chartOptionss: any = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };
  
  public chartOptionsss: any = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 380,
      type: "donut"
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "gradient"
    },
    legend: {
      formatter: function(val: any, opts: any) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  public chartOption: any = {
    series: [
      {
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21]
      },
      {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32]
      },
      {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20]
      },
      {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      dropShadow: {
        enabled: true,
        blur: 1,
        opacity: 0.25
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    title: {
      text: "Compare Sales Strategy"
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function(val: any) {
          return val + "K";
        }
      }
    },
    fill: {
      type: "pattern",
      opacity: 1
    },
    states: {
      hover: {
        filter: {
          type: "none"
        }
      }
    },
    legend: {
      position: "right",
      offsetY: 40
    }
  };

  public chartOptionn:any = {
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }
    ],
    chart: {
      height: 350,
      type: "line"
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: "Traffic Sources"
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001"
    ],
    xaxis: {
      type: "datetime"
    },
    yaxis: [
      {
        title: {
          text: "Website Blog"
        }
      },
      {
        opposite: true,
        title: {
          text: "Social Media"
        }
      }
    ]
  };

  public chartOptionnn:any = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 380,
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2
      }
    },
    stroke: {
      width: 0
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true
            }
          }
        }
      }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8
      }
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: true,
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines"
        ]
      }
    },
    states: {
      hover: {
        filter: {
          type: "none"
        }
      }
    },
    theme: {
      palette: "palette2"
    },
    title: {
      text: "Favourite Movie Type"
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  private initializeChart(): void {
      this.title = {
          text: 'Product Trends by Month',
          align: 'left'
      };
      this.series = [
          {
              name: 'Desktops',
              data: [10, 41, 35, 51]
          }
      ];
           
      this.chart = {
          type: 'bar',
          height: 350
      };
  }

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["Apple", "Microsoft", "Facebook", "Google"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Leading Companies',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };
     
  } 




