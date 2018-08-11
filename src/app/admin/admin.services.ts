import{Injectable} from '@angular/Core';
import {Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';  
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

import{adminUser} from './admin.modal';


@Injectable()

export class adminServices{

    private _adminLoginURL = 'http://localhost:8080/'

    constructor(private _http: Http){}

    sendAdminLogin(admin){
        const body: adminUser = {
            adminEmail : admin.adminEmail,
            adminPassword : admin.adminPassword

        }
        return this._http.post(this._adminLoginURL + 'adminLogin', body);
    }

}