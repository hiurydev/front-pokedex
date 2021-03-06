import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { ProdutoModule } from './modules/produto/produto.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { HabilidadeModule } from './modules/habilidade/habilidade.module';
import { VantagemModule } from './modules/vantagem/vantagem.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CategoriaModule,
    ProdutoModule,
    PokemonModule,
    HabilidadeModule,
    VantagemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
