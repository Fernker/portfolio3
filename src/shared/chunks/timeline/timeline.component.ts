import { Component } from '@angular/core';
import {
  CardComponent,
  CardComponents,
} from '../../components/card/card.component';

@Component({
  selector: 'port-timeline',
  imports: [CardComponents],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {}
