import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { MatTabControl } from "src/app/core/matTabConrtol";
import { Utils } from "src/app/core/utils";

@Component({
    selector: 'usuarioListaPage',
    templateUrl: './usuarioLista.page.html',
    styleUrls: ['./usuarioLista.page.scss']
})

export class UsuarioListaPage implements OnInit {

    //Área de atributos, objetos e variáveis

    private _registros: any | undefined;

    nomeFiltro: any[] = [];
    filtroTodosNome: any[] = [];

    emailFiltro: any[] = [];
    filtroTodosEmail: any[] = [];

    senhaFiltro: any[] = [];
    filtroTodasSenha: any[] = [];

    formFiltro: FormGroup;
    resultadoFiltro: any[] = [];

    private colunasConfig = [
        {
            atributo: 'nome',
            titulo: 'Nome do Usuário',
            innerHTML: (reg: any) => `${reg.nome}`
        },

        {
            atributo: 'email',
            titulo: 'Email do Usuário',
            innerHTML: (reg: any) => `${reg.email}`
        },

        {
            atributo: 'senha',
            titulo: 'Senha do Usuário',
            innerHTML: (reg: any) => `${reg.senha}`
        }
    ];

    tabControl : MatTabControl = new MatTabControl(this.colunasConfig)

    constructor(
        protected router: Router,
        protected formBuilder: FormBuilder,
        protected utils: Utils
    ) {
        this.formFiltro = this.CriarForm();
        this.utils.tratarAutoCompleteEntidade(this.formFiltro.controls['nomeUsuario'],
            this.formFiltro.controls['idUsuario'], this.aplicarFiltroNome.bind(this), 0);

        this.utils.tratarAutoCompleteEntidade(this.formFiltro.controls['emailUsuario'],
            this.formFiltro.controls['idEmail'], this.aplicarFiltroEmail.bind(this), 0);

        this.utils.tratarAutoCompleteEntidade(this.formFiltro.controls['senhaUsuario'],
            this.formFiltro.controls['idSenha'], this.aplicarFiltroSenha.bind(this), 0);
    }

    //Área de tratamento autocomplete


    ngOnInit(): void { }

    private CriarForm(): FormGroup {
        return this.formBuilder.group({
            nomeUsuario: [null, []],
            idUsuario: [null, []],

            emailUsuario: [null, []],
            idEmail: [null, []],

            senhaUsuario: [null, []],
            idSenha: [null, []]
        },
            { updateOn: "change" }
        );
    }

    atualizarRegistros() {

    }

    
    inserir() {
        this.router.navigate(['usuario', 'det']);
    }

    alterar(pRegistro: any) {
        this.router.navigate(['usuario', 'det', pRegistro.id]);
    }

    excluir(pRegistros: any[]) {

    }

    get registro(): any[] {
        return this._registros;
    }

    AplicarFiltro() {
        this.resultadoFiltro = this.registro;
        const lNome = this.formFiltro.controls['nomeUsuario'].value;
        const lEmail = this.formFiltro.controls['emailUsuario'].value;
        const lSenha = this.formFiltro.controls['senhaUsuario'].value;

        if (lNome !== '' && lNome !== undefined && lNome !== null) {
            const nomeString = `${lNome.nome}`;
            this.resultadoFiltro = this.resultadoFiltro.filter(f => {
                const registroNomeString = `${f.nome}`;
                return registroNomeString.includes(nomeString);
            });
        }

        if (lEmail !== '' && lEmail !== undefined && lEmail !== null) {
            const emailString = `${lEmail.email}`;
            this.resultadoFiltro = this.resultadoFiltro.filter(f => {
                const registroEmailString = `${f.email}`;
                return registroEmailString.includes(emailString);
            });
        }

        if (lSenha !== '' && lSenha !== undefined && lSenha !== null) {
            const senhaString = `${lSenha.senha}`;
            this.resultadoFiltro = this.resultadoFiltro.filter(f => {
                const registroSenhaString = `${f.senha}`;
                return registroSenhaString.includes(senhaString);
            });
        }
    }

    aplicarFiltroNome(pNome: any) {
        this.nomeFiltro = this.filtroTodosNome.filter(f => {
            const usuarioString = `${f.nome}`;
            return usuarioString.includes(pNome);
        });
    }

    aplicarFiltroEmail(pEmail: any) {
        this.emailFiltro = this.filtroTodosEmail.filter(f => {
            const usuarioString = `${f.email}`;
            return usuarioString.includes(pEmail);
        });
    }

    aplicarFiltroSenha(pSenha: any) {
        this.senhaFiltro = this.filtroTodasSenha.filter(f => {
            const usuarioString = `${f.senha}`;
            return usuarioString.includes(pSenha);
        });
    }

    obterNome(pEntidade: any): any {
        return pEntidade ? `${pEntidade.nome}` : undefined;
    }

    obterEmail(pEntidade: any): any {
        return pEntidade ? `${pEntidade.email}` : undefined;
    }

    obterSenha(pEntidade: any): any {
        return pEntidade ? `${pEntidade.senha}` : undefined;
    }
}