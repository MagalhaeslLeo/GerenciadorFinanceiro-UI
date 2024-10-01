import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaCadComponent } from './components/despesaCad/despesa-cad/despesaCad.component';

const routes: Routes = [
  {
    path: "lista",
    component: DespesaCadComponent,
    //canActivate: [AutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaRoutingModule { }
