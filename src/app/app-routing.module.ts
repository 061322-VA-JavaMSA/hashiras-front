import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
<<<<<<< HEAD
import { CommentsComponent } from './components/comments/comments.component';
=======
import { AuthGuard } from './shared/auth.guard';
>>>>>>> 33488c7d55133c6722ad6973d94c34d9c89fce8f

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'lists',
    component: ListsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'favorites',
    component: FavoritesComponent, canActivate: [AuthGuard]
  },
<<<<<<< HEAD
  { path: 'favorites/:id', component: FavoritesComponent },
  { path: 'comments', 
    component: CommentsComponent,
  },
=======
  { path: 'favorites/:id', component: FavoritesComponent, canActivate: [AuthGuard] }
>>>>>>> 33488c7d55133c6722ad6973d94c34d9c89fce8f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
