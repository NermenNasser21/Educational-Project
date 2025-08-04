import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-adminlayout',
  standalone: true,
  imports: [CommonModule,RouterModule,DashboardComponent,RouterOutlet],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css'
})
export class AdminlayoutComponent {

}
