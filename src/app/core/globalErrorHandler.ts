import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Utils } from './utils';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {


    constructor(@Inject(Injector) private readonly injector: Injector) {
    }

    handleError(error: any): void {
        this.tratarErro(error);
    }

    tratarErro(err:any): void {

        //Extrai o "rejection" do erro, caso exista(ex.:)
        if (err.rejection) {
            err = err.rejection;
        }
        //Para erros internos com rejection do Javascript, o rejection é apenas uma string com a mensagem
        if (err.constructor.name == "String") {
            err = new Error(err)
        }

        let msg = err.message || err.error_description || err.rejection

        //Erros de Response(possuem status) resultado de retorno de chamada de rests
        if (err.status != undefined && err.status != null) {
            if (err.status == 401) {

                if (err.error.error == "invalid_token" || err.error.cause.message == "Full authentication is required to access this resource") {
                    msg = 'Sua sessão expirou, favor realizar o login novamente.';
                } else {
                    if (err.error) {
                        //Erro de autorização gerado por regras do sistema
                        msg = err.error.message;
                    } else {
                        msg = 'Acesso não autorizado, verifique seu login ou procure o suporte técnico.';
                    }
                }
            } else {
                if (err.status == 500) {
                    msg = 'Um problema não esperado ocorreu durante a execução do serviço. Por favor, tente novamente mais tarde.';
                } else {
                    if (err.status == 404) {
                        msg = 'O serviço solicitado encontra-se indisponível no momento. Por favor, tente novamente mais tarde.';
                    } else {
                        if (err.status == 0) {
                            msg = 'Foi impossível conectar com o servidor. Verifique sua conexão com a internet ou tente novamente mais tarde.';
                        } else {
                            if (err.status == 400) {
                                if (err.error && err.error.error == 'invalid_grant') {
                                    
                                    msg = 'Usuário ou senha não reconhecidos. Verifique os dados informados e o acionamento da tecla CAPSLOCK.';
                                    
                                } else {
                                    if (err.error && typeof err.error.text === 'function') {
                                        const lErroBlob: Promise<any> = err.error.text();
                                        lErroBlob.then(result => { this.tratarErro(JSON.parse(result)) });
                                        return;
                                    } else {
                                        msg = err.error.message
                                    }
                                }
                            } else {
                                //Verifica se é erro de falta de atualização de .js. Caso positivo, faz reload
                                const chunkFailedMessage = /Loading chunk [\d]+ failed/;
                                if (chunkFailedMessage.test(err.message)) {
                                    window.location.reload();
                                    return;
                                } else {
                                    if (err.json != undefined) {
                                        const errJson = err.error.json();
                                        msg = errJson.message || errJson.error_description
                                    } else {
                                        msg = err.message || err.error_description
                                    }

                                }
                            }
                        }
                    }
                }
            }

        }else{
            //DMN-52043 Ao implantar novas versões,  cache do browser pode manter JSs antigos, provocando o erro de "error loading chunck..."
            //Ver https://stackoverflow.com/questions/49198268/how-to-overcome-loading-chunk-failed-with-angular-lazy-loaded-modules
            const lChunkFailedMessage = /Loading chunk [\d]+ failed/;
            if (lChunkFailedMessage.test(msg)) {
                //Força reload para que os JS atualizados seja carregados
                window.location.reload();
                return;
            } 
             //Trata o erro do keycloack quando não consegue validar o acesso ao rest
            //Ocorre, por exemplo, quando o servidor REST está fora do ar
            if(msg.includes("during access validation")){
                msg="Foi impossível validar o acesso ao serviço solicitado. Por favor, tente mais tarde ou entre em contato com o suporte técnico.";
                err=new Error(msg);
            }
        }

        this.exibirErro(msg, true);
    }


    exibirErro(msg: string, confirmar: boolean) {
        if(!confirmar){
            if (this.toastr) {
                setTimeout(() => this.toastr.error(msg, ''));
                 //Trata o erro do keycloack quando não consegue validar o acesso ao rest
                //Ocorre, por exemplo, quando o servidor REST está fora do ar
                if(msg.includes("during access validation")){
                    msg="Foi impossível validar o acesso ao serviço solicitado. Por favor, tente mais tarde ou entre em contato com o suporte técnico.";
                    
                }
            } else {
                console.log('Erro:', msg);
            }

        }else{
            this.utils.abrirDialogErroConfirmacao(msg);    
        }

    }

    private get toastr(): ToastrService {
        return this.injector.get(ToastrService);
    }

    private get utils(): Utils{
        return this.injector.get(Utils);
    }

}