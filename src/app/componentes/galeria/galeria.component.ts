import { Component, OnInit } from '@angular/core';
import { galeria } from 'src/app/interfaces/galeria-interface';
import { GaleriaServiceService } from 'src/app/servicios/galeria-service.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit{
  coleccion:galeria[]=[]
  constructor(private servicio:GaleriaServiceService){

  }

  ngOnInit(): void {
 this.servicio.extraerDatos().subscribe((a)=>{
  this.coleccion=a
 }) 
}
}
