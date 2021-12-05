import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/commons/services/route.service';
import { IPokemon } from '../../model/pokemon.model';
import { PokemonService } from '../../service/pokemon-service';

@Component({
  selector: 'app-pokemon-cadastrar',
  templateUrl: './pokemon-cadastrar.component.html',
  styleUrls: ['./pokemon-cadastrar.component.css']
})
export class PokemonCadastrarComponent implements OnInit {

  pokemon = {} as IPokemon;

  constructor(private pokemonService: PokemonService,
    private routeService: RouteService) { }

  ngOnInit(): void {
  }
  
  voltar() {
    this.routeService.navigate(`/pokemon/lista`);
  }

  salvar() {
    this.pokemonService.salvarPokemon(this.pokemon)
    .then(result => {
      this.routeService.navigate('/pokemon/lista/');
    })
    .catch(result => {
      console.warn(result)
    });
  }
}
