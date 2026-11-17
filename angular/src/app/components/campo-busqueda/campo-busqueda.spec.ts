import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampoBusqueda } from './campo-busqueda';

describe('CampoBusqueda', () => {
  let component: CampoBusqueda;
  let fixture: ComponentFixture<CampoBusqueda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoBusqueda],
    }).compileComponents();

    fixture = TestBed.createComponent(CampoBusqueda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
