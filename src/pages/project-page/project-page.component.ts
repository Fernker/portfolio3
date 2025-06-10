import { Component, computed, inject, input } from '@angular/core';
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
import { PortfolioProject } from '../../shared/models/portfolio.interface';
import { DataService } from '../../shared/services/data.service';
import { GalleryComponent } from '../../shared/gallery/gallery.component';
import { ParticlesComponent } from '../../shared/components/particles/particles.component';

@Component({
    selector: 'port-project-page',
    imports: [
        SectionComponent,
        HeroComponent,
        HeroTitleComponent,
        HeroTagComponent,
        BadgeComponent,
        TitleComponent,
        FooterComponent,
        BadgeComponent,
        GalleryComponent,
        ParticlesComponent
    ],
    host: {
        class: 'layouts--main layouts--main-half'
    },
    templateUrl: './project-page.component.html',
    styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
    protected dataService = inject(DataService);
    projectName = input.required<string>();

    protected project = computed<PortfolioProject>(() => {
        return this.dataService
            .data()
            .projects.find(
                (experience) =>
                    experience.name.replace(/ /g, '-').toLowerCase() === this.projectName()
            ) as PortfolioProject;
    });

    protected description = computed(() => {
        return this.project().description instanceof Array
            ? this.project().description
            : [this.project().description];
    });
}
