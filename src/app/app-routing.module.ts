import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/home/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ListComponent } from './pages/admin/adminProduct/list/list.component';
import { CreateComponent } from './pages/admin/adminProduct/create/create.component';
import { EditComponent } from './pages/admin/adminProduct/edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productList', component: ListComponent},
  {path: 'productCreate', component: CreateComponent},
  {path: 'productEdit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
