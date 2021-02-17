import { Component, OnInit } from '@angular/core';
import { Convidado } from '../convidado';
import { ConvidadoService } from '../convidado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-convidado',
  templateUrl: './criar-convidado.component.html',
  styleUrls: ['./criar-convidado.component.css']
})
export class CriarConvidadoComponent implements OnInit {

  convidado: Convidado = new Convidado();

  constructor(private convidadoService: ConvidadoService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  salvarConvidado(){
    this.convidadoService.criarConvidado(this.convidado).subscribe( data =>{
      console.log(data);
      this.goToListaConvidados();
    },
    (error) => console.log(error));
  }

  goToListaConvidados(){
    this.router.navigate(['/convidados']);
  }
  
  onSubmit(){
    console.log(this.convidado);
  }
}
