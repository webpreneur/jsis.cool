import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanCodeComponent } from './clean-code.component';

describe('CleanCodeComponent', () => {
  let component: CleanCodeComponent;
  let fixture: ComponentFixture<CleanCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
