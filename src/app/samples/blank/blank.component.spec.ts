import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankComponent } from './blank.component';

describe('BlankComponent ...', () => {
  let component: BlankComponent;
  let fixture: ComponentFixture<BlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlankComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankComponent);
    component = fixture.componentInstance;
  });

  it('- should be created', () => {
    expect(component).toBeTruthy();
  });
});
