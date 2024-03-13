import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { CardComponent } from "./components/card/card.component";
import { Section3Component } from "./components/section-3/section-3.component";
import { FooterComponent } from "./components/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, HeroSectionComponent, CardComponent, Section3Component, FooterComponent]
})
export class AppComponent {
  title = 'proyectfrontend';
}
