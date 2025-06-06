import { CommonModule } from '@angular/common';
import { Component, computed, input, model } from '@angular/core';
import { PortfolioSkill } from '../../models/portfolio.interface';

@Component({
    selector: 'port-badge',
    imports: [CommonModule],
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.scss'
})
export class BadgeComponent {
    size = model<'sm' | 'md'>('md');

    backgroundColor = input<string>('transparent');

    badge = input.required<PortfolioSkill>();

    linkPath = input<string>();

    protected _mergedClasses = computed(() => [this._generateClass('size', this.size())]);

    private _generateClass(modifier: string, value: string) {
        return `port-badge--${modifier}-${value}`;
    }
}
