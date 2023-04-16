import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './components/events-list/events-list.component';
import { AddEventComponent } from './components/add-event/add-event/add-event.component';
import { DrillingChartComponent } from './components/drilling-chart/drilling-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'add', component: AddEventComponent },
  {path: 'events', component: EventsListComponent},
  {path: 'chart', component: DrillingChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }