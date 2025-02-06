import { Component } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  newUser : User = {
    loginId: 0,
    user: '',
    email: '',
    password: '',
    type: ''
  }

  constructor(private userService: UserService, private router: Router){}

  onCreate(){
    this.userService.createUser(this.newUser)
    .subscribe(response => {
      console.log('Usuario registrado con éxito:', response);
      alert('Usuario creado exitosamente!');
      this.router.navigate(['/userList']);
    },
    error => {
      console.error('Error al registrar el usuario:', error);
    });
  }
}
