import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaRoutingModule } from './despesa.routing.module';
import { DespesaCadComponent } from './components/despesaCad/despesa-cad/despesaCad.component';




@NgModule({
  declarations: [
    DespesaCadComponent
  ],

  imports: [
    CommonModule,
    DespesaRoutingModule
  ]
})
export class DespesaModule{ }
