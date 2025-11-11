import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
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
