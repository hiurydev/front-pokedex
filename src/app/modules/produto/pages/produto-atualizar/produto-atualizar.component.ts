import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/commons/services/route.service';
import { ICategoria } from 'src/app/modules/categoria/model/categoria.model';
import { CategoriaService } from 'src/app/modules/categoria/service/categoria.service';
import { IProduto } from '../../model/produto.model';
import { ProdutoService } from '../../service/produto-service';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {

  categorias: ICategoria[] = [];
  produto = {} as IProduto;

  constructor(private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.getOne(this.activatedRoute.snapshot.params.idProduto);
      this.categoriaService.getFullCategoria()
      .then(result => {
        this.categorias = result;
      })
    }

  atualizar(produto: any) {
    this.routeService.navigate(`/produto/atualizar/${produto.id}`);
  }

  getOne(id: number) {
    this.produtoService.getOne(id)
    .then((result: any) => {
      this.produto = result;
      this.produto.categoria = result.categoria.id;
    })
  }
  
}
