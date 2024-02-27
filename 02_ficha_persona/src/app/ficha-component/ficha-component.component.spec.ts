import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaComponentComponent } from './ficha-component.component';

describe('FichaComponentComponent', () => {
  let component: FichaComponentComponent;
  let fixture: ComponentFixture<FichaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
