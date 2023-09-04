import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { galeria } from 'src/app/interfaces/galeria-interface';
import { GaleriaServiceService } from 'src/app/servicios/galeria-service.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit{
  items:galeria[]=[];
  itemEncontrado
  urlObtenido:string
  @Input() idRecibido:string
  activar=false  
  constructor(private servicio:GaleriaServiceService){
console.log(this.idRecibido)
  }
  id = new FormControl("");

  busqueda(){
  console.log(this.id.value)
  this.servicio.extraerDatosScroll(this.inicio,this.final).subscribe((a)=>{
   console.log(a)
   })
}
  
  inicio:number=0
  final:number=30
  ngOnInit(): void {
    this.servicio.extraerDatosScroll(this.inicio,this.final).subscribe((a)=>{
      this.items=a;
     })

}
obtenerDato(id:string){
  this.activar=true;
  this.urlObtenido=id
}

onScroll(){
this.inicio=0;
this.final=this.final+30
 this.servicio.extraerDatosScroll(this.inicio,this.final).subscribe((a)=>{
  this.items=a;
 }) 
}

}
