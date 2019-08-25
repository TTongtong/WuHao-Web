import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MediaComponent } from './components/media/media.component';
import { ConnectComponent } from './components/connect/connect.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContentComponent } from './components/content/content.component';
import { WeekPlanComponent } from './components/week-plan/week-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MediaComponent,
    ConnectComponent,
    MinistriesComponent,
    HeaderComponent,
    SocialComponent,
    FooterComponent,
    GalleryComponent,
    ContentComponent,
    WeekPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
