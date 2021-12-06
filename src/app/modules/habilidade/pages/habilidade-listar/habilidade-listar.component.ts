import { Component, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { RouteService } from 'src/app/commons/services/route.service';
import { IHabilidade } from '../../model/habilidade.model';
import { HabilidadeService } from '../../service/habilidade-service';

@Component({
  selector: 'app-habilidade-listar',
  templateUrl: './habilidade-listar.component.html',
  styleUrls: ['./habilidade-listar.component.css']
})
export class HabilidadeListarComponent implements OnInit {

  constructor(private habilidadeService: HabilidadeService,
    private routeService: RouteService) { }

  habilidades = {} as IPageConfig<IHabilidade>;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.habilidadeService.getAll()
    .then(result => {
      this.habilidades = result;
    })
  }

  novaHabilidade() {
    this.routeService.navigate(`/habilidade/cadastrar`);
  }

  editarHabilidade(habilidade: any) {
    this.routeService.navigate(`/habilidade/atualizar/${habilidade.id}`);
  }

  deletarHabilidade(habilidade: any) {
    this.habilidadeService.deletarHabilidade(habilidade.id)
    .then((result: any) => {
      this.getAll()
    })
  }
}
