import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'port-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(protected data: DataService) {}
}
