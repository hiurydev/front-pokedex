import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/commons/services/route.service';
import { IPokemon } from 'src/app/modules/pokemon/model/pokemon.model';
import { PokemonService } from 'src/app/modules/pokemon/service/pokemon-service';
import { IHabilidade } from '../../model/habilidade.model';
import { HabilidadeService } from '../../service/habilidade-service';

@Component({
  selector: 'app-habilidade-cadastrar',
  templateUrl: './habilidade-cadastrar.component.html',
  styleUrls: ['./habilidade-cadastrar.component.css']
})
export class HabilidadeCadastrarComponent implements OnInit {

  habilidade = {} as IHabilidade;
  pokemons: IPokemon[] = [];

  constructor(private pokemonService: PokemonService,
    private habilidadeService: HabilidadeService,
    private routeService: RouteService) { }

  ngOnInit(): void {
    this.pokemonService.getFullPokemon()
    .then(result => {
      this.pokemons = result;
    })
  }
  
  voltar() {
    this.routeService.navigate(`/habilidade/lista`);
  }

  salvar() {
    this.habilidadeService.salvarHabilidade(this.habilidade)
    .then(result => {
      this.routeService.navigate('/habilidade/lista/');
    })
    .catch(result => {
      console.warn(result)
    });
  }
}
