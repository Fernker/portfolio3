import { Component, computed, inject, input, signal } from '@angular/core';
import { FooterComponent } from '../../shared/chunks/footer/footer.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { CardComponent } from '../../shared/components/card/card.component';
import {
    HeroComponent,
    HeroTitleComponent,
    HeroTagComponent
} from '../../shared/components/hero/hero.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { DataService } from '../../shared/services/data.service';
import { PortfolioExperience } from '../../shared/models/portfolio.interface';
import { GalleryComponent } from '../../shared/gallery/gallery.component';

@Component({
    selector: 'port-experience-page',
    imports: [
        SectionComponent,
        HeroComponent,
        HeroTitleComponent,
        HeroTagComponent,
        TitleComponent,
        CardComponent,
        FooterComponent,
        GalleryComponent
    ],
    host: {
        class: 'layouts--main layouts--main-half'
    },
    templateUrl: './experience-page.component.html',
    styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {
    protected dataService = inject(DataService);
    experienceCompanyName = input.required<string>();

    protected experience = computed<PortfolioExperience>(() => {
        return this.dataService
            .data()
            .experiences.find(
                (experience) => experience.slug === this.experienceCompanyName()
            ) as PortfolioExperience;
    });

    protected description = computed(() => {
        return this.experience().description instanceof Array
            ? this.experience().description
            : [this.experience().description];
    });
}
