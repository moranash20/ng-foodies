import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLogedIn$: Observable<boolean>;

  constructor(private authServise: AuthService) {
    this.isLogedIn$ = authServise.isLoggedIn();
  }

  ngOnInit(): void {}

  public sigInWithGoogle(): void {
    this.authServise.signInWithGoogle();
  }

  public signout(): void {
    this.authServise.signOut();
  }
}
