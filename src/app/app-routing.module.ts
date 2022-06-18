import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuntenticacaoGuard } from './autenticacao/auntenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home',
  loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  canLoad: [LoginGuard]},
  {path: 'animais',
  loadChildren: () => import('./animais/animais.module').then((m) => m.AnimaisModule),
  canLoad: [AuntenticacaoGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
