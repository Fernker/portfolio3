import { Component, inject, input } from '@angular/core';
import { PortfolioScreenshot } from '../models/portfolio.interface';
import { GalleryOutletService } from '../gallery-outlet/gallery-outlet.service';

@Component({
    selector: 'port-gallery',
    imports: [],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
    images = input.required<PortfolioScreenshot[]>();

    private _galleryOutletService = inject(GalleryOutletService);

    protected openGallery(index: number) {
        this._galleryOutletService.changeVisibility(true);
    }
}
