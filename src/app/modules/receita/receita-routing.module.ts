import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaCadComponent } from './Components/receitaCad/receitaCad.component';


const routes: Routes = [
  {
    path:"lista",
    component: ReceitaCadComponent,
    //canActivate: [AutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
