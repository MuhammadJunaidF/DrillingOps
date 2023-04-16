import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { AddEventComponent } from './components/add-event/add-event/add-event.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { API_BASE_URL,EventService } from './shared/services/nswag/service-proxies';
import { environment } from 'src/environments/environment';
import { HttpInterceptors } from './interceptors/http-interceptor';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DrillingChartComponent } from './components/drilling-chart/drilling-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    AddEventComponent,
    ConfirmationDialogComponent,
    DrillingChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        // Ng zoro
        NzLayoutModule,
        NzMenuModule,
        // Charts
        NgChartsModule,
  ],
  exports: [
  ReactiveFormsModule
  ],
  providers: [
    EventService,
    { provide: 'API_BASE_URL', useFactory: getRemoteServiceBaseUrl },
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getRemoteServiceBaseUrl(): string {
  return environment.nSwagUrl;
}