import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CharactersComponent } from './features/characters/characters.component';
import { CharacterComponent } from './features/characters/character/character.component';
import { ContentLayoutComponent } from './layout/contentLayout/contentLayout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'character',
    component: ContentLayoutComponent,
    children: [
      { path: 'character', component: CharactersComponent },
      { path: ':id', component: CharacterComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
