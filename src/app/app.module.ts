import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ConvidadoService} from './convidado.service';
import { ConvidadosListagemComponent } from './convidados-listagem/convidados-listagem.component';
import { AppRoutingModule } from './app-rotuing.module';
import { CriarConvidadoComponent } from './criar-convidado/criar-convidado.component';
import {FormsModule} from  '@angular/forms';
import { AtualizarConvidadoComponent } from './atualizar-convidado/atualizar-convidado.component';
import { DetalhesConvidadoComponent } from './detalhes-convidado/detalhes-convidado.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ConvidadosListagemComponent,
    CriarConvidadoComponent,
    AtualizarConvidadoComponent,
    DetalhesConvidadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule
  ],
  providers: [ConvidadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
