import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorState } from 'src/app/core/ErrorState/errorstate-handler';

@Component({
  selector: 'app-address-modification-permanent',
  templateUrl: './address-modification-permanent.component.html',
  styleUrls: ['./address-modification-permanent.component.css']
})
export class AddressModificationPermanentComponent implements OnInit {

  addressPermanent: FormGroup;  
  matcher = new ErrorState();
  constructor() {
    this.addressPermanent = new FormGroup({
      add1 : new FormControl('', [
        Validators.required,
      ]),
      add2 : new FormControl('', [

      ]),
      locality : new FormControl('', [
        Validators.required,
      ]),
      city : new FormControl('', [
        Validators.required,
      ]),
      pincode : new FormControl('', [
        Validators.required,
      ]),
      correspondenceAddress : new FormControl('', [
        Validators.required,
      ]),
      stateCode : new FormControl('', [
        Validators.required,
      ]),
      citySequence : new FormControl('', [
        Validators.required,
      ]),
      countryCode  : new FormControl('', [
        Validators.required,
      ]),
      userRemark : new FormControl('', [
        Validators.required,
      ]),
      boSubStatus : new FormControl('', [
        Validators.required,
      ]),
      fileName : new FormControl('', [
        Validators.required,
      ]),
    });
   }


  ngOnInit(): void {
  }

}
