import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit{

  formulario!: FormGroup;

  constructor(private fb:FormBuilder){
    this.iniciaFormulario();
  }

  ngOnInit(): void {
    
  }
//método que crea e inicia un formulario
  iniciaFormulario(){
    this.formulario = this.fb.group({
      ciudad:['', Validators.required],
      codigo:['', Validators.required]
    })
  }

  consultar(){
    
  }

}
