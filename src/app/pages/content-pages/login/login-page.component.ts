import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  loginFormSubmitted = false;
  isLoginFailed = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });


  constructor(private router: Router, private authService: AuthService,
              private spinner: NgxSpinnerService,
              private storage: Storage,
              ) {
                this.logueado();
  }
  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    this.authService.signinUser(this.loginForm.value.username, this.loginForm.value.password).subscribe((res) => {
          this.spinner.hide();
          this.router.navigate(['/page']);
      }, (err) => {
        this.isLoginFailed = true;
        this.spinner.hide();
    });
  }

  async logueado() {
    const log = await this.storage.get('islogged');
    if (log) {
      this.router.navigate(['/pages/entorno']);
    }
  }

}
