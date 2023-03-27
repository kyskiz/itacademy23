import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { SheepComponent } from './sheep/sheep.component';
import { SingleComponent } from './sheep/single/single.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EntryComponent },
  { path: 'sheep', component: SheepComponent },
  { path: 'sheep/:name', component: SingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
