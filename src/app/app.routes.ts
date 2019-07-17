import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';




const appRoutes : Routes = [
    {path:'home',component:HomeComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'heroe/:id',component:HeroeComponent},
    {path:'about',component:AboutComponent},
    {path:'busqueda/:nombre',component:BusquedaComponent},
    {path:'**',component:HomeComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

