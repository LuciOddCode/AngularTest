import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FormComponent} from "./contact-us/inner-items/form/form.component";
import {SocialComponent} from "./contact-us/inner-items/social/social.component";
import {AboutComponent} from "./contact-us/inner-items/about/about.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login/:data', component: LoginComponent},
  {
    path: 'contact', component: ContactUsComponent, children: [
      {path: '', redirectTo: '/contact/form', pathMatch: 'full'},
      {path: 'form', component: FormComponent},
      {path: 'social', component: SocialComponent},
      {path: 'about', component: AboutComponent},
    ]
  },
  {path: '**', component: NotFoundComponent}
];
