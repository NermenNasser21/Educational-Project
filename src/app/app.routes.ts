import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';




export const routes: Routes = [
    {path:'',component: HomeComponent},
    { path: 'about', component: AboutComponent },
    {
    path: 'courses',
    loadComponent: () =>
      import('./public/courses-list/courses-list.component').then((m) => m.CoursesListComponent),
    },
    {
    path: 'contact',
    loadComponent: () =>
      import('./public/contact-us/contact-us.component').then((m) => m.ContactUsComponent),
    },
     {
  path: 'admin',
  component: AdminlayoutComponent,
  children: [
    {
      path: '',
      loadComponent: () =>
        import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
     {
      path: 'courses',
      loadComponent: () =>
        import('./admin/managecourses/managecourses.component').then(m => m.ManagecoursesComponent)
    }

  ]
}
,
{ path: '**', redirectTo: '' },
   

];
