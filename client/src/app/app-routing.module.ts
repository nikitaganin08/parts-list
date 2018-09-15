import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartListComponent } from './part-list/part-list.component';
import { CreatePartComponent } from './create-part/create-part.component';
import { SearchPartComponent } from './search-part/search-part.component';

const routes: Routes = [
  { path: '', redirectTo: 'part', pathMatch: 'full' },
  { path: 'part', component: PartListComponent },
  { path: 'add', component: CreatePartComponent },
  { path: 'search', component: SearchPartComponent},
  { path: 'edit/:id', component: CreatePartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
