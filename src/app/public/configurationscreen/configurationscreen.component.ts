import { Component, OnInit } from '@angular/core';

export interface DashboardTitles {
  text: string;
  id: string;
  icon: string;
}

@Component({
  selector: 'app-configurationscreen',
  templateUrl: './configurationscreen.component.html',
  styleUrls: ['./configurationscreen.component.css']
})
export class ConfigurationscreenComponent implements OnInit {

  dashboardTitles: DashboardTitles[] = [
    
    { text: 'Users', id: 'UsersId',icon: 'group' },
    { text: 'Roles', id: 'RolesId',icon: 'savings' },
    { text: 'master', id: 'RolesId',icon: 'savings' }
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
