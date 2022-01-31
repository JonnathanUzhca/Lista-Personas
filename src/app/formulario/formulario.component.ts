import { ProviderAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers :[LoggingService]
})
export class FormularioComponent  {

    @Output() personaCreada =  new EventEmitter<Persona>();

    //nombreInput: string ='';
    //apellidoInput: string ='';
   constructor(private logginService: LoggingService){

   }
    agregarPersona(NombreInput:HTMLInputElement, ApellidoInput:HTMLInputElement){
      let persona1 = new Persona(NombreInput.value, ApellidoInput.value);
      //this.personas.push(persona1);
      this.logginService.enviarMensajeAConsola("Enviamos Persona : "+persona1.apellido + persona1.nombre);
      this.personaCreada.emit(persona1);
    }

    
  

}
