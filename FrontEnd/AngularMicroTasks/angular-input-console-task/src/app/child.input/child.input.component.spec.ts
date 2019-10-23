import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child.InputComponent } from './child.input.component';

describe('Child.InputComponent', () => {
  let component: Child.InputComponent;
  let fixture: ComponentFixture<Child.InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child.InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child.InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
