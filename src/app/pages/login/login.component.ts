import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    loginId: 1,
    user: '',
    email: '',
    password: '',
    type: 'USER'
  }

  message: string | undefined;

  constructor(private authService: AuthService, private router: Router){}

  onLogin() {
    this.authService.login(this.user)
    .subscribe(response => {
      console.log('Login realizado con éxito:', response);
      this.authService.setUserType(response.type);
      alert('¡Login exitoso!');
      if (response.type === 'USER') {
        this.router.navigate(['/home']);
      } else if (response.type === 'ADMIN') {
        this.router.navigate(['/productList']);
      }
    }, error => {
      this.message = "Correo o contraseña incorrectos";
      console.error('Error al realizar login:', error);
    });
  }
}
