import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { InvalidLoginComponent } from 'src/app/login-components/invalid-login/invalid-login.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      { path: '**', component: InvalidLoginComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
