import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.userService.listUsers().subscribe(data => {
      this.users = data;
    });
  }

  editUser(id: number) {
    this.router.navigate(['/userEdit', id])
  }

  onDelete(id: number) {
    this.userService.deleteUser(id).subscribe(
      response => {
        console.log(response);
        this.listUsers();
        alert('Usuario eliminado exitosamente!');
      },
      error => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
}
