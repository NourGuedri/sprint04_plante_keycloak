import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantesComponent } from './plantes/plantes.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: 'plantes', component: PlantesComponent ,canActivate:[AuthGuard],
    data : {roles:['ADMIN']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
