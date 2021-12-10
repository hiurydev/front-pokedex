import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/commons/services/route.service';
import { IPokemon } from 'src/app/modules/pokemon/model/pokemon.model';
import { PokemonService } from 'src/app/modules/pokemon/service/pokemon-service';
import { IVantagem } from '../../model/vantagem.model';
import { VantagemService } from '../../service/vantagem-service';

@Component({
  selector: 'app-vantagem-atualizar',
  templateUrl: './vantagem-atualizar.component.html',
  styleUrls: ['./vantagem-atualizar.component.css']
})
export class VantagemAtualizarComponent implements OnInit {

  vantagem = {} as IVantagem;
  pokemons: IPokemon[] = [];

  constructor(private vantagemService: VantagemService,
    private pokemonService: PokemonService,
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOne(this.activatedRoute.snapshot.params.idVantagem);
    this.pokemonService.getFullPokemon()
    .then(result => {
      this.pokemons = result;
    })
  }

  voltar() {
    this.routeService.navigate(`/vantagem/lista`);
  }

  atualizarVantagem(vantagem: IVantagem) {
    this.vantagemService.atualizarVantagem(vantagem)
    .then(result => {
      this.routeService.navigate('/vantagem/lista/');
    })
    .catch(result => {
      console.warn(result)
    });
  }

  getOne(id: number) {
    this.vantagemService.getOne(id)
    .then((result: any) => {
      this.vantagem = result;
    })
  }

}
