import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/commons/services/route.service';
import { IPokemon } from 'src/app/modules/pokemon/model/pokemon.model';
import { PokemonService } from 'src/app/modules/pokemon/service/pokemon-service';
import { IHabilidade } from '../../model/habilidade.model';
import { HabilidadeService } from '../../service/habilidade-service';

@Component({
  selector: 'app-habilidade-atualizar',
  templateUrl: './habilidade-atualizar.component.html',
  styleUrls: ['./habilidade-atualizar.component.css']
})
export class HabilidadeAtualizarComponent implements OnInit {

  habilidade = {} as IHabilidade;
  pokemons: IPokemon[] = [];

  constructor(private habilidadeService: HabilidadeService,
    private pokemonService: PokemonService,
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOne(this.activatedRoute.snapshot.params.idHabilidade);
    this.pokemonService.getFullPokemon()
    .then(result => {
      this.pokemons = result;
    })
  }

  voltar() {
    this.routeService.navigate(`/habilidade/lista`);
  }

  atualizarHabilidade(habilidade: IHabilidade) {
    this.habilidadeService.atualizarHabilidade(habilidade)
    .then(result => {
      this.routeService.navigate('/habilidade/lista/');
    })
    .catch(result => {
      console.warn(result)
    });
  }

  getOne(id: number) {
    this.habilidadeService.getOne(id)
    .then((result: any) => {
      this.habilidade = result;
    })
  }

}
