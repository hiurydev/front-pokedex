import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { IHabilidade } from '../model/habilidade.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {

  constructor(private httpClient: HttpClient) { }

  salvarHabilidade(habilidade: IHabilidade): Promise<IHabilidade> {
    return this.httpClient
    .post<IHabilidade>('http://localhost:8080/habilidade/', habilidade)
    .toPromise();
  }

  atualizarHabilidade(habilidade: IHabilidade): Promise<IHabilidade> {
    return this.httpClient
    .put<IHabilidade>(`http://localhost:8080/habilidade/${habilidade.id}`, {
      nome: habilidade.nome,
      descricao: habilidade.descricao,
      pokemon: habilidade.pokemon,
    })
    .toPromise();
  }

  deletarHabilidade(id: number): Promise<IHabilidade> {
    return this.httpClient
    .delete<IHabilidade>(`http://localhost:8080/habilidade/${id}`)
    .toPromise();
  }

  getOne(id: number): Promise<IHabilidade> {
    return this.httpClient
    .get<IHabilidade>(`http://localhost:8080/habilidade/${id}`)
    .toPromise();
  }

  getAll(): Promise<IPageConfig<IHabilidade>> {
    return this.httpClient
    .get<IPageConfig<IHabilidade>>('http://localhost:8080/habilidade/')
    .toPromise();
  }
}
