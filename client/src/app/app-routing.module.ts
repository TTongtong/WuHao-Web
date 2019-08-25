import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MediaComponent } from './components/media/media.component';
import { ConnectComponent } from './components/connect/connect.component';
import { MinistriesComponent } from './components/ministries/ministries.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'media', component: MediaComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'ministries', component: MinistriesComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
