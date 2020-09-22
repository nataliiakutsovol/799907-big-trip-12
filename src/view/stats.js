import Smart from "./smart.js";
import Chart from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

// const moneyCtx = document.querySelector(`.statistic__money`);
// const transportCtx = document.querySelector(`.statistic__transport`);
// const timeSpendCtx = document.querySelector(`.statistic__time-spend`);
const BAR_HEIGHT = 55;
// moneyCtx.height = BAR_HEIGHT * 6;
// transportCtx.height = BAR_HEIGHT * 4;
// timeSpendCtx.height = BAR_HEIGHT * 4;

const renderPriceChart = (moneyCtx, trips) => {
  moneyCtx.height = BAR_HEIGHT * 6;
  return new Chart(moneyCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: [`✈️ FLY`, `???? STAY`, `???? DRIVE`, `????️ LOOK`, `???? EAT`, `???? RIDE`],
      datasets: [{
        data: [400, 300, 200, 160, 150, 100],
        backgroundColor: `#ffffff`,
        hoverBackgroundColor: `#ffffff`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13
          },
          color: `#000000`,
          anchor: `end`,
          align: `start`,
          formatter: (val) => `€ ${val}`
        }
      },
      title: {
        display: true,
        text: `MONEY`,
        fontColor: `#000000`,
        fontSize: 23,
        position: `left`
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#000000`,
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          minBarLength: 50
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,
      }
    }
  });
};

const renderTransportChart = (transportCtx, trips) => {
  transportCtx.height = BAR_HEIGHT * 4;
  return new Chart(transportCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: [`???? DRIVE`, `???? RIDE`, `✈️ FLY`, `????️ SAIL`],
      datasets: [{
        data: [4, 3, 2, 1],
        backgroundColor: `#ffffff`,
        hoverBackgroundColor: `#ffffff`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13
          },
          color: `#000000`,
          anchor: `end`,
          align: `start`,
          formatter: (val) => `${val}x`
        }
      },
      title: {
        display: true,
        text: `TRANSPORT`,
        fontColor: `#000000`,
        fontSize: 23,
        position: `left`
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#000000`,
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          minBarLength: 50
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,
      }
    }
  });
};

const renderTimeChart = (timeSpendCtx, trips, timeStart, timeEnd) => {
  timeSpendCtx.height = BAR_HEIGHT * 4;
  return new Chart(timeSpendCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: [`???? DRIVE`, `???? RIDE`, `✈️ FLY`, `????️ SAIL`],
      datasets: [{
        data: [4, 3, 2, 1],
        backgroundColor: `#ffffff`,
        hoverBackgroundColor: `#ffffff`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13
          },
          color: `#000000`,
          anchor: `end`,
          align: `start`,
          formatter: (val) => `${val}x`
        }
      },
      title: {
        display: true,
        text: `TIME`,
        fontColor: `#000000`,
        fontSize: 23,
        position: `left`
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#000000`,
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          minBarLength: 50
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,
      }
    }
  });
};

export default class Stats extends Smart {
  constructor(trips) {
    super();
    this._data = {
      trips,
    };

    this._pricesCart = null;
    this._transportsChart = null;

    this._setCharts();
  }

  removeElement() {
    super.removeElement();

    if (this._pricesCart !== null || this._transportsChart !== null || this._timeChart !== null) {
      this._pricesCart = null;
      this._transportsChart = null;
      this._timeChart = null;
    }
  }

  _getTemplate() {
    return (
      `<section class="statistics">
      <h2 class="visually-hidden">Trip statistics</h2>

      <div class="statistics__item statistics__item--money">
        <canvas class="statistics__chart  statistics__chart--money" width="900"></canvas>
      </div>

      <div class="statistics__item statistics__item--transport">
        <canvas class="statistics__chart  statistics__chart--transport" width="900"></canvas>
      </div>

      <div class="statistics__item statistics__item--time-spend">
        <canvas class="statistics__chart  statistics__chart--time" width="900"></canvas>
      </div>
    </section>`
    );
  }

  restoreHandlers() {
    this._setCharts();
  }

  _setCharts() {
    if (this._pricesCart !== null || this._transportsChart !== null || this._timeChart !== null) {
      this._pricesCart = null;
      this._transportsChart = null;
      this._timeChart = null;
    }

    const {trips, timeStart, timeEnd} = this._data;
    const moneyCtx = this.getElement().querySelector(`.statistics__chart--money`);
    const transportCtx = this.getElement().querySelector(`.statistics__chart--transport`);
    const timeSpendCtx = this.getElement().querySelector(`.statistics__chart--time`);

    this._pricesCart = renderPriceChart(moneyCtx, trips);
    this._transportsChart = renderTransportChart(transportCtx, trips);
    this._timeChart = renderTimeChart(timeSpendCtx, trips, timeStart, timeEnd);
  }
}
