import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDemoComponent } from './store-demo.component';

describe('StoreDemoComponent', () => {
  let component: StoreDemoComponent;
  let fixture: ComponentFixture<StoreDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
