import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgGridPageComponent } from './pages/ag-grid-page/ag-grid-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'form',
    component: FormPageComponent
  },
  {
    path: 'ag-grid',
    component: AgGridPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
