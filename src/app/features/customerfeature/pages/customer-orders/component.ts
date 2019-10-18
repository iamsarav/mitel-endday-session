import { Component } from '@angular/core';

@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerOrdersComponent{
    customer={
        name:"customer1",
        email:"email1",
        phoneno:1234567890,
        address:"addres1"
    }

    customerorders:any=[
        {
            id:1,
            date:"10/01/2019",
            totalprice:"1000"
        },
        {
            id:2,
            date:"12/02/2019",
            totalprice:"2000"
        }
    ]
}