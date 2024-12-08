import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'about', component: DetailComponent },
    { path: '**', redirectTo: '' }
];

