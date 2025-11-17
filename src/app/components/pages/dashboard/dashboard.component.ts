import { Component } from '@angular/core';
import { HeaderComponent } from '../../elements/header/header.component';
import { Veiculo } from '../../../models/veiculo.model';
import { VeiculoService } from '../../../services/veiculo.service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public veiculos: Veiculo[] = [];
  public veiculoSelecionado!: Veiculo | null;
  constructor(private veiculoService:VeiculoService) {}

  ngOnInit() {
    this.buscarVeiculo()
  }

  buscarVeiculo() {
    this.veiculoService.getVeiculos().subscribe(
      (dadosRecebidos) => {
        this.veiculos = dadosRecebidos.vehicles;
      },
      (erro) => {
        console.log("Erro na requisição API");
      }
    ) 
  }
  
  atualizarDashboard() {
    console.log(this.veiculoSelecionado)
  }
}
