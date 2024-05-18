import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiqarComponent } from './chiqar.component';

describe('ChiqarComponent', () => {
  let component: ChiqarComponent;
  let fixture: ComponentFixture<ChiqarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChiqarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChiqarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
