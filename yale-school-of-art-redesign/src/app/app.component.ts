import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent, HomeComponent, AboutComponent, ApplyComponent, ExhibitionsComponent, PublicationsComponent, NewsComponent, EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yale-school-of-art-redesign';
}
