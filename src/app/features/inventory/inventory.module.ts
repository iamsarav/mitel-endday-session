import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './pages/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

import { AddItemComponent } from './pages/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import {DemoMaterialModule} from "../../shared/material-modules.module";
import { reducers } from 'src/app/features/inventory/reducers';
import { InventoryEffects } from './reducers/inventory.effect';
import { EffectsModule } from '@ngrx/effects';


const routes: Routes = [
  { path: '', component: ListItemComponent },
  { path: 'details/:id', component: ItemDetailsComponent },
  { path: 'add', component: AddItemComponent }

];

@NgModule({

  declarations: [ListItemComponent, ItemComponent, ItemDetailsComponent, AddItemComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule, FormsModule, DemoMaterialModule, SharedModule,
    StoreModule.forFeature("inventory", reducers as any), 
    EffectsModule.forFeature([InventoryEffects])],
  exports: [RouterModule],



})
export class InventoryModule { }
