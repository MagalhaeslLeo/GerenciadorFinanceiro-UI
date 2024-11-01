import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//Service que obtem os dados a serem utilizados como environment do arquivo contido em "/assets/env.json"
@Injectable()
export class EnvService {

  constructor(private http: HttpClient) { }

  obterEnvironment():Observable<any>{
    return this.http.get("/assets/env.json");
  }

}