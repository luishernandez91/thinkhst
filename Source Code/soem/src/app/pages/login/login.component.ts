import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";

/**
 * Login component
 */
@Component({
  selector: 'cmp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  /**
   * Form handler
   */
  form: FormGroup;
  /**
   * Submit form handler subscription
   */
  subscription: Subscription;
  /**
   * Flag for login response status
   */
  loginStatus: boolean;
  /**
   * Show login message
   */
  showLoginMessage: boolean;
  user: any;

  constructor(private readonly authService: AuthService,
              private readonly translate: TranslateService) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Build form
   */
  buildForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  /**
   * Handler on submit credentials
   */
  onSubmitCredentials() {
    this.subscription = this.authService.login(this.form.value)
      .subscribe(
        (response: any) => {
          this.showLoginMessage = true;
          this.loginStatus = true;
          this.user = response.user;
        },
        (err: HttpErrorResponse) => {
          this.showLoginMessage = true;
          this.loginStatus = false;
        }
      )
  }

  /**
   * Change language handler
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
