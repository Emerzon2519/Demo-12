import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  // Crear atributo de tipo FormBuilder
  constructor(private formBuilder: FormBuilder) { }

  // Estructura del formulario reactivo
  // registroForm = this.formBuilder.group({
  //   dni:['',{
  //     validators:
  //     [Validators.required, Validators.pattern('[0-9]{8}')]
  //   }],
  //   nombres:['',Validators.required],
  //   apellidos:['',Validators.required],
  //   fechanac:['',Validators.required],
  //   sueldo:['',Validators.required],
  //   comision:['',{
  //     validators:
  //     [Validators.required, Validators.max(1),Validators.min(0.01)]
  //   }],
  //   ciudad:['',Validators.required]
  // });

  // // Generar un metodo get para cada campo del formulario reactivo
  // get dni(){return this.registroForm.get('dni');}
  // get nombres(){return this.registroForm.get('nombres');}
  // get apellidos(){return this.registroForm.get('apellidos');}
  // get fechanac(){return this.registroForm.get('fechanac');}
  // get sueldo(){return this.registroForm.get('sueldo');}
  // get comision(){return this.registroForm.get('comision');}
  // get ciudad(){return this.registroForm.get('ciudad');}


  // // Generar el metodo onSubmit para registrar los datos del formulario en un Array
  // datos=new Array;

  // onSubmit(){
  //   if(!this.registroForm.valid){
  //     alert('Alguna validacion no se ha cumplido');
  //     return;
  //   }
  //   this.datos.push({
  //     'Dni': this.registroForm.get('dni')?.value,
  //     'Nombres': this.registroForm.get('nombres')?.value,
  //     'Apellidos': this.registroForm.get('apellidos')?.value,
  //     'FechaNac': this.registroForm.get('fechanac')?.value,
  //     'Sueldo': this.registroForm.get('sueldo')?.value,
  //     'Comision': this.registroForm.get('comision')?.value,
  //     'Ciudad': this.registroForm.get('ciudad')?.value,

  //     send(){
  
  //       console.log(this.datos);
  //     }
  //   })
  // }

  // Refrescar(){
  //   location.reload();
  //   }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
  }
  registroform = this.formBuilder.group({
    dni: ['',
    {
      validators:[
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]
    }],
    nombres: ['',
    {
      validators:[
        Validators.required,
      ]
    }],
    apellidos: ['',
    {
      validators:[
        Validators.required,
      ]
    }],
    ciudad: ['',
    {
      validators:[
        Validators.required
      ]
    }],
  })

  get dni(){return this.registroform.get('dni')}
  get nombres(){return this.registroform.get('nombres')}
  get apellidos(){return this.registroform.get('apellidos')}
  get ciudad(){return this.registroform.get('ciudad')}

  mensaje="";
  send(){
    if(this.registroform.valid){
      this.mensaje="Gracias por comunicarnos con nosotros"
    }
    console.log(this.registroform.value);
  }

}



