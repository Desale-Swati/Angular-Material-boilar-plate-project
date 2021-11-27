import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  selectedToppings:any;
  requestType =  [
    'Address modification – correspondence and permanent',
   'Contact details modification – email address and mobile number', 
   'Bank details modification – bank linked to demat and trading account', 
   'Nomination – addition, modification & cancellation',
    'Income Range updation', 
    'Tomato'
  ];

  dataEntryStatus = [
    'Completed',
    'Hold',
    'Rejected'
  ];

  rejectionRemark = [
    'Completed',
    'Hold',
    'Rejected'
  ];
  dataEntry: FormGroup;  
  matcher = new ErrorState();
  constructor() {
    this.dataEntry = new FormGroup({
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
