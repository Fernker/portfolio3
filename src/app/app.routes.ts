import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { URLGuard } from '../shared/guards/url.guard';
import { ExperiencePageComponent } from '../pages/experience-page/experience-page.component';
import { ProjectPageComponent } from '../pages/project-page/project-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'projects/:projectName/',
        // canActivate: [URLGuard],

        component: ProjectPageComponent
    },
    {
        path: 'experiences/:experienceCompanyName/',
        canActivate: [URLGuard],
        component: ExperiencePageComponent
    },
    {
        path: 'skills/:skillName/',
        redirectTo: ''
    },
    {
        path: '**',
        redirectTo: ''
    }
];
