import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitaRoutingModule } from '../receita/receita-routing.module';
import { ReceitaCadComponent } from './Components/receitaCad/receitaCad.component';


@NgModule({
  declarations: [
    ReceitaCadComponent
  ],
  imports: [
    CommonModule,
    ReceitaRoutingModule
  ]
})
export class ReceitaModule { }
