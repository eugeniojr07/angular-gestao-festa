
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarConvidadoComponent } from './atualizar-convidado/atualizar-convidado.component';
import { ConvidadosListagemComponent } from './convidados-listagem/convidados-listagem.component';
import { CriarConvidadoComponent } from './criar-convidado/criar-convidado.component';
import { DetalhesConvidadoComponent } from './detalhes-convidado/detalhes-convidado.component';

const routes: Routes = [
  {path: 'convidados', component: ConvidadosListagemComponent},
  {path: 'criar-convidado', component: CriarConvidadoComponent},
  {path: '', redirectTo: 'convidados', pathMatch: 'full'},
  {path: 'atualizar-convidado/:id', component: AtualizarConvidadoComponent},
  {path: 'detalhes-convidado/:id', component: DetalhesConvidadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }