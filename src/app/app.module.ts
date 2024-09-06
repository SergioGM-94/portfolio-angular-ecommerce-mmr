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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
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
