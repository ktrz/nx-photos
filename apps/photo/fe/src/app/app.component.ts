import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="top-nav">
      <h1>Top Nav</h1>
      <div class="top-nav-element">
        <a class="top-nav-link" routerLink="list" routerLinkActive="active">Photo List</a>
      </div>
      <div class="top-nav-element">
        <a class="top-nav-link" routerLink="profile" routerLinkActive="active">Profile</a>
      </div>
    </div>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
