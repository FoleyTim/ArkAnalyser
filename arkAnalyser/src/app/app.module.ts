import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { ChartComponent } from './chart/chart.component';

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer
} from 'echarts/renderers';
import 'echarts/theme/macarons.js';
import { AnalysisComponent } from './analysis/analysis.component';

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
);

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    ChartComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }