import { Component, HostListener, inject } from '@angular/core';
import { GalleryOutletService } from './gallery-outlet.service';

@Component({
    selector: 'port-gallery-outlet',
    imports: [],
    templateUrl: './gallery-outlet.component.html',
    styleUrl: './gallery-outlet.component.scss'
    // host: {
    //     '[class.show]': 'galleryOutletService.shouldShow()'
    // }
})
export class GalleryOutletComponent {
    protected galleryOutletService = inject(GalleryOutletService);

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (!this.galleryOutletService.shouldShow()) {
            return;
        }

        // Check if the pressed key is the Escape key
        if (event.key === 'Escape') {
            // Perform your desired action here, e.g., close a modal, clear a form, etc.
            this.galleryOutletService.hide();
        } else if (event.key === 'ArrowRight') {
            this.galleryOutletService.change(1);
        } else if (event.key === 'ArrowLeft') {
            this.galleryOutletService.change(-1);
        }
    }
}
