import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './view/topo/topo.component';
import { IndexComponent } from './view/index/index.component';
import { BannerComponent } from './view/banner/banner.component';
import { FooterComponent } from './view/footer/footer.component';
import { QuemSomosComponent } from './view/quem-somos/quem-somos.component';
import { LojasComponent } from './view/lojas/lojas.component';
import { ServicosComponent } from './view/servicos/servicos.component';
import { CadastrarClientesComponent } from './view/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ListarClientesComponent } from './view/clientes/listar-clientes/listar-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletarClientesComponent } from './view/clientes/deletar-clientes/deletar-clientes.component';
import { LoginComponent } from './view/login/login.component';
import { LogadoComponent } from './view/logado/logado.component';
import { ClientesComponent } from './view/clientes/clientes/clientes.component';
import { UpdateClientesComponent } from './view/clientes/update-clientes/update-clientes.component';
import { CadastrarFaleConoscoComponent } from './view/faleConosco/cadastrar-fale-conosco/cadastrar-fale-conosco.component';
import { ListarFaleConoscoComponent } from './view/faleConosco/listar-fale-conosco/listar-fale-conosco.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    IndexComponent,
    BannerComponent,
    FooterComponent,
    QuemSomosComponent,
    LojasComponent,
    ServicosComponent,
    CadastrarClientesComponent,
    ListarClientesComponent,
    DeletarClientesComponent,
    LoginComponent,
    LogadoComponent,
    ClientesComponent,
    UpdateClientesComponent,
    CadastrarFaleConoscoComponent,
    ListarFaleConoscoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
