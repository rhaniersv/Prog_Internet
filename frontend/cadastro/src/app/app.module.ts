import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HomeComponent } from './home/home.component';
import { CoisaComponent } from './coisa/coisa.component';
import { CasaComponent } from './casa/casa.component';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoisaComponent,
    CasaComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
