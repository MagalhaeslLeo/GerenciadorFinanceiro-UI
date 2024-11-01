import { Injectable } from "@angular/core";

import { environment } from "src/environment/environment";
import { ServiceUtil } from "./serviceUtil";

@Injectable()
export class FarolControleAcessoService {

    server: string = environment.farol_controleacesso_api_url;

    //Url que será utilizada para acesso ao Rest
    url: string = this.server + "api/";

    constructor(private serviceUtil: ServiceUtil) { }


    post(pEndpoint: string, pUrlParams?: { [key: string]: any }, pDataJson?: any, pFeedback: boolean = true) {
        const lUrlParams = this.formatarUrlParams(pUrlParams, pFeedback)

        return this.serviceUtil.post(this.url, pEndpoint + (lUrlParams ? "?" + lUrlParams : ""), this.serviceUtil.formatarBodyParams(pDataJson));

    }

    get(pEndpoint: string, pUrlParams?: { [key: string]: any }, pFeedback: boolean = true) {
        const lUrlParams = this.formatarUrlParams(pUrlParams, pFeedback)

        return this.serviceUtil.get(this.url, pEndpoint + (lUrlParams ? "?" + lUrlParams : ""));

    }

    postBlob(pEndpoint: string, pUrlParamsJson?: { [key: string]: any }, pDataJson?: any) {
        const lUrlParams = pUrlParamsJson ? this.serviceUtil.formatarParamsJson(pUrlParamsJson) : null;
        return this.serviceUtil.postBlob(this.url, pEndpoint + (lUrlParams ? "?" + lUrlParams : ""), this.serviceUtil.formatarBodyParams(pDataJson));
    }

    getBlob(pEndpoint: string, pUrlParams: { [key: string]: any }) {
        const lUrlParams = this.serviceUtil.formatarParamsJson(pUrlParams);
        return this.serviceUtil.getBlob(this.url, pEndpoint + (lUrlParams ? "?" + lUrlParams : ""));
    }

    formatarUrlParams(pUrlParams?: { [key: string]: any }, pFeedback: boolean = true) {
        let lUrlParams = null;

        //Trata o parâmetro especia "_feedbak" para o controle do AguardeDialog
        if (pUrlParams) {
            if (!pFeedback) {
                pUrlParams['_feedback'] = false;
            }
            lUrlParams = this.serviceUtil.formatarParamsJson(pUrlParams);
        } else {
            if (!pFeedback) {
                lUrlParams = this.serviceUtil.formatarParamsJson({ _feedback: false });
            }
        }
        return lUrlParams;
    }


}