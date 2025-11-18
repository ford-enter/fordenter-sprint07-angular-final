import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent, title: 'Login' , canActivate: [noAuthGuard]},
    {path: 'index', component: IndexComponent, title: 'Painel de Controle', canActivate: [authGuard]},
    {path: 'dashboard', component: DashboardComponent, title: 'Dashboard', canActivate: [authGuard]}
];
