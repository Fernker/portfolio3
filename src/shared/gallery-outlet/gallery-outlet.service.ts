import { computed, Injectable, signal } from '@angular/core';
import { PortfolioScreenshot } from '../models/portfolio.interface';

@Injectable({
    providedIn: 'root'
})
export class GalleryOutletService {
    private _show = signal(false);
    private _index = signal(0);

    shouldShow = this._show.asReadonly();

    image = computed(() => {
        return `/screenshots/${this._images[this._index()]}`;
    });

    private _images!: PortfolioScreenshot[];

    init(images: PortfolioScreenshot[]) {
        this._images = images;
    }

    show(index: number) {
        this._show.set(true);
        this._index.set(index);
    }

    hide() {
        this._show.set(false);
    }

    change(amount: number) {
        const current = this._index();
        let to = current + amount;
        if (to < 0) {
            to = this._images?.length - 1;
        } else if (to > this._images.length - 1) {
            to = 0;
        }
        this._index.set(to);
    }
}
