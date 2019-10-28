import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }


  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
}

// export class LoginComponent {
//   form: FormGroup = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl(''),
//   });

//   @Input() error: string | null;

//   @Output() submitEM = new EventEmitter();

//   submit() {
//     if (this.form.valid) {
//       this.submitEM.emit(this.form.value);
//     }
//   }
// }
