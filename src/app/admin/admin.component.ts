import{Component} from '@angular/core';
import {Router, ParamMap, ActivatedRoute} from "@angular/router";
import{NgForm} from '@angular/forms';

import{adminServices} from './admin.services';

@Component({
    selector: 'admin-app',
    templateUrl: './admin.component.html'
})

export class adminComponent{

    email:string;
    password:string;

    constructor(private _router:Router, private _adminService: adminServices){}

    adminLogin(form: NgForm){
        console.log(form.value.adminEmail)

        this._adminService.sendAdminLogin(form.value).subscribe((data) => {
            console.log(data)
            if(data.status == 201){
                form.reset();
                console.log('Login successful');
            } else {
                console.log('Login failed');
            }
        })
    }

}