import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  navigateTo(page: string): void {
    console.log(`Navigating to ${page} page...`);
    // Implement routing logic here
  }
}
