import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { IVantagem } from '../model/vantagem.model';

@Injectable({
  providedIn: 'root'
})
export class VantagemService {

  constructor(private httpClient: HttpClient) { }

  salvarVantagem(vantagem: IVantagem): Promise<IVantagem> {
    return this.httpClient
    .post<IVantagem>('http://localhost:8080/vantagem/', vantagem)
    .toPromise();
  }

  atualizarVantagem(vantagem: IVantagem): Promise<IVantagem> {
    return this.httpClient
    .put<IVantagem>(`http://localhost:8080/vantagem/${vantagem.id}`, {
      pro: vantagem.pro,
      imune: vantagem.imune,
      tipoPokemon: vantagem.tipoPokemon,
      pokemon: vantagem.pokemon
    })
    .toPromise();
  }

  deletarVantagem(id: number): Promise<IVantagem> {
    return this.httpClient
    .delete<IVantagem>(`http://localhost:8080/vantagem/${id}`)
    .toPromise();
  }

  getOne(id: number): Promise<IVantagem> {
    return this.httpClient
    .get<IVantagem>(`http://localhost:8080/vantagem/${id}`)
    .toPromise();
  }

  getAll(): Promise<IPageConfig<IVantagem>> {
    return this.httpClient
    .get<IPageConfig<IVantagem>>('http://localhost:8080/vantagem/')
    .toPromise();
  }
}
