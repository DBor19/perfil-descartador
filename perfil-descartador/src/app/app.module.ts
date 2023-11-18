import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoperfilComponent } from './fotoperfil/fotoperfil.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FotoperfilComponent,
    EnderecoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
