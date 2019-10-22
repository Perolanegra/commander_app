import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestService {

  server_version: string = environment.server_version;
  // Url que será utilizada para acesso ao Rest
  url: string = environment.host_rest_server;
  
 
  constructor(private httpClient: HttpClient) { }

  post(pEndpoint: string, pData: any = {}) {
    let body = new FormData();
    if (!pData) {
      for (let f in pData) {
        body.append(f, pData[f]);
      }
    }

    let headers: HttpHeaders = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post(this.url + pEndpoint, pData, { headers: headers });
  }

  public get(pEndpoint: string, pParams: any) {
    // seta o headers
    let headers: HttpHeaders = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.get(this.url + pEndpoint, { headers: headers, params: pParams });
  }

  postBlob(pUrl: string, pEndpoint: string, pData: any) {
    let body = new FormData();
    for (let f in pData) {
      body.append(f, pData[f]);
    }

    let headers: HttpHeaders = new HttpHeaders().set('Content-type', 'application/json');
  
    //Se tem accesstoken, inclui o parametro
    // if (this.globalVars.getAccessToken() != null && this.globalVars.getAccessToken() != undefined) {
    //   headers = headers.set('Authorization', 'Bearer ' + this.globalVars.getAccessToken());  
    // }

    return this.httpClient.post(pUrl + pEndpoint, body, { headers,  responseType: 'blob'});
  }


  createQueryString(pNomes: string[], pValores: any[]): string {
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

}
