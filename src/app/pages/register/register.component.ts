import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  newUser: User = {
    loginId: 0,
    user: '',
    email: '',
    password: '',
    type: 'USER'
  };

  constructor(private authService: AuthService, private router: Router){}

  onRegister() {
        const newUser: User = {
          loginId: this.newUser.loginId,
          user: this.newUser.user,
          email: this.newUser.email,
          password: this.newUser.password,
          type: this.newUser.type
        };

        this.authService.registerDB(newUser)
          .subscribe(response => {
            alert('Usuario registrado con éxito');
            this.router.navigate(['/login']);
          },
          error => {
            alert('Error al registrar el usuario en la base de datos');
          });

  }

}
