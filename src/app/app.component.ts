import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  ytLink: string = '';

  safeYtLink: SafeResourceUrl = '';

  constructor(private _sanitizer: DomSanitizer) {}

  onLinkChange(link: string): void {
    this.safeYtLink = this._sanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
