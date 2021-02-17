import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convidado } from '../convidado';
import { ConvidadoService } from '../convidado.service';

@Component({
  selector: 'app-atualizar-convidado',
  templateUrl: './atualizar-convidado.component.html',
  styleUrls: ['./atualizar-convidado.component.css']
})
export class AtualizarConvidadoComponent implements OnInit {

  id!: number;

  convidado: Convidado = new Convidado();

  constructor(private convidadoService: ConvidadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.convidadoService.getConvidadoById(this.id).subscribe(data => {
      this.convidado = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.convidadoService.atualizarConvidado(this.id, this.convidado).subscribe( data =>{
      this.goToListaConvidados();
    }
    , error => console.log(error));
  }

  goToListaConvidados(){
    this.router.navigate(['/convidados']);
  }

}
