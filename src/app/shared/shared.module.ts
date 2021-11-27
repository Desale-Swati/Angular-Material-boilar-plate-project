import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import {MatDividerModule} from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AddressModificationCorrespondenceComponent } from './components/address-modification-correspondence/address-modification-correspondence.component';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressModificationPermanentComponent } from './components/address-modification-permanent/address-modification-permanent.component';
import { ContactDetailsModificationEmailaddressComponent } from './components/contact-details-modification-emailaddress/contact-details-modification-emailaddress.component';
import { BankDetailsModificationComponent } from './components/bank-details-modification/bank-details-modification.component';
import { AccountClosureComponent } from './components/account-closure/account-closure.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    AddressModificationCorrespondenceComponent,
    AddressModificationPermanentComponent,
    ContactDetailsModificationEmailaddressComponent,
    BankDetailsModificationComponent,
    AccountClosureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatToolbarModule,MaterialModule,
    MatIconModule,
    MatCardModule,MatMenuModule,
    MatDividerModule,ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent
  ]
})
export class SharedModule { }
