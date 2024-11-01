import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { KeycloakAuthGuard, KeycloakService } from "keycloak-angular";
import { User } from "./user";
import { Utils } from "./utils";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
    protected readonly user:User,
    protected readonly utils:Utils
  ) {
    super(router, keycloak);
  }
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Definido pela classe pai
  async isAccessAllowed(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<boolean | UrlTree> { 

    if (!this.authenticated) {

      this.user.profile=null;
      let lUrlInicio:string=window.location.href;
      lUrlInicio=lUrlInicio.slice(0,lUrlInicio.indexOf('/#')+1);
      
      await this.keycloak.login({
        redirectUri: lUrlInicio,
      });
      this.user.adm = true;
    }
    else {

      //Já autenticado no keycloak. Verifica se já guardou o profile e usuario
      if (!this.user.logado) {

        let lProfile = null;
        //Obtem o profile do usuario corrente
        await this.keycloak.loadUserProfile().then(result => {
          lProfile = result;

          this.user.profile=lProfile;
          this.user.adm = true;
          this.utils.exibirInformacao(`Bem vindo ${this.user.firstName}!`)

        });

      
      }

    }

    return this.authenticated;

  }


}