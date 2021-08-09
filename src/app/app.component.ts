import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-foodies';

  constructor(private authServise: AuthService){}

  public sigInWithGoogle(){
    this.authServise.signInWithGoogle()
  }
}

/**
 * container
 * category
 * foodies list
 * recipe
 */