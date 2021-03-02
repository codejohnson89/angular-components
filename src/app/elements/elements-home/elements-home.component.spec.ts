import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ElementsHomeComponent } from './elements-home.component';

describe('ElementsHomeComponent', () => {
  let component: ElementsHomeComponent;
  let fixture: ComponentFixture<ElementsHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
