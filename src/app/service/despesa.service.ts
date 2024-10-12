import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceBase } from "../core/serviceBase";
@Injectable()


export class DespesaService{


    constructor(private service: ServiceBase){}

    obterPorId(pId: number) : Observable<any>{
        return this.service.get(`despesa/nomemetodo/${pId}`);
    }
    obterTodos(): Observable<any>{
        return this.service.get('despesa/nomemetodo');
    }
    persistir(pCadDto: any) : Observable<any>{
        return this.service.post(`despesa/nomemetodo/`, pCadDto);
    }
    excluir(pId: number) : Observable<any>{
        return this.service.post(`despesa/nomemetodo`, pId);
    }
}