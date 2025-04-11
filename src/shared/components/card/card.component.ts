import { Component, Directive } from '@angular/core';

@Directive({
  selector: 'port-card-title',
})
export class CardTitleComponent {}

@Directive({
  selector: 'port-card-sub-title',
})
export class CardSubTitleComponent {}

@Component({
  selector: 'port-card',
  imports: [CardTitleComponent, CardSubTitleComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}

export const CardComponents = [
  CardComponent,
  CardTitleComponent,
  CardSubTitleComponent,
];
