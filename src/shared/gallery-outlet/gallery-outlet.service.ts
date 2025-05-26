import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GalleryOutletService {
    private _show = signal(false);
    show = this._show.asReadonly();

    changeVisibility(val: boolean) {
        this._show.set(val);
    }
}
