import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';

@Component({
  selector: 'app-bank-details-modification',
  templateUrl: './bank-details-modification.component.html',
  styleUrls: ['./bank-details-modification.component.css']
})
export class BankDetailsModificationComponent implements OnInit {

  bankdetailsModification: FormGroup;  
  matcher = new ErrorState();
  constructor() {
    this.bankdetailsModification = new FormGroup({
      bankName : new FormControl('', [
        Validators.required,
      ]),
      ifscCode : new FormControl('', [

      ]),
      bankAccountType : new FormControl('', [
        Validators.required,
      ]),
      bankCode : new FormControl('', [
        Validators.required,
      ]),
      bankAccountNo : new FormControl('', [
        Validators.required,
      ]),
      bankAddress1 : new FormControl('', [
        Validators.required,
      ]),
      bankCity : new FormControl('', [
        Validators.required,
      ]),
      bankMicrCode : new FormControl('', [
        Validators.required,
      ]),
      accountCurrency  : new FormControl('', [
        Validators.required,
      ]),
    });
   }


  ngOnInit(): void {
  }

}
