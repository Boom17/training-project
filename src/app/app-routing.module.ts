import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPageComponent } from './components/post-page/post-page.component';
import { PageNotFoundsComponent } from './components/page-not-founds/page-not-founds.component';
import { CustomerModule } from './modules/customer/customer.module';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
   {
    path: 'customers',
    canActivate: [LoginGuard], 
    loadChildren: 'src/app/modules/customer/customer.module#CustomerModule'
},

  { path: 'posts', component: PostPageComponent },
  { path: '**', component: PageNotFoundsComponent},      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

