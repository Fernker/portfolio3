import { Component, signal } from '@angular/core';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import {
  HeroComponent,
  HeroTagComponent,
  HeroTitleComponent,
} from '../../shared/components/hero/hero.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { TimelineComponent } from '../../shared/chunks/timeline/timeline.component';
import { CardComponents } from '../../shared/components/card/card.component';
import { FooterComponent } from '../../shared/chunks/footer/footer.component';

@Component({
  selector: 'port-home',
  imports: [
    SectionComponent,
    TitleComponent,
    HeroComponent,
    HeroTitleComponent,
    HeroTagComponent,
    ButtonComponent,
    BadgeComponent,
    TimelineComponent,
    CardComponents,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    class: 'layouts--main',
  },
})
export class HomeComponent {
  mySize: 'md' | 'sm' = 'md';
  // mySize = signal<'md' | 'sm'>('md');

  constructor() {
    // setInterval(() => {
    //   this.mySize = this.mySize === 'md' ? 'sm' : 'md';
    //   console.log('mySize', this.mySize);
    //   // this.mySize.update((prev) => (prev === 'md' ? 'sm' : 'md'));
    // }, 1000);
  }
}
