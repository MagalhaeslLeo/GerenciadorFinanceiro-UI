import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SafeHtmlPipe } from './pipes/safeHtml/safeHtml.pipe';

import { AguardeDialog } from './dialogs/aguarde/aguarde.dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmacaoDialog } from './dialogs/confirmacao/confirmacao.dialog';
import { ErroConfirmacaoDialog } from './dialogs/erroConfirmacao/erroConfirmacao.dialog'; 

import { ValidacaoCampoComponent } from './components/validacaoCampo/validacaoCampo.component';
import { RodapeCadComponent } from './components/rodapeCad/rodapeCad.component';
import { TabelaCrudComponent } from './components/tabelaCrud/tabelaCrud.component';
import { TabelaCrudInputComponent } from './components/tabelaCrudInput/tabelaCrudInput.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CabecalhoTabelaCrudComponent } from './components/cabecalhoTabelaCrud/cabecalhoTabelaCrud.component';
import { CabecalhoTabelaCrudCustomComponent } from './components/cabecalhoTabelaCrudCustom/cabecalhoTabelaCrudCustom.component'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TabelaCrudSimpleComponent } from './components/tabelaCrudSimple/tabelaCrudSimple.component';





@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSortModule,
        MatSelectModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        SafeHtmlPipe,
        AguardeDialog,
        ConfirmacaoDialog,
        ErroConfirmacaoDialog,
        CabecalhoTabelaCrudComponent,
        CabecalhoTabelaCrudCustomComponent,
        ValidacaoCampoComponent,
        RodapeCadComponent,
        TabelaCrudComponent,
        TabelaCrudInputComponent,
        TabelaCrudSimpleComponent
        
        
    ],
    exports: [
        CabecalhoTabelaCrudComponent,
        ValidacaoCampoComponent,
        RodapeCadComponent,
        TabelaCrudComponent,
        TabelaCrudInputComponent,
        TabelaCrudSimpleComponent
        
    ],
    providers: [

    ]
})
export class SharedModule { }
