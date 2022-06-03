import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'gce_caracteristicas', redirectTo: 'person/index', pathMatch: 'full'},
  { path: 'gce_caracteristicas/index', component: IndexComponent },
  { path: 'gce_caracteristicas/create', component: CreateComponent },
  { path: 'gce_caracteristicas/edit/:gce_id', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GceCaracteristicasRoutingModule { }
