import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoisaComponent } from './coisa/coisa.component';
import { CasaComponent } from './casa/casa.component';
import { AlunoComponent } from './aluno/aluno.component';


export const ROUTES: Routes= [
    {path: 'home', component: HomeComponent},
    {path: 'coisa', component: CoisaComponent},
    {path: 'casa', component: CasaComponent},
    {path: 'aluno', component: AlunoComponent}
];