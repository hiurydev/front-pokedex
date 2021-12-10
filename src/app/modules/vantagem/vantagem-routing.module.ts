import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VantagemAtualizarComponent } from './pages/vantagem-atualizar/vantagem-atualizar.component';
import { VantagemCadastrarComponent } from './pages/vantagem-cadastrar/vantagem-cadastrar.component';
import { VantagemListarComponent } from './pages/vantagem-listar/vantagem-listar.component';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { };


const routes: Routes = [
  {
      path: 'vantagem',
      children: [
          { path: '', redirectTo: '/vantagem/lista', pathMatch: 'full' },
          { path: 'lista', component: VantagemListarComponent },
          { path: 'cadastrar', component: VantagemCadastrarComponent },
          { path: 'atualizar/:idVantagem', component:  VantagemAtualizarComponent}
      ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VantagemRoutingModule { }
