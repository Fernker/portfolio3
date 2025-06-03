import { Component, input } from '@angular/core';

@Component({
    selector: 'port-button',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
    href = input.required<string>();
}
