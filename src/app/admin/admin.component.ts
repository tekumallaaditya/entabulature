import{Component} from '@angular/core';
import {Router, ParamMap, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'admin-app',
    templateUrl: './admin.component.html'
})

export class adminComponent{

    constructor(private _router:Router){}

}