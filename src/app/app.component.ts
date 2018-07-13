import { Component } from '@angular/core';
import { VeiculoService } from './services/veiculo.service';
import { Categoria, IVeiculo, categoriaEnum } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private veiculosService: VeiculoService) {
    this.veiculosService.getVeiculos(categoriaEnum.MOTO)
      .subscribe((data: IVeiculo[]) => {
        console.log(data);
      });
  }


}
