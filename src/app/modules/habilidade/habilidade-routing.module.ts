import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadeAtualizarComponent } from './pages/habilidade-atualizar/habilidade-atualizar.component';
import { HabilidadeCadastrarComponent } from './pages/habilidade-cadastrar/habilidade-cadastrar.component';
import { HabilidadeListarComponent } from './pages/habilidade-listar/habilidade-listar.component';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { };

const routes: Routes = [
  {
      path: 'habilidade',
      children: [
          { path: '', redirectTo: '/habilidade/lista', pathMatch: 'full' },
          { path: 'lista', component: HabilidadeListarComponent },
          { path: 'cadastrar', component: HabilidadeCadastrarComponent },
          { path: 'atualizar/:idHabilidade', component:  HabilidadeAtualizarComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabilidadeRoutingModule { }
