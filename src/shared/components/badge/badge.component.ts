import { CommonModule } from '@angular/common';
import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'port-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  size = model<'sm' | 'md'>('md');

  imgPath = input.required<string>();

  linkPath = input<string>();

  protected _mergedClasses = computed(() => [
    this._generateClass('size', this.size()),
  ]);

  private _generateClass(modifier: string, value: string) {
    return `port-badge--${modifier}-${value}`;
  }
}
