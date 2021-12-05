import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/commons/services/route.service';
import { IPokemon } from '../../model/pokemon.model';
import { PokemonService } from '../../service/pokemon-service';

@Component({
  selector: 'app-pokemon-atualizar',
  templateUrl: './pokemon-atualizar.component.html',
  styleUrls: ['./pokemon-atualizar.component.css']
})
export class PokemonAtualizarComponent implements OnInit {

  pokemon = {} as IPokemon;

  constructor(private pokemonService: PokemonService,
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOne(this.activatedRoute.snapshot.params.idPokemon);
  }

  voltar() {
    this.routeService.navigate(`/pokemon/lista`);
  }

  atualizarPokemon(pokemon: IPokemon) {
    this.pokemonService.atualizarPokemon(pokemon)
    .then(result => {
      this.routeService.navigate('/pokemon/lista/');
    })
    .catch(result => {
      console.warn(result)
    });
  }

  getOne(id: number) {
    this.pokemonService.getOne(id)
    .then((result: any) => {
      this.pokemon = result;
    })
  }

}
