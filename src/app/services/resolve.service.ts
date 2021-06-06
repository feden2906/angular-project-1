import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Observable<any[]>>{

  constructor(private httpClient:HttpClient) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    // return new Promise(res => setTimeout(() => {
    //   console.log('hello')
    //   res(true);
    // }, 5000));
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments');
    }
}
