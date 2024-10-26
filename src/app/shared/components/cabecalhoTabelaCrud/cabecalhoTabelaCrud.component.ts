import { SelectionModel } from "@angular/cdk/collections";
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: 'cabecalhoTabelaCrud',
    templateUrl: './cabecalhoTabelaCrud.component.html',
    styleUrls: ['./cabecalhoTabelaCrud.component.scss']
})
export class CabecalhoTabelaCrudComponent {
    constructor() { }
    @Input() dataSource: MatTableDataSource<any> | null = null;
    @Input() selection: SelectionModel<any> | null = null;
    
    @Input() exibeInserir:boolean=true;
    @Output() inserir = new EventEmitter();
    @Input() exibeExcluir:boolean=true;
    @Output() excluir = new EventEmitter<any[]>();
    @Input() exibeAlterar:boolean=true;
    @Output() alterar = new EventEmitter<any>();
    @Input() exibeAtualizar:boolean=true;
    @Output() atualizar = new EventEmitter();

    @Input() exibeMenuOpcoes: boolean = true;    

    inserirClick() {
        this.inserir.emit();
    }

    excluirClick() {
        this.excluir.emit(this.selection?.selected);
    }

    alterarClick() {
        this.alterar.emit(this.selection?.selected);
    }

    atualizarClick() {
        this.atualizar.emit();
    }


    get textoRegistros() {
        if (!this.dataSource|| !this.dataSource.data|| !this.dataSource.data) {
            return "<<Filtro Pendente>>";
        } else {
            if (this.dataSource.data.length == 1) {
                return "1 registro";

            } else {
                if (this.dataSource.data.length > 1) {
                    return this.dataSource.data.length + " registros";

                } else {
                    return "<<Nenhum registro encontrado>>";
                }
            }


        }


    }

    get textoSelecionados() {
        if (this.selection) {
            if (this.selection.selected.length > 1) {
                return this.selection.selected.length + " selecionados";
            }
            if (this.selection.selected.length == 1) {
                return "1 selecionado";
            }
        }
        return "nenhum selecionado"
    }

}