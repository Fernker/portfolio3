import { computed, Injectable, signal } from '@angular/core';
import { Portfolio, PortfolioJson } from '../models/portfolio.interface';
import data from '../data/portfolio.json';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _data = signal<PortfolioJson>(data);

    data = computed<Portfolio>(() => {
        // clean data here
        return { ...this._data() }; //, skills: this._getSkills(this._data()) };
    });

    hasItemWithSlug(type: string, property: string) {
        const data = this.data();
        // TODO fix this any
        return (data as any)[type]?.some((item: { slug: string }) => {
            return item.slug === property;
        });
    }

    private _getSkills(data: PortfolioJson): string[] {
        const result = data.experiences.map((experience) => {
            return experience.skills;
        });
        return [];
    }
}
