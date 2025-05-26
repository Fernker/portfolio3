import { Component, contentChildren, Directive, effect } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Directive({
    selector: 'port-card-title'
})
export class CardTitleComponent {}

@Directive({
    selector: 'port-card-sub-title'
})
export class CardSubTitleComponent {}

@Directive({
    selector: 'port-card-date'
})
export class CardDateComponent {}

@Directive({
    selector: 'port-card-image'
})
export class CardImageComponent {}

@Component({
    selector: 'port-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    private _badges = contentChildren(BadgeComponent, { descendants: true });

    constructor() {
        effect(() => {
            this._badges().forEach((badge) => {
                badge.size.set('sm');
            });
        });
    }
}

export const CardComponents = [
    CardComponent,
    CardTitleComponent,
    CardSubTitleComponent,
    CardImageComponent,
    CardDateComponent
];
