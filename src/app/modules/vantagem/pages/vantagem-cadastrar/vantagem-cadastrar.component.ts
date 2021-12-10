import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/commons/services/route.service';
import { IPokemon } from 'src/app/modules/pokemon/model/pokemon.model';
import { PokemonService } from 'src/app/modules/pokemon/service/pokemon-service';
import { IVantagem } from '../../model/vantagem.model';
import { VantagemService } from '../../service/vantagem-service';

@Component({
  selector: 'app-vantagem-cadastrar',
  templateUrl: './vantagem-cadastrar.component.html',
  styleUrls: ['./vantagem-cadastrar.component.css']
})
export class VantagemCadastrarComponent implements OnInit {

  vantagem = {} as IVantagem;
  pokemons: IPokemon[] = [];

  constructor(private pokemonService: PokemonService,
    private vantagemService: VantagemService,
    private routeService: RouteService) { }

  ngOnInit(): void {
    this.pokemonService.getFullPokemon()
    .then(result => {
      this.pokemons = result;
    })
  }
  
  voltar() {
    this.routeService.navigate(`/vantagem/lista`);
  }

  salvar() {
    this.vantagemService.salvarVantagem(this.vantagem)
    .then(result => {
      this.routeService.navigate('/vantagem/lista/');
    })
    .catch(result => {
      console.warn(result)
    });
  }

}
