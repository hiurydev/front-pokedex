import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { IPokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  salvarPokemon(pokemon: IPokemon): Promise<IPokemon> {
    return this.httpClient
    .post<IPokemon>('http://localhost:8080/pokemon/', pokemon)
    .toPromise();
  }

  atualizarPokemon(pokemon: IPokemon): Promise<IPokemon> {
    return this.httpClient
    .put<IPokemon>(`http://localhost:8080/pokemon/${pokemon.id}`, {
      nome: pokemon.nome,
      porte: pokemon.porte,
      tipoPokemon: pokemon.tipoPokemon
    })
    .toPromise();
  }

  deletarPokemon(id: number): Promise<IPokemon> {
    return this.httpClient
    .delete<IPokemon>(`http://localhost:8080/pokemon/${id}`)
    .toPromise();
  }

  getOne(id: number): Promise<IPokemon> {
    return this.httpClient
    .get<IPokemon>(`http://localhost:8080/pokemon/${id}`)
    .toPromise();
  }

  getAll(): Promise<IPageConfig<IPokemon>> {
    return this.httpClient
    .get<IPageConfig<IPokemon>>('http://localhost:8080/pokemon/')
    .toPromise();
  }
}
