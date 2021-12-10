import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRouterComponent, VantagemRoutingModule } from './vantagem-routing.module';
import { VantagemListarComponent } from './pages/vantagem-listar/vantagem-listar.component';
import { FormsModule } from '@angular/forms';
import { VantagemCadastrarComponent } from './pages/vantagem-cadastrar/vantagem-cadastrar.component';
import { VantagemAtualizarComponent } from './pages/vantagem-atualizar/vantagem-atualizar.component';


@NgModule({
  declarations: [
    GenericRouterComponent,
    VantagemListarComponent,
    VantagemCadastrarComponent,
    VantagemAtualizarComponent
  ],
  imports: [
    CommonModule,
    VantagemRoutingModule,
    FormsModule
  ]
})
export class VantagemModule { }
