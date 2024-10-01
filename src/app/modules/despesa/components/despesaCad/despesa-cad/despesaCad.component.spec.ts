import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaCadComponent } from './despesaCad.component';

describe('DespesaCadComponent', () => {
  let component: DespesaCadComponent;
  let fixture: ComponentFixture<DespesaCadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespesaCadComponent]
    });
    fixture = TestBed.createComponent(DespesaCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
