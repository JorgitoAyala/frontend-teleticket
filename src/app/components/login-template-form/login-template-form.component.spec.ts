import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplateFormComponent } from './login-template-form.component';

describe('LoginTemplateFormComponent', () => {
  let component: LoginTemplateFormComponent;
  let fixture: ComponentFixture<LoginTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
