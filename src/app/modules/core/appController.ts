import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, tap } from "rxjs/operators";
import { Router } from '@angular/router';
import { ModalController, LoadingController, ToastController, AlertController } from '@ionic/angular';

@Injectable()
export class AppController {
    private msg = "";

    constructor(private toastCtrl: ToastController,
    private router: Router,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingController: LoadingController) { }

    tratarErro(err): void {
        //Mensagem a ser exibida
        this.msg = err.message;

        //Erros de Response(possuem status)
        if (err.status != undefined && err.status != null) {
            if (err.status == 401) {
                let errJson = err.json();

                if (errJson.error === "invalid_token") {
                    // this.openDialogSessaoExpirada();
                    this.msg = 'Sua sessão expirou, favor realizar o login novamente.';

                } else {
                    //Token expirado			
                    this.msg = 'Acesso não autorizado, verifique seu login ou procure o suporte técnico.';
                }
            } else {
                if (err.status == 500) {
                    this.msg = 'Um problema não esperado ocorreu durante a execução do serviço. Por favor, tente novamente mais tarde.';
                } else {
                    if (err.status == 404) {
                        this.msg = 'O serviço solicitado encontra-se indisponível no momento. Por favor, tente novamente mais tarde.';
                    } else {
                        if (err.status == 0) {
                            this.msg = 'Foi impossível conectar com o servidor. Verifique sua conexão com a internet ou tente novamente mais tarde.';
                        } else {
                            if (err.status == 400 && err.error && err.error.error == 'invalid_grant') {
                                this.msg = 'Usuário ou senha não reconhecidos. Verifique os dados informados e o acionamento da tecla CAPSLOCK.';
                            } else {
                                if (err.json != undefined) {
                                    let errJson = err.json();
                                    this.msg = errJson.message || errJson.error_deion;
                                }
                            }
                        }
                    }
                }
            }

        }

        this.exibirErro(this.msg);
    }

    public async exibirErro(msg: string = "Operação Indisponível no Momento") {
        const toast = await this.toastCtrl.create({
            // header: 'Ops...',
            message: msg.length >= 75 ? "Operação Indisponível no Momento" : msg,
            position: 'bottom',
            color: "danger",
            duration: 2500,
            // mode: "ios",
            showCloseButton: true,
            closeButtonText: 'OK'
        });

        toast.present();
    }

    public async exibirSucesso(msg: string) {
        const toast = await this.toastCtrl.create({
            header: 'Toast header',
            message: 'Click to Close',
            position: 'bottom',
            buttons: [
                {
                    side: 'start',
                    icon: 'star',
                    text: 'Favorite',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        toast.present();
    }

    public async showWarning(msg: string) {
        const toast = await this.toastCtrl.create({
            message: msg.length >= 85 ? "Operação Indisponível no Momento" : msg,
            position: 'bottom',
            color: "warning",
            duration: 2500,
            showCloseButton: true,
            closeButtonText: 'OK',
            cssClass: 'toast-warning'
        });

        toast.present();
    }

    // public exibirInformacao(msg: string) {
    //     setTimeout(() => this.toastr.info(msg, ''));
    // }

    /**
     * Retorna o array ordenado.
     * @param records Array que será ordenado.
     * @param atributos Atributo(s) em que a ordenação será realizada.
     * @param direction Crescente ou decrescente. Ex: "asc", "desc".
     */
    public orderBy(records: Array<any>, atributos: string[], direction: string): any {
        let directions;
        if (direction == "asc") {
            directions = [1];
        } else {
            if (direction == "desc") {
                directions = [-1];
            }
        }
        return records.sort(function (a, b) {
            for (let i = 0; i < atributos.length; i++) {
                if (a[atributos[i]] < b[atributos[i]]) {
                    return -1 * directions[i]
                }
                else if (a[atributos[i]] > b[atributos[i]]) {
                    return 1 * directions[i];
                }
            }
            return 0;
        });
    }

    /** 
    * @pFormControl Parâmetro que será observado obtendo os valores quando houver modificação.
    * @pFuncaoTratamento Função responsável por obter os registros de um `Autocomplete`
    * @pTamanhoMinimo Quantidade mínima de caractere digitado para efetuar a requisição, Default: 3.
    * @author igor.alves
   */
    public tratarAutocomplete(pFormControl: AbstractControl, pFuncaoTratamento, pTamanhoMinimo: number = 3) {
        pFormControl.valueChanges
            .pipe(
                debounceTime(500),
                tap(async pValue => {
                    if (pValue && pValue.length >= pTamanhoMinimo && pValue != null) {
                        // const lDialog = this.openDialogAguarde();
                        try {
                            await pFuncaoTratamento(pValue);
                        } catch (err) {
                            this.tratarErro(err);
                        } finally {
                            // lDialog.close();
                        }
                    }
                })
            ).subscribe();
    }

    public getStringStorage(value: string): string {
        return localStorage.getItem(value);
    }

    public getTableStorage(): Array<any> {
        return JSON.parse(localStorage.getItem('tableProducts'));
    }

    /**
    * Retorna para uma nova rota de navegação.
    * @param pPage Recebe uma string como parâmetro que faz referência a rota a ser navegada.
    * @author igor.alves
    */
    public async navigate(pPage: string, pParams = {}) {
        await this.router.navigate(['/' + pPage, pParams]).catch(err => {
            this.tratarErro(err);
            console.log('erro navigate: ', err);
        });
    }

    /**
    * Retorna a nova String sem os parâmetros de caracteres passados.
    * @param pStr String que deseja ser alterada.
    * @param pArray Array de caracteres que deseja retirar da String passada.
    * @author igor.silva
    */
    public removeCpfFormat(pStr: string, pArray: Array<any>) {
        let lStr = pStr;
        let lReplace;
        let lReg;

        pArray.forEach(item => {
            if (pStr != undefined && pStr != null) {
                lReplace = item;
                if (item == ".") {
                    lReplace = /\./;
                }

                lReg = new RegExp(lReplace, "g");
                lStr = lStr.replace(lReg, '');
            }
        });

        return lStr;
    }

    downloadArquivo(pNome: string, pMimeType: string, pResp: any) {
        // const lDialog = this.openDialogAguarde();
        try {
            const blob = new Blob([pResp], { type: pMimeType });
            let nomeArquivo = pNome;

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, nomeArquivo);
            } else {
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = nomeArquivo;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        } catch (err) {
            this.tratarErro(err);
        } finally {
            // lDialog.close();
        }
    }

    /**
    * Retorna um objeto com as propriedades de ano, mês e dia da Data passada.
    * @param pDataBr String da data em formato br. Exemplo: 07/08/2019 ou 07-08-2019.
    * @author igor.alves
    */
    obterAnoMesDia(pDataBr: string): Object {
        let lObjRetorno: any = {
            dia: new String(),
            mes: new String(),
            ano: new String()
        };

        for (let i = 0; i < pDataBr.length; i++) {
            if (i < 2) {
                lObjRetorno.dia += pDataBr.charAt(i);
            }
            else if (i > 2 && i < 5) {
                lObjRetorno.mes += pDataBr.charAt(i);
            }
            else if (i > 5 && i < 10) {
                lObjRetorno.ano += pDataBr.charAt(i);
            }
        }

        return lObjRetorno;
    }

    criarParamsEndpoint(pNomes: string[], pValores: any[]): string { // Encoda os params na URI para concatenar na QueryString.
        var lRetorno = '';
        for (let i = 0; i < pNomes.length; i++) {
            if (pValores[i] != undefined && pValores[i] != null) {
                if (i > 0) {
                    lRetorno += '&';
                }
                lRetorno += pNomes[i] + '=' + encodeURIComponent(pValores[i]);
            }
        }

        return lRetorno;
    }

    public presentAlertConfirm(header: string = null, msg: string = null, cssClass: string = 'secondary'): Promise<any> {
       return new Promise(async (resolve, reject) => {
           msg = msg ? msg : 'Deseja confirmar a operação ?';
           const alert = await this.alertCtrl.create({
             header: header,
             message: `<strong>${msg}</strong>`,
             buttons: [
               {
                 text: 'Cancelar',
                 role: 'cancel',
                 cssClass: cssClass,
                 handler: (blah) => {
                   console.log('Usuário clicou em cancelar.');
                   resolve(false);
                 }
               }, {
                 text: 'Sim',
                 handler: () => {
                   console.log('Usuário clicou em confirmar');
                   resolve(true);
                 }
               }
             ]
           });
           
           return await alert.present();
       });
    }

    public async openModal(pPage, pParams) {
        const modal = await this.modalCtrl.create({
            component: pPage,
            componentProps: pParams
        });

        return await modal.present();
    }

    async presentLoadingDefault() {
        const loading = await this.loadingController.create({
            spinner: 'dots',
            message: 'Processando...',
            translucent: true,
            //   showBackdrop: true,
            // cssClass: 'custom-class custom-loading'
        });

        await loading.present();

        return loading;
    }

}