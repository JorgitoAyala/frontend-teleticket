import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

//Modulos importantes
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { ListarEventosComponent } from './components/listar-eventos/listar-eventos.component';
import { LoginTemplateFormComponent } from './components/login-template-form/login-template-form.component';
import { RegisterTemplateFormComponent } from './components/register-template-form/register-template-form.component';
import { HomeEventoComponent } from './components/home-evento/home-evento.component';
import { OneProductComponent } from './components/one-product/one-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEventoComponent,
    ListarEventosComponent,
    LoginTemplateFormComponent,
    RegisterTemplateFormComponent,
    HomeEventoComponent,
    OneProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
