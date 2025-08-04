import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesListComponent } from '../../public/courses-list/courses-list.component';
import { AdminlayoutComponent } from '../../admin/adminlayout/adminlayout.component';
import { DashboardComponent } from '../../admin/dashboard/dashboard.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CoursesListComponent,AdminlayoutComponent,DashboardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
