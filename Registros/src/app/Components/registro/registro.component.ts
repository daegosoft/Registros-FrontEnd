import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/Model/registro';
import { RegistroService } from 'src/app/Services/registro/registro.service';
import { MessageService } from 'primeng/api';
import { Respuesta } from 'src/app/Model/respuesta';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [MessageService]
})
export class RegistroComponent implements OnInit {

  registros: Registro[] = [];
  registrosSelected: Registro[] = [];
  columnas: any[] = [];

  constructor(private service: RegistroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Obteniendo Registros." });
    this.columnas = [
      { label: 'Id', header: 'id' },
      { label: 'Nombre', header: 'name' },
      { label: 'Apellido', header: 'lastName' },
      { label: 'Procesado', header: 'procesar' }
    ];
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.service.obtenerTodos().
      subscribe(registros => {
        this.registros = registros;
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: "Obteniendo Registros." });
      });
  }

  validarProcesar(): boolean {
    let registroProcesar: Registro[] = [];
    this.registrosSelected.forEach(e =>{
      if(!e.procesar){
        registroProcesar.push(e);
      }
    });
    return !(registroProcesar.length == 0);
  }

  procesarVarios() {
    if (this.registrosSelected.length > 0) {
      let registrosPasar: Registro[] = [];
      this.registrosSelected.forEach(e => {
        if (!e.procesar) {
          registrosPasar.push(e);
        }
      });
      if (registrosPasar.length > 0) {
        this.messageService.add({ severity: 'warn', summary: 'Procesando Datos', detail: 'Procesando ' + registrosPasar.length + ' datos.' });
        setTimeout(() => {
          this.service.modificarRegistro(registrosPasar).
            subscribe((res) => {
              let respuesta: Respuesta[] = JSON.parse(JSON.stringify(res));
              respuesta.forEach((respuesta, i) => {
                this.messageService.add({ severity: 'success', summary: '', detail: respuesta.respuesta });
              });
              this.registrosSelected = [];
              this.obtenerTodos();
            }, error => {
              this.messageService.add({ severity: 'error', summary: 'Procesando', detail: 'Error procesando....' });
            });
        }, 1000);
      }else{
        this.messageService.add({ severity: 'error', summary: 'Información', detail: 'No hay Registros a procesar.' });
      }
    }
  }
}
