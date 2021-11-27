import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  accessForm: FormGroup;  
  matcher = new ErrorState();
  constructor() {
    this.accessForm = new FormGroup({
      email : new FormControl('', [
        Validators.required,
      ]),
     
    });
   }

  ngOnInit(): void {
  }

}
