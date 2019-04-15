import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFavoriteColorComponent } from './reactive-favorite-color.component';

describe('ReactiveFavoriteColorComponent', () => {
  let component: ReactiveFavoriteColorComponent;
  let fixture: ComponentFixture<ReactiveFavoriteColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFavoriteColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFavoriteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
