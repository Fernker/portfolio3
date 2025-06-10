import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'port-particles',
    template: `<div
        id="particles-js"
        class="particles"
    ></div>`,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }

            .particles {
                width: 100%;
                height: 100%;
            }
        `
    ]
})
export class ParticlesComponent implements OnInit {
    ngOnInit() {
        particlesJS.load('particles-js', '/particles-config.json', null);
    }
}
