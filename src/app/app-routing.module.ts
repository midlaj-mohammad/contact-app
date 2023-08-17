import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AllContactComponent } from './all-contact/all-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    path:'' ,component :AllContactComponent
  },
  {
    path:'add-contact',component :AddContactComponent

  },
  {
    path:'edit-contact/:id',component :EditContactComponent
  },
  {
    path:'view-contact/:id',component :ViewContactComponent
    
  },
  {
    path:'**' ,component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
