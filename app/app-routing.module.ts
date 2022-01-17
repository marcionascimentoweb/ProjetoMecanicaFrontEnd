import { ClientesComponent } from './view/clientes/clientes/clientes.component';
import { LogadoComponent } from './view/logado/logado.component';
import { LoginComponent } from './view/login/login.component';
import { ServicosComponent } from './view/servicos/servicos.component';
import { LojasComponent } from './view/lojas/lojas.component';
import { QuemSomosComponent } from './view/quem-somos/quem-somos.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './view/index/index.component';
import { ListarClientesComponent } from './view/clientes/listar-clientes/listar-clientes.component';
import { CadastrarClientesComponent } from './view/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { DeletarClientesComponent } from './view/clientes/deletar-clientes/deletar-clientes.component';
import { UpdateClientesComponent } from './view/clientes/update-clientes/update-clientes.component';
import { CadastrarFaleConoscoComponent } from './view/faleConosco/cadastrar-fale-conosco/cadastrar-fale-conosco.component';
import { ListarFaleConoscoComponent } from './view/faleConosco/listar-fale-conosco/listar-fale-conosco.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'quemsomos', component: QuemSomosComponent},
  {path: 'lojas', component: LojasComponent },
  {path: 'servicos', component: ServicosComponent},
  {path: 'listarClientes', component: ListarClientesComponent },
  {path: 'cadastrarClientes', component: CadastrarClientesComponent},
  {path: 'deletarClientes/:_id', component: DeletarClientesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logado', component: LogadoComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'alterarClientes/:_id', component: UpdateClientesComponent },
  {path: 'faleconosco', component: CadastrarFaleConoscoComponent},
  {path: 'faleconoscolista', component: ListarFaleConoscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
