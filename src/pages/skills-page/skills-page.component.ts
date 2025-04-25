import { Component, computed, input } from '@angular/core';
import { SectionComponent } from '../../shared/components/section/section.component';
import {
  HeroComponent,
  HeroTitleComponent,
  HeroTagComponent,
} from '../../shared/components/hero/hero.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import {
  CardComponent,
  CardComponents,
  CardImageComponent,
} from '../../shared/components/card/card.component';
import { FooterComponent } from '../../shared/chunks/footer/footer.component';

@Component({
  selector: 'port-skills-page',
  imports: [
    SectionComponent,
    HeroComponent,
    HeroTitleComponent,
    HeroTagComponent,
    BadgeComponent,
    TitleComponent,
    FooterComponent,
    CardComponents,
  ],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss',
  host: {
    class: 'layouts--main layouts--main-short',
  },
})
export class SkillsPageComponent {
  readonly skillName = input<string>();

  protected skillNameCap = computed(() => {
    const skillName = this.skillName() || '';
    return skillName.charAt(0).toUpperCase() + skillName.slice(1);
  });
}
