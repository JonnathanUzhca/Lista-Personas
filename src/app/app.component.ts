import { Component } from '@angular/core';

import { Carro } from './carro.modelo';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';

  personas: Persona[]=[
    new Persona('Juan','perez'), 
    new Persona('Jonathan','Uzhca'), 
    new Persona('Estefania','Orellana')];

    personaAgregada(persona:Persona){
      this.personas.push(persona);
    }
    

    titulo2='Lista de carros';
    carros: Carro[]=[ 
      new Carro('Tucson','Hyunday','2009'),
      new Carro('cx5','mazda','2019')
    ];

    nombreCarroInput:string ='';
    marcaCarroInput:string ='';
    anioCarroInput:string='';

    agregarCarro(){
      let carro1 = new Carro(this.nombreCarroInput, this.marcaCarroInput, this.anioCarroInput)
      this.carros.push(carro1);

    }

}
