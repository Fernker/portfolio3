import { Component, Directive } from '@angular/core';

@Directive({
    selector: 'port-hero-title'
})
export class HeroTitleComponent {}

@Directive({
    selector: 'port-hero-tag'
})
export class HeroTagComponent {}

@Component({
    selector: 'port-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {}
