import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOutletComponent } from './gallery-outlet.component';

describe('GalleryOutletComponent', () => {
  let component: GalleryOutletComponent;
  let fixture: ComponentFixture<GalleryOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
