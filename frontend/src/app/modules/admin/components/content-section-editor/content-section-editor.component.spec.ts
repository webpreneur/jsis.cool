import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionEditorComponent } from './content-section-editor.component';

describe('ContentSectionEditorComponent', () => {
  let component: ContentSectionEditorComponent;
  let fixture: ComponentFixture<ContentSectionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSectionEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSectionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
