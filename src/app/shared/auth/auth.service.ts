import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();
@Injectable()
export class AuthService {

   /** Varibable publica que entrega infromacion sobre el estado de la sesion */
   public loggedIn = new BehaviorSubject<boolean>(false);

  // tslint:disable-next-line: variable-name
  constructor(public router: Router,
              private http: HttpClient,
              private storage: Storage)
  {
    this.checkToken();
  }

  /**
   * Loguea al usuario y setea la informacion requerida
   * @param username string
   * @param password string
   */
  signinUser(username: string, password: string): Observable<any> {
    const auth = {
      username,
      password
    };

    return this.http
      .post<any>(`${environment.apiUrl}/auth/login`, auth)
      .pipe(
        map((res: any) => {
          this.saveToken(res.token);
          this.saveData(res.user);
          this.storage.set('islogged', true);
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => {
          return this.handlerError(err);
        })
    );
  }

  isAuthenticated() {
    return true;
  }

   /**
    * Verifica si el Token de sesion aun se encuentra activo
    */
  async checkToken() {
    let isExpired: boolean;
    await this.storage.get('token').then((token) => {
      isExpired = helper.isTokenExpired(token);
    });
    isExpired ? this.logout() : this.loggedIn.next(false);
  }

  /**
   * Comprueba si el usuario esta loggeado a traves de la variable booleana
   */
  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  /**
   * Retorna error en caso de que el login falle
   * @param err Observable
   */
  private handlerError(err: any): Observable<never> {
    let errorMessage = 'An error occured retriving data';
    if (err) {
      errorMessage = `${err.error.message}`;
    }
    return throwError(errorMessage);
  }

  /**
   * Funcion para finalizar sesion y eliminar datos almacenados en el navegador
   */
  logout(): void {
    this.storage.clear();
    this.router.navigate(['pages/login']);
  }


  /**
   * Setea la variable Token en la Base de datos Virtual
   * @param token String
   */
  private saveToken(token: string): void {
    this.storage.set('token', token);
  }

  /**
   * Almacena informacion general del Usuario y sus asignaciones
   * @param user any
   */
  private saveData(user: any): void {
    this.storage.set('uid', user.id);
    this.storage.set('username', user.username);
    this.storage.set('email', user.email);
  }

}
