import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';

@Component({
  selector: 'app-case-initiation',
  templateUrl: './case-initiation.component.html',
  styleUrls: ['./case-initiation.component.css']
})
export class CaseInitiationComponent implements OnInit {

  caseInitiationForm: FormGroup;  
  matcher = new ErrorState();
  constructor() {
    this.caseInitiationForm = new FormGroup({
      barcode : new FormControl('', [
        Validators.required,
      ]),
      AWB_no : new FormControl('', [
        Validators.required,
      ]),
      demetAccount_number : new FormControl('', [
        Validators.required,
      ]),
      tradingAccount_number : new FormControl('', [
        Validators.required,
      ]),
      PAN_No : new FormControl('', [
        Validators.required,
      ]),
      receiptDate : new FormControl('', [
        Validators.required,
      ]),
      inwardMode : new FormControl('', [
        Validators.required,
      ]),
      clientname_trading : new FormControl('', [
        Validators.required,
      ]),
      clientname_demat  : new FormControl('', [
        Validators.required,
      ]),
      customerEmail : new FormControl('', [
        Validators.required,
      ]),
      customerMobile : new FormControl('', [
        Validators.required,
      ]),
      branchCode_email : new FormControl('', [
       
      ]),
      rmCode_email : new FormControl('', [
       
      ]),
      requestType : new FormControl('', [
       
      ]),
     
    });
   }
  ngOnInit(): void {
  }

}
