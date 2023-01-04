import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDialogComponent } from './editor-dialog.component';

describe('EditorDialogComponent', () => {
  let component: EditorDialogComponent;
  let fixture: ComponentFixture<EditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
