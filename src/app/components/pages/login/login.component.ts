import { Component } from '@angular/core';
import { AuthserviceService } from '../../../services/authservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nome = "";
  senha = "";
  mensagemDeErro = "";

  constructor(private authService:AuthserviceService, private router:Router) {}

  fazerLogin() {
    this.authService.login(this.nome, this.senha).subscribe(
      (res) => {
        if (res && res.id) {
          this.authService.setAutenticado(true);
          console.log("Usuário autenticado!");
          this.router.navigate(['/index']);
        } else {
          this.mensagemDeErro = "Usuário ou senha inválidos."
        }
      },
      (erro) => {
        if (erro.status === 401) {
          this.mensagemDeErro = erro.error?.mensagem || "Usuário ou senha inválidos.";
        } else {
          this.mensagemDeErro = "Erro ao conectar com a API.";
        }
      }
    );
  }

  public mostrarSenha = false;
  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
}
