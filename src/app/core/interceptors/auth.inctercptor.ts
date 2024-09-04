import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken=environment.API_READ_ACCESS_TOKEN;
        const clonedRequest = req.clone({
            setHeaders: {
              accept: 'application/json',
              Authorization: `Bearer ${authToken}`
            }
          });
      
          return next.handle(clonedRequest);
    }
} 