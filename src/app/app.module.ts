import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CepComponent } from './cep/cep.component';

import { TemplateModule } from './template/template.module';
import { ClienteComponent } from './cliente/cliente.component';
import { FormatarMoedaPipe } from './formatar-moeda.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    ClienteComponent,
    FormatarMoedaPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
