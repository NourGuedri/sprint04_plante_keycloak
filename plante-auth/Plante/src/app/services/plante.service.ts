import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plante } from '../model/plante.model';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class PlanteService {
  apiURL: string = 'http://localhost:8081/plantes/api/all';


  plantes! : Plante[]; 
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listePlante(): Observable<Plante[]>{
    return this.http.get<Plante[]>(this.apiURL);
    }

  

     
       
}