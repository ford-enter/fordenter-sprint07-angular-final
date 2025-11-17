import { Component } from '@angular/core';
import { HeaderComponent } from '../../elements/header/header.component';
import { Veiculo } from '../../../models/veiculo.model';
import { VeiculoService } from '../../../services/veiculo.service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { CodigovinService } from '../../../services/codigovin.service';



@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public veiculos: Veiculo[] = [];
  public veiculoSelecionado!: Veiculo | null;
  constructor(private veiculoService:VeiculoService, private CodigovinService: CodigovinService) {}

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

  vehicleData: any;
  vin: string = '';
  buscarVin() {
    this.CodigovinService.getVin(this.vin).subscribe(
      (dadosRecebidos) => {
        this.vehicleData = dadosRecebidos;
      },
      (erro) => {
        console.log("Erro na requisição API");
      }
    )
  }
  
  onVinChange() {
    if (this.vin.length === 20) {
      this.buscarVin();
      console.log("VIN enviado:", this.vin);
    } else {
      this.vehicleData = null; 
    }
  }

}
