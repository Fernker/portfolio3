import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DetailsPageComponent } from '../pages/details-page/details-page.component';
import { SkillsPageComponent } from '../pages/skills-page/skills-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects/:projectName',
    component: DetailsPageComponent,
  },
  {
    path: 'experiences/:experienceName',
    component: DetailsPageComponent,
  },
  {
    path: 'skills/:skillName',
    component: SkillsPageComponent,
  },
];
