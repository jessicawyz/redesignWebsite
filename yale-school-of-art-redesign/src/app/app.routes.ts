import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },  // Redirect unknown paths to Home
];
