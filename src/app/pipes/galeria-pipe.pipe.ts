import { Pipe, PipeTransform } from '@angular/core';
import { galeria } from '../interfaces/galeria-interface';

@Pipe({
  name: 'galeriaPipe'
})
export class GaleriaPipePipe implements PipeTransform {

  transform(imagen: galeria[],filtrar:string="") {
      const filtro=imagen.filter(ima=>ima.id.toString().includes(filtrar))
      return filtro
  }

}
