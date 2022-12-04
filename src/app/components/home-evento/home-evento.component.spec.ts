import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventoComponent } from './home-evento.component';

describe('HomeEventoComponent', () => {
  let component: HomeEventoComponent;
  let fixture: ComponentFixture<HomeEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
