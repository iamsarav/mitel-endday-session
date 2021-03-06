import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './pages/customer-add/component';
import { CustomerListComponent } from './pages/customer-list/component';
import { CustomerOrdersComponent } from './pages/customer-orders/component';
import { CustomerComponent } from './components/customer/component';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { customerreducers,metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './reducers/customer.effects';

const routes:Routes=[
    { path:"",component:CustomerListComponent },
    { path:"add",component:CustomerAddComponent },
    { path:"list",component:CustomerListComponent },
    { path:":id/orders",component:CustomerOrdersComponent }
]
@NgModule({
    declarations: [ CustomerAddComponent,CustomerListComponent,CustomerOrdersComponent,CustomerComponent],
    imports: [ 
        RouterModule.forChild(routes) ,
        CommonModule,
        MatCardModule,
        SharedModule,
        FormsModule,
        MatButtonModule,
        StoreModule.forFeature('customer',customerreducers),
        EffectsModule.forFeature([CustomerEffects])],
    exports: [ RouterModule ],
})
export class CustomerModule{

}