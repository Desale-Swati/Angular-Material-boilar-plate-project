import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;  
  matcher = new ErrorState();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      userName : new FormControl('', [
        Validators.required,
      ]),
     
      Password : new FormControl('', [
        Validators.required,
      ]),

    });
   }

  ngOnInit(): void {
  }

  login(){
    this.loginService.setLogin(true);
    this.router.navigate(['/dashboard']);
  }
}
