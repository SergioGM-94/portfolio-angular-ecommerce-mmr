import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { SpanishPaginatorIntl } from './models/spanish-paginator-intl';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { IndexComponent } from './pages/home/index/index.component';
import { FooterComponent } from './pages/home/index/footer/footer.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ListComponent } from './pages/admin/adminProduct/list/list.component';
import { CreateComponent } from './pages/admin/adminProduct/create/create.component';
import { EditComponent } from './pages/admin/adminProduct/edit/edit.component';
import { ListUserComponent } from './pages/admin/adminUser/list-user/list-user.component';
import { CreateUserComponent } from './pages/admin/adminUser/create-user/create-user.component';
import { EditUserComponent } from './pages/admin/adminUser/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    ListUserComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatPaginator,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CartService,
    StoreService,
    AuthService,
    provideClientHydration(),
    provideAnimationsAsync(),
    {provide: MatPaginatorIntl, useClass: SpanishPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
