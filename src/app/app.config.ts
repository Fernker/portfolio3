import {
    ApplicationConfig,
    Injectable,
    provideExperimentalZonelessChangeDetection,
    provideZoneChangeDetection
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable()
export class UnstripTrailingSlashLocation extends Location {
    public static override stripTrailingSlash(url: string): string {
        return url;
    }
}
Location.stripTrailingSlash = UnstripTrailingSlashLocation.stripTrailingSlash;

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideExperimentalZonelessChangeDetection(),
        provideRouter(routes, withComponentInputBinding())
    ]
};
