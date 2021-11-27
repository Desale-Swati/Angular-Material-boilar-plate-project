import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  loginSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginSub = this.loginService.isLoggedInObservable
    .subscribe((isLogin) => {
      this.isLoggedIn = isLogin;
    });
  }

  ngOnInit() {
    
  }

  logout(){
    this.loginService.setLogin(false);
    this.router.navigate(['/login']);

  }
  
  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }

}
