import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadosListagemComponent } from './convidados-listagem.component';

describe('ConvidadosListagemComponent', () => {
  let component: ConvidadosListagemComponent;
  let fixture: ComponentFixture<ConvidadosListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvidadosListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvidadosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
