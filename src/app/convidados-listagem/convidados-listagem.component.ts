import { Component, OnInit } from '@angular/core';
import { ConvidadoService } from '../convidado.service';
import {Convidado} from '../convidado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convidados-listagem',
  templateUrl: './convidados-listagem.component.html',
  styleUrls: ['./convidados-listagem.component.css']
})
export class ConvidadosListagemComponent implements OnInit {

  convidados: Convidado[] = [];

  constructor(private convidadoService: ConvidadoService,
    private router: Router) { }

  ngOnInit(): void {
   this.listar();
  }

  private listar(){
    this.convidadoService.listar().subscribe(data => {
      this.convidados=data;
    });
  }
  atualizaConvidado(id:number){
    this.router.navigate(['atualizar-convidado',id]);
  }

  deletaConvidado(id: number){
    this.convidadoService.deletarConvidado(id).subscribe( data => {
      console.log(data);
      this.listar();
    })
  }

  detalhesConvidado(id:number){
    this.router.navigate(['detalhes-convidado',id]);
  }
 

}
