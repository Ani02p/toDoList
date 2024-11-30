import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

}
