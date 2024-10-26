import { NgModule } from "@angular/core";
import { UsuarioRoutingModule } from "./usuario.routing.module";
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsuarioListaPage } from "./pages/usuarioLista/usuarioLista.page";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDividerModule } from "@angular/material/divider";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
// import { PickListModule } from 'primeng/picklist';


@NgModule({
    declarations: [ 
        UsuarioListaPage
     ],
    imports:[ 
        UsuarioRoutingModule, 
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatDividerModule,
        MatAutocompleteModule
        // PickListModule
     ],
    providers: []
})

export class UsuarioModule { }