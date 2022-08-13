import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes = [] as any;

  cliente:Cliente = {
    nome:"",
    sobrenome:"",
    nomeSocial:"",
    email:"",
    ativo:true,
  }

  constructor(private service: ClienteService) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .inserirClente(this.cliente)
      .subscribe( response => console.log(response));

  }

}
