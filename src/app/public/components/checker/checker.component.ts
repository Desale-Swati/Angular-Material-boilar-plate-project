import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {
  selectedToppings:any;
  requestType =  [
    'Address modification – correspondence and permanent',
   'Contact details modification – email address and mobile number', 
   'Bank details modification – bank linked to demat and trading account', 
   'Nomination – addition, modification & cancellation',
    'Income Range updation', 
    'BSDA flagging',
    'SMS alert facility',
    'Signature Change',
    'Date of Birth Change',
    'Freezing / Unfreezing',
    'Family Declaration for same email & mobile',
    'Aadhaar updation',
    'Name Change / Correction',
    'KYC update / reactivation',
    'PAN Change',
    'Power of Attorney registration',
    'Trading Authorization record',
    'Account Closure',
    'Others – on selection a free text field to capture request type'
  ];

  checkerStatus = [
    'Completed',
    'Hold',
    'Rejected'
  ];

  rejectionRemark = [
    'Completed',
    'Hold',
    'Rejected'
  ];


  checkerForm: FormGroup;  
  matcher = new ErrorState();
  constructor() {
    this.checkerForm = new FormGroup({
      barcode : new FormControl('', [
        Validators.required,
      ]),
      dematAccount_number : new FormControl('', [
        Validators.required,
      ]),
      tradingAccount_number : new FormControl('', [
        Validators.required,
      ]),
      checker_status : new FormControl('', [
        Validators.required,
      ]),
      branchCode : new FormControl('', [
        Validators.required,
      ]),
      checker_remark : new FormControl('', [
       
      ]),
      rejection_remarks : new FormControl('', [
        Validators.required,
      ]),
      employeeCode : new FormControl('', [
       
      ]),
      requestType : new FormControl('', [
       
      ]),
     
    });
   }


  ngOnInit(): void {
  }

}
