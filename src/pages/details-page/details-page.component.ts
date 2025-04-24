import { Component } from '@angular/core';
import { SectionComponent } from '../../shared/components/section/section.component';
import {
  HeroComponent,
  HeroTagComponent,
  HeroTitleComponent,
} from '../../shared/components/hero/hero.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { FooterComponent } from '../../shared/chunks/footer/footer.component';

@Component({
  selector: 'port-details-page',
  imports: [
    SectionComponent,
    HeroComponent,
    HeroTitleComponent,
    HeroTagComponent,
    ButtonComponent,
    BadgeComponent,
    TitleComponent,
    CardComponent,
    FooterComponent,
  ],
  host: {
    class: 'layouts--main',
  },
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent {}
