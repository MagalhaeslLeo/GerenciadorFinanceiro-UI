import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {
    path: 'usuario',
    loadChildren: () => import('./modules/usuario/usuario.module').then(d=>d.UsuarioModule)
  }
  //  {
  //    path: 'receita',
  //    loadChildren: () => import('./modules/receita/receita.module').then(r=>r.ReceitaModule)
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
