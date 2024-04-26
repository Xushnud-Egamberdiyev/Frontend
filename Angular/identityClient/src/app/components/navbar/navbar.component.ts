import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    authService = inject(AuthService);

    logutt(){
      this.authService.logout();
      console.log('uji log aout')
    }
}
