import { Component, Input, OnInit } from '@angular/core';
import { Carro } from '../carro.modelo';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  @Input() carro : Carro;
  @Input() indice : number;

  constructor() { }

  ngOnInit(): void {
  }

}

