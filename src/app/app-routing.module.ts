import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';


const routes: Routes = [
  {path:'',component:ShowCustomersComponent},
  {path:'addCustomer',component:CustomerRegComponent },
  {path:'editCustomer/:id',component:CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
