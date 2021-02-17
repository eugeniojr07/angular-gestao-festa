import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarConvidadoComponent } from './atualizar-convidado.component';

describe('AtualizarConvidadoComponent', () => {
  let component: AtualizarConvidadoComponent;
  let fixture: ComponentFixture<AtualizarConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarConvidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
