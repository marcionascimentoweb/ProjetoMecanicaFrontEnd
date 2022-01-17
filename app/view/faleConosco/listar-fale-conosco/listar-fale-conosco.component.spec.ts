import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFaleConoscoComponent } from './listar-fale-conosco.component';

describe('ListarFaleConoscoComponent', () => {
  let component: ListarFaleConoscoComponent;
  let fixture: ComponentFixture<ListarFaleConoscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFaleConoscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFaleConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
