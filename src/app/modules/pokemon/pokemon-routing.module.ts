import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonAtualizarComponent } from './pages/pokemon-atualizar/pokemon-atualizar.component';
import { PokemonCadastrarComponent } from './pages/pokemon-cadastrar/pokemon-cadastrar.component';
import { PokemonListarComponent } from './pages/pokemon-listar/pokemon-listar.component';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { };


const routes: Routes = [
  {
      path: 'pokemon',
      children: [
          { path: '', redirectTo: '/pokemon/lista', pathMatch: 'full' },
          { path: 'lista', component: PokemonListarComponent },
          { path: 'cadastrar', component: PokemonCadastrarComponent },
          { path: 'atualizar/:idPokemon', component:  PokemonAtualizarComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
