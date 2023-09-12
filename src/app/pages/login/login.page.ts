import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionObject } from 'src/app/models/connection-object';
import { AuthService } from './../../providers/auth.service';

@Component({
  selector: 'tc-login',
  templateUrl: './login.page.html',
})
export class LoginPage {

  authReactiveForm: FormGroup;

  errorReturned: string = "";

  connectionObject: ConnectionObject = {
    pseudo: "",
    motDePasse: "",
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private router: Router) {
    this.authReactiveForm = this.fb.group({
      pseudo: ['', {
        validators: [Validators.required],
      }
      ],
      motDePasse: ['', [Validators.required]],
    }
    )
  }

  onSubmit() {
    this.errorReturned = "";
    this.connectionObject = {
      pseudo: this.authReactiveForm.get('pseudo')?.value,
      motDePasse: this.authReactiveForm.get('motDePasse')?.value,
    }
    this.authService
      .connecter(this.connectionObject)
      .subscribe({
        next: (rep) => {
          this.authReactiveForm.reset();
          console.log(atob(rep.jwt.split('.')[1]));
          const pseudo = JSON.parse(atob(rep.jwt.split('.')[1])).sub;
          window.localStorage.setItem('pseudo', pseudo);
          window.localStorage.setItem('jwt', rep.jwt);
          this.router.navigate(['welcomePage']);
        },
        error: (e) => {
          this.errorReturned = e.error.error;
        },
      })
  }
}
