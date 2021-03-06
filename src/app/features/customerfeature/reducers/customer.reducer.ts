import {Action, createReducer, on, State} from "@ngrx/store";
import { CustomerActions } from './customer.actions';
import { CustomerApiService } from '../services/customerapi.service';

const initialState = {
  all_customers: null,
  customer_all_orders:null,
  selected_customer:null,
}
const _customerReducer = createReducer<any>(
  initialState,
  on(CustomerActions.SetCustomers, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'customer reducer of set customers');

    return { ...state,all_customers: data.customers }
  }),

  on(CustomerActions.SetCustomer, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'customer reducer of set customer');

    return { ...state,selected_customer: data.customer }
  }),

  on(CustomerActions.SetCustomerOrders, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'customer reducer of set customer orders');

    return { ...state,customer_all_orders: data.orders }
  })
);

export function CustomerReducer(state: State<typeof initialState> | undefined, action: Action) {
  return _customerReducer(state, action);
}

