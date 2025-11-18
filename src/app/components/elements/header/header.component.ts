import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService:AuthserviceService, private router:Router) {}
  public ativoDashboard = false;
  public ativoLogout = false;

  mostrarSidebar(): void {
    this.ativoDashboard = !this.ativoDashboard;
  }

  esconderSidebar(): void {
    this.ativoDashboard = false;
  }

  toggleLogout() {
    this.ativoLogout = !this.ativoLogout
  }

  logout(): void {
    this.authService.autenticado = false;
    this.router.navigate(['/'])
  }
}
