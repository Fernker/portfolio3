import { Component, input } from '@angular/core';
import { CardComponent, CardComponents } from '../../components/card/card.component';
import { PortfolioExperience } from '../../models/portfolio.interface';

@Component({
    selector: 'port-timeline',
    imports: [CardComponents],
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
    entries = input<PortfolioExperience[]>();
}
