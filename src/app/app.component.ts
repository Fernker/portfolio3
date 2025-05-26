import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { GalleryOutletComponent } from '../shared/gallery-outlet/gallery-outlet.component';

@Component({
    selector: 'port-root',
    imports: [RouterOutlet, GalleryOutletComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor(protected data: DataService) {}
}
