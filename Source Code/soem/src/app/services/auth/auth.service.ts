import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CredentialsInterface} from "../../interfaces/auth.interfaces";
import {environment} from "../../../environments/environment";

/**
 * Auth service
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Component constructor
   * @param http Http client injection
   */
  constructor(private readonly http: HttpClient) {
  }

  /**
   * Request to login with credentials
   * @param credentials User credentials
   * @example {
   *   email: 'luis@mail.com',
   *   password: '123'
   * }
   * @see CredentialsInterface
   */
  login(credentials: CredentialsInterface) {
    return this.http.post(`${environment.apiUrl}/login`, credentials);
  }
}
