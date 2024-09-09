import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/home/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ListComponent } from './pages/admin/adminProduct/list/list.component';
import { CreateComponent } from './pages/admin/adminProduct/create/create.component';
import { EditComponent } from './pages/admin/adminProduct/edit/edit.component';
import { ListUserComponent } from './pages/admin/adminUser/list-user/list-user.component';
import { CreateUserComponent } from './pages/admin/adminUser/create-user/create-user.component';
import { EditUserComponent } from './pages/admin/adminUser/edit-user/edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'index', component: IndexComponent},
  {path: 'cart', component: CartComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productList', component: ListComponent},
  {path: 'productCreate', component: CreateComponent},
  {path: 'productEdit/:id', component: EditComponent},
  {path: 'userList', component: ListUserComponent},
  {path: 'userCreate', component: CreateUserComponent},
  {path: 'userEdit/:id', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
