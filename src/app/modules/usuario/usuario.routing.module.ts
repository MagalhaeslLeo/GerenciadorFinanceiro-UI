import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsuarioListaPage } from "./pages/usuarioLista/usuarioLista.page";

const routes: Routes = [
    {
        path: "lista",
         component: UsuarioListaPage,
        // canActivate: [AuthGuard]

    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}