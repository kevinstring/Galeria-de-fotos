import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { galeria } from 'src/app/interfaces/galeria-interface';
import { GaleriaServiceService } from 'src/app/servicios/galeria-service.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
 @Input() idImagen:string
  previsualizar:galeria
constructor(private router:ActivatedRoute,private servicio:GaleriaServiceService){
  
}
ngOnInit(): void {
}
}

