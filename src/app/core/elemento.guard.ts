import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { User } from "./user";
import { Utils } from "./utils";

@Injectable({
  providedIn: 'root'
})
//Guard utilizado para impedir de entrar em uma tela que necessite de selecao de elemento e poder associado com o usuario corrente
export class ElementoGuard implements CanActivate {

  constructor(
    protected readonly user: User,
    protected readonly utils: Utils
  ) {

  }

  canActivate(): boolean {
    
    const lRetorno:boolean= (this.user.idElementoOrganizacional!=''&& this.user.idElementoOrganizacional!=undefined) && (this.user.poderUM!=''&&this.user.poderUM!=undefined);
    if (!lRetorno){      
        this.utils.exibirWarning("Selecione uma Câmara ou uma Prefeitura para prosseguir.");      
    }
    

    return lRetorno;

  }

}
