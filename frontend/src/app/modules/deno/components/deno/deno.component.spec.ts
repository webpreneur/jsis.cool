import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenoComponent } from './deno.component';

describe('DenoComponent', () => {
  let component: DenoComponent;
  let fixture: ComponentFixture<DenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
