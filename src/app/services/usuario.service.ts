import { Injectable } from "@angular/core";
import { ServiceBase } from "../core/serviceBase";
import { Observable } from "rxjs";

@Injectable()
export class UsuarioService{
    constructor(private service : ServiceBase){}

    obterPorId(pId : number): Observable<any>{
        return this.service.get("Usuario/ObterPorId", {id:pId})
    }

    persistir(pCadDto: any): Observable<any>{
        return this.service.post("Usuario/Persistir", pCadDto)
    }

    excluir(pId: number): Observable<any>{
        return this.service.delete("Usuario/Excluir", {id:pId})
    }
}
