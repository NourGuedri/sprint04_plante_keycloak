import { Component, OnInit } from '@angular/core';
import { Plante } from '../model/plante.model';
import { PlanteService } from '../services/plante.service';

@Component({
  selector: 'app-plantes',
  templateUrl: './plantes.component.html',
  styleUrls: ['./plantes.component.css']
})
export class PlantesComponent implements OnInit {

     plantes! : Plante[]; //un tableau de Plante
     
     constructor(private planteService: PlanteService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerPlantes();
      }
    
      chargerPlantes(){
        this.planteService.listePlante().subscribe(pls => {
          console.log(pls);
          this.plantes = pls;
          });
      }
   

 
  

}
