import { NgModule } from "@angular/core";
import { UsuarioRoutingModule } from "./usuario.routing.module";
import { UsuarioCadComponent } from "./components/usuarioCad.component";
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
    declarations: [ UsuarioCadComponent ],
    imports:[ UsuarioRoutingModule, 
        MatTableModule,
        MatInputModule,
        MatFormFieldModule
     ],
    providers: []
})

export class UsuarioModule { }