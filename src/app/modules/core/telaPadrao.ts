import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

export abstract class TelaPadrao {

    private _respResolvers;
    public maskConfig = {
        mask: [
        new RegExp('\\d'),
        new RegExp('\\d'),
        '/',
        new RegExp('\\d'),
        new RegExp('\\d'),
        '/',
        new RegExp('\\d'),
        new RegExp('\\d'),
        new RegExp('\\d'),
        new RegExp('\\d')
        ],
        showMask: false,
        guide: false,
        placeholderChar: '_'
    };

    constructor(protected route: ActivatedRoute) {
        this._respResolvers = this.route.snapshot.data;
    }

    //Método que obtém a resposta dos resolvers.
    get respResolvers() {
        return this._respResolvers;
    }

    //Retorna o JSON de parâmetros criados a partir do form recebido
    criarParamsRotaFiltro(pForm:FormGroup) {
        let lControls = Object.keys(pForm.controls);
        let lParams = {};
        lControls.forEach(index => {
            if(pForm.controls[index].value) {
                lParams[index] = pForm.controls[index].value;
            }
            else{
                lParams[index] = null; 
            }
        });

        return lParams;
    }
    
    //Retorna o JSON de parâmetros criados a partir do formbuilder de filtro
    criarParamsRota(pParams:string[],pValues:any[]) {
        let lParams = {};
        let i=0;
        pParams.forEach(lParam => {            
            lParams[lParam] = pValues[i];            
            i++;           
        });

        return lParams;
    }

}