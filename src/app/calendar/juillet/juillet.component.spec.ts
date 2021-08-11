import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuilletComponent } from './juillet.component';

describe('JuilletComponent', () => {
  let component: JuilletComponent;
  let fixture: ComponentFixture<JuilletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuilletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
