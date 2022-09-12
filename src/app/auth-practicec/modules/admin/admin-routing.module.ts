import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponentComponent } from '../components/home-component/home-component.component';
import { ServicesComponent } from '../components/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
    children: [
      { path: '', redirectTo: '/admin/services', pathMatch: 'full' },
      {
        path: 'services',
        component: ServicesComponent,
      },
      { path: 'contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
