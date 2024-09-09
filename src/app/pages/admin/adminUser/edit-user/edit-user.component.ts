import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
  user : User = {
    idLogin: 0,
    user: '',
    email: '',
    password: '',
    type: ''
  }

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.params['id'];
    this.userService.getUser(id).subscribe(
      response => {this.user = response}
    );
  }

  onEdit() {
    console.log(this.user)
    this.userService.updateUser(this.user.idLogin, this.user).
    subscribe(response => {
      console.log('Usuario actualizado con éxito:', response);
      this.router.navigate(['/userList']);
      alert('¡Usuario actualizado exitosamente!');
    },
    error => {
      console.error('Error al actualizar usuario:', error);
    }
  );
  }
}
