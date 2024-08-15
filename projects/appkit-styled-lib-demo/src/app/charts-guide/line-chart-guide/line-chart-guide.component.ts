import {
  AfterViewInit,
  Component,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';

// amCharts imports
/*import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am4themes_animated from '@amcharts/amcharts5/themes/animated';*/
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'line-chart-guide',
  templateUrl: './line-chart-guide.component.html',
  styleUrls: ['./line-chart-guide.component.css']
})
export class LineChartGuideComponent {
  /*constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  private chart: am5.Chart;

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    am5.addLicense('AM5C311149888');
    // Chart code goes in here
    this.browserOnly(() => {
      const root = am5.Root.new('chartdivfff');
      root.setThemes([am4themes_animated.new(root)]);

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          wheelY: 'zoomX',
          layout: root.verticalLayout
        })
      );

      // Define data
      const data = [
        {
          category: 'Q1',
          value1: 1000,
          value2: 588
        },
        {
          category: 'Q2',
          value1: 1200,
          value2: 1800
        },
        {
          category: 'Q3',
          value1: 850,
          value2: 1230
        },
        {
          category: 'Q4',
          value1: 1100,
          value2: 800
        }
      ];

      // Craete Y-axis
      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      // Create X-Axis
      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          maxDeviation: 0.2,
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: 'category'
        })
      );
      xAxis.data.setAll(data);

      // Create series
      const series1 = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value1',
          categoryXField: 'category'
        })
      );
      series1.data.setAll(data);

      series1.fills.template.set(
        'fillGradient',
        am5.LinearGradient.new(root, {
          stops: [
            {
              opacity: 0.1
            },
            {
              opacity: 0
            }
          ]
          //rotation: 90
        })
      );

      series1.fills.template.setAll({
        visible: true,
        fillOpacity: 1
      });

      series1.strokes.template.setAll({
        strokeWidth: 2
      });
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }*/
}
