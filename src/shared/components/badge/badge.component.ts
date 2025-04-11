import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'port-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  size = input<'sm' | 'md'>('md');

  imgPath = input.required<string>();

  protected _mergedClasses = computed(() => [
    this._generateClass('size', this.size()),
  ]);

  private _generateClass(modifier: string, value: string) {
    return `port-badge--${modifier}-${value}`;
  }
}
