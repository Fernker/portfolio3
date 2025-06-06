import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable({
    providedIn: 'root'
})
export class URLGuard implements CanActivate {
    constructor(
        private dataService: DataService,
        private router: Router
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const type = route.url[0].path;
        let result = false;
        if (type.includes('experiences')) {
            result = this.dataService.data()?.experiences.some((item) => {
                return item.slug === route.params['experienceCompanyName'];
            });
        } else if (type.includes('projects')) {
            result = this.dataService.data()?.projects.some((item) => {
                return item.name.replace(/ /g, '-').toLowerCase() === route.params['projectName'];
            });
        }
        if (!result) {
            this.router.navigate(['']);
        }
        return result;
    }
}
