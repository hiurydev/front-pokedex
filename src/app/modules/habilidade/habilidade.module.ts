import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRouterComponent, HabilidadeRoutingModule } from './habilidade-routing.module';
import { HabilidadeListarComponent } from './pages/habilidade-listar/habilidade-listar.component';
import { FormsModule } from '@angular/forms';
import { HabilidadeCadastrarComponent } from './pages/habilidade-cadastrar/habilidade-cadastrar.component';
import { HabilidadeAtualizarComponent } from './pages/habilidade-atualizar/habilidade-atualizar.component';


@NgModule({
  declarations: [
    GenericRouterComponent,
    HabilidadeListarComponent,
    HabilidadeCadastrarComponent,
    HabilidadeAtualizarComponent
  ],
  imports: [
    CommonModule,
    HabilidadeRoutingModule,
    FormsModule
  ]
})
export class HabilidadeModule { }
