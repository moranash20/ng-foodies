import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesContainerComponent } from './recipes/Components/recipes-container/recipes-container.component';

const routes: Routes = [
  {
    path: 'categoryId/:recipeId',
    component: RecipesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
