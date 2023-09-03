import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { galeria } from '../interfaces/galeria-interface';

@Injectable({
  providedIn: 'root'
})

export class GaleriaServiceService {
  url:string="https://jsonplaceholder.typicode.com/photos"
  constructor(private http:HttpClient) { }


  extraerDatos(){
    return this.http.get<galeria>(this.url).pipe(map(
      (datos:galeria)=>
    
      {
        const galeria:galeria[]=[]   
        for(let i in datos){
          galeria.push(datos[i])
        }
        return galeria
      }
      
    ))
  }

}
