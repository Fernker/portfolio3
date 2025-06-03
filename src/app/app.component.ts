import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { GalleryOutletComponent } from '../shared/gallery-outlet/gallery-outlet.component';
import { GalleryOutletService } from '../shared/gallery-outlet/gallery-outlet.service';

@Component({
    selector: 'port-root',
    imports: [RouterOutlet, GalleryOutletComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    protected galleryOutletService = inject(GalleryOutletService);

    constructor(protected data: DataService) {}
}
