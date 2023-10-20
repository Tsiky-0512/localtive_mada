import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';
import Swal, {SweetAlertOptions} from "sweetalert2";
import {AuthService} from "../user/auth.service";

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;
    if (this.authService.isConnected()) {
      req = req.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.authService.get()}`)
      })
    }
    Swal.fire({
      title: 'Chargement...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      willOpen(popup: HTMLElement) {
        Swal.showLoading()
      },
      showConfirmButton: false
    }).then()
    return next.handle(req).pipe(
      tap({
        next: d => {
          Swal.close()
        },
        error: (err: HttpErrorResponse) => {
          const options: SweetAlertOptions = {
            icon: "error"
          }
          if (err.status >= 500) {
            options.title = "Erreur serveur"
          }
          else if (err.status >= 400) {
            // TODO, replace this by the error sent by the backend.
            console.log(err.error)
            options.title = err.error.data || "Erreur utilisateur";
          }
          else if (err.status == 0) {
            options.title = "Vérifiez votre connexion"
          }
          Swal.fire(options).then()
          return of();
        }
      })
    );
  }

}
