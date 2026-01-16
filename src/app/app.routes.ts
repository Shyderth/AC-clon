import { Routes } from '@angular/router';
import {Men} from './pages/men/men';
import {Women} from './pages/women/women';
import {Kids} from './pages/kids/kids';
import {Sale} from './pages/sale/sale';
import {Accesories} from './pages/accesories/accesories';
import {Home} from './pages/home/home';
import {Test} from './tests/test/test';
import {Form} from './tests/form/form';

export const routes: Routes = [
  {path: '', component: Home},
  {path:'men', component:Men},
  {path:'women', component:Women},
  {path:'kids', component:Kids},
  {path: 'accessories', component: Accesories},
  {path:'sale', component:Sale},
  {path:'test', component: Test},
  {path:'form', component:Form},
];
