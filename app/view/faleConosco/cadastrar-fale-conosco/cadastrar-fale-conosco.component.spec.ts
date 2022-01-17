import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFaleConoscoComponent } from './cadastrar-fale-conosco.component';

describe('CadastrarFaleConoscoComponent', () => {
  let component: CadastrarFaleConoscoComponent;
  let fixture: ComponentFixture<CadastrarFaleConoscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarFaleConoscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarFaleConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
