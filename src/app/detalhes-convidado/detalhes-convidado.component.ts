import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convidado } from '../convidado';
import { ConvidadoService } from '../convidado.service';

@Component({
  selector: 'app-detalhes-convidado',
  templateUrl: './detalhes-convidado.component.html',
  styleUrls: ['./detalhes-convidado.component.css']
})
export class DetalhesConvidadoComponent implements OnInit {

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

  voltarTelaInicial(){
    this.router.navigate(['convidados']);
  }


}
