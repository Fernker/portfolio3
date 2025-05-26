import { Component, inject } from '@angular/core';
import { GalleryOutletService } from './gallery-outlet.service';

@Component({
    selector: 'port-gallery-outlet',
    imports: [],
    templateUrl: './gallery-outlet.component.html',
    styleUrl: './gallery-outlet.component.scss',
    host: {
        '[class.show]': 'galleryOutletService.show()'
    }
})
export class GalleryOutletComponent {
    protected galleryOutletService = inject(GalleryOutletService);
}
