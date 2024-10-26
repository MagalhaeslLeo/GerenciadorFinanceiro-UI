import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Utils } from "src/app/core/utils";

@Component({
    selector: 'usuarioListaPage',
    templateUrl: './usuarioLista.page.html',
    styleUrls: ['./usuarioLista.page.scss']
})

export class UsuarioListaPage implements OnInit { 

    //Área de atributos, objetos e variáveis
    usuarioFiltro: any[] = [];
    formFiltro: FormGroup;

    constructor( 
        protected router : Router,
        protected formBuilder : FormBuilder,
        protected utils : Utils
    ){
        this.formFiltro = this.CriarForm();
        this.utils.tratarAutoCompleteEntidade(this.formFiltro.controls['obterUsuario'],
            this.formFiltro.controls['idUsuario'], this.aplicarFiltroUsuario.bind(this), 0);
    }

    //Área de tratamento autocomplete


    ngOnInit(): void {}

    private CriarForm() : FormGroup{
        return this.formBuilder.group({
            nomeUsuario: [null, []],
            idUsuario: [null, []]
        },
        {updateOn : "change"}
    );
    }

    AplicarFiltro(){
        
    }

    aplicarFiltroUsuario(){

    }

    obterUsuario(pEntidade:any): any{
        return pEntidade ? `${pEntidade.nome}` : undefined;
    }
}