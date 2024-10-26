import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCadComponent } from './receitaCad.component';

describe('ReceitaCadComponent', () => {
  let component: ReceitaCadComponent;
  let fixture: ComponentFixture<ReceitaCadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaCadComponent]
    });
    fixture = TestBed.createComponent(ReceitaCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
