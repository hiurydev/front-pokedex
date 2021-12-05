import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRouterComponent, PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListarComponent } from './pages/pokemon-listar/pokemon-listar.component';
import { PokemonCadastrarComponent } from './pages/pokemon-cadastrar/pokemon-cadastrar.component';
import { FormsModule } from '@angular/forms';
import { PokemonAtualizarComponent } from './pages/pokemon-atualizar/pokemon-atualizar.component';


@NgModule({
  declarations: [
    GenericRouterComponent,
    PokemonListarComponent,
    PokemonCadastrarComponent,
    PokemonAtualizarComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule
  ]
})
export class PokemonModule { }
