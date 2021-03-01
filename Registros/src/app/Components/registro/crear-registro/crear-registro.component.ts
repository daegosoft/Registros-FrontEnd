import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Registro } from 'src/app/Model/registro';
import { Respuesta } from 'src/app/Model/respuesta';
import { RegistroService } from 'src/app/Services/registro/registro.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css'],
  providers: [MessageService]
})
export class CrearRegistroComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';


  constructor(private service: RegistroService, private messageService: MessageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  crear() {
    if (this.nombre !== '' && this.apellido !== '') {
      let registro: Registro = new Registro();
      let respuesta: Respuesta;
      registro.name = this.nombre;
      registro.lastName = this.apellido;
      this.service.crearRegistro(registro).
        subscribe(res => {
          respuesta = res;
          this.messageService.add({ severity: 'success', summary: '', detail: respuesta.respuesta });
          setTimeout(() => {
            this.router.navigate([''], {relativeTo: this.route});
          }, 1000);
        }, error => {
          this.messageService.add({ severity: 'error', summary: '', detail: 'Error Creando Registro' });
        });
    }else{
      this.messageService.add({ severity: 'error', summary: '', detail: 'Debe Insertar datos para ingresar.' });
    }
  }

  atras(){
    history.back();
  }

}
