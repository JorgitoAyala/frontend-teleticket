import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { HomeEventoComponent } from './components/home-evento/home-evento.component';

//Components
import { ListarEventosComponent } from './components/listar-eventos/listar-eventos.component';
import { LoginTemplateFormComponent } from './components/login-template-form/login-template-form.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { RegisterTemplateFormComponent } from './components/register-template-form/register-template-form.component';

const routes: Routes = [
  { path: '', component: HomeEventoComponent },
  { path: 'login', component: LoginTemplateFormComponent },
  { path: 'register', component: RegisterTemplateFormComponent },
  { path: 'listar-evento', component: ListarEventosComponent },
  { path: 'one-evento/:id', component: OneProductComponent },
  { path: 'crear-evento', component: CrearEventoComponent },
  { path: 'editar-evento/:id', component: CrearEventoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
