import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  ativo = false;

  mostrarSidebar() {
    this.ativo = !this.ativo;
  }

  esconderSidebar() {
    this.ativo = false;
  }
}
