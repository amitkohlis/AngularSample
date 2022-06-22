import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { NoAuthGuard } from '@core/guard/no-auth.guard';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
 

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [MsalGuard]
  },
  {
          path: 'about',
          loadChildren: () =>
            import('@modules/about/about.module').then(m => m.AboutModule),
          canActivate: [MsalGuard]
  },
  {
          path: 'contact',
          loadChildren: () =>
            import('@modules/contact/contact.module').then(m => m.ContactModule),
          canActivate: [MsalGuard]
 },
  //Fallback when no prior routes is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation:  'enabledNonBlocking' //: 'disabled' // Set to enabledBlocking to use Angular Universal
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
