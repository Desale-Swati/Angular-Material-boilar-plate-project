import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

 
  myFlagForSlideToggle: boolean = true;
  userCreationForm: FormGroup;  
  matcher = new ErrorState();
  constructor() {
    this.userCreationForm = new FormGroup({
      userSearch : new FormControl('', [
        Validators.required,
      ]),
      userID : new FormControl('', [
        Validators.required,
      ]),
      employeeID : new FormControl('', [
        Validators.required,
      ]),
      email : new FormControl('', [
        Validators.required,
      ]),
      title : new FormControl('', [
        Validators.required,
      ]),
      managerName : new FormControl('', [
        Validators.required,
      ]),
      managerEmail : new FormControl('', [
        Validators.required,
      ]),
      name : new FormControl('', [
        Validators.required,
      ]),
      role : new FormControl('', [
        Validators.required,
      ]),
      site : new FormControl('', [
        Validators.required,
      ]),
     
    });
   }



  ngOnInit(): void {
  }

}
