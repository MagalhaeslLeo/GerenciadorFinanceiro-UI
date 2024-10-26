import { RouterModule, Routes } from "@angular/router";
import { UsuarioCadComponent } from "./components/usuarioCad.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "lista",
        component: UsuarioCadComponent,
        // canActivate: [AuthGuard]

    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}