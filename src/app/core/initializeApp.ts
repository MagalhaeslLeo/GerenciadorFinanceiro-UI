import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environment/environment";
import { EnvService } from "./env.service";
import { switchMap } from "rxjs";

//Funcao utilizada para iniciar os recursos necessários antes de iniciar o App
//Declarada no app.module como APP_INITIALIZER
export function initializeApp(
  keycloak: KeycloakService, envService: EnvService
) {

  return () =>
    envService.obterEnvironment().pipe(switchMap(async env => {

      //Inicia o environment com os dados do env
      Object.assign(environment, env)

      //Inicia o keycloak com os dados obtidos
      await keycloak.init({
        config: {
          url: environment.keycloak_url,
          realm: environment.keycloak_realm,
          clientId: environment.clientId

        },
        initOptions: {
          onLoad: 'check-sso'
        },
        bearerExcludedUrls: ['/assets']
      });
    }));



}
