import { Component, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { RouteService } from 'src/app/commons/services/route.service';
import { IPokemon } from '../../model/pokemon.model';
import { PokemonService } from '../../service/pokemon-service';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {

    constructor(private pokemonService: PokemonService,
      private routeService: RouteService) { }

    pokemons = {} as IPageConfig<IPokemon>;

    ngOnInit(): void {
      this.getAll();
    }

    getAll() {
      this.pokemonService.getAll()
      .then(result => {
        this.pokemons = result;
      })
    }

    novoPokemon() {
      this.routeService.navigate(`/pokemon/cadastrar`);
    }

    editarPokemon(pokemon: any) {
      this.routeService.navigate(`/pokemon/atualizar/${pokemon.id}`);
    }

    deletarPokemon(pokemon: any) {
      this.pokemonService.deletarPokemon(pokemon.id)
      .then((result: any) => {
        alert('Deu liga')
      })
    }
}
