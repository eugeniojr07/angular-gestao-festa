import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Convidado } from './convidado';
@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {



  convidadosUrl ='http://localhost:8080/convidados';

  constructor(private httpClient: HttpClient) { }

    listar():Observable<Convidado[]>{
      return this.httpClient.get<Convidado[]>(`${this.convidadosUrl}`);
    }

    criarConvidado(convidado: Convidado): Observable<any>{
      return this.httpClient.post(`${this.convidadosUrl}`, convidado);
    }

    getConvidadoById(id: number): Observable<Convidado>{
      return this.httpClient.get<Convidado>(`${this.convidadosUrl}/${id}`);
    }

    atualizarConvidado(id: number, convidado: Convidado): Observable<Object>{
      return this.httpClient.put(`${this.convidadosUrl}/${id}`, convidado);
    }

    deletarConvidado(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.convidadosUrl}/${id}`);
    }

}
