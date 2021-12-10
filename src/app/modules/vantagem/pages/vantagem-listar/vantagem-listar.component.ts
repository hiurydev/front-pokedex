import { Component, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { RouteService } from 'src/app/commons/services/route.service';
import { IVantagem } from '../../model/vantagem.model';
import { VantagemService } from '../../service/vantagem-service';

@Component({
  selector: 'app-vantagem-listar',
  templateUrl: './vantagem-listar.component.html',
  styleUrls: ['./vantagem-listar.component.css']
})
export class VantagemListarComponent implements OnInit {

  constructor(private vantagemService: VantagemService,
    private routeService: RouteService) { }

  vantagens = {} as IPageConfig<IVantagem>;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.vantagemService.getAll()
    .then(result => {
      this.vantagens = result;
    })
  }

  novaVantagem() {
    this.routeService.navigate(`/vantagem/cadastrar`);
  }

  editarVantagem(vantagem: any) {
    this.routeService.navigate(`/vantagem/atualizar/${vantagem.id}`);
  }

  deletarVantagem(vantagem: any) {
    this.vantagemService.deletarVantagem(vantagem.id)
    .then((result: any) => {
      this.getAll()
    })
  }
  
  render(type: boolean){
    return (type) ? 'Sim': 'Não';
  }
}
