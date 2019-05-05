import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService} from './auth.service'



@Injectable()
export class AuthGuard implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    constructor(private authService :AuthService) {}
    canActivate (router :ActivatedRouteSnapshot,state : RouterStateSnapshot){
return this.authService.isAuthenticated();


    }
}