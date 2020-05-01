import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueRequestsComponent } from './queue-requests.component';

describe('QueueRequestsComponent', () => {
  let component: QueueRequestsComponent;
  let fixture: ComponentFixture<QueueRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
