import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, title: "Login"},
    {path: 'index', component: IndexComponent, title: "Painel de Controle"},
    {path: 'dashboard', component: DashboardComponent, title: "Dashboard"}
];
