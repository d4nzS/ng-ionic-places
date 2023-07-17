import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { AppUrls } from '../../core/constants/app-urls';
import { Router } from '@angular/router';

interface Link {
  title: string;
  icon: string;
  handle: () => void;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {
  links: Link[];

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.links = [
      {
        title: 'Discover Places',
        icon: 'business',
        handle: () => this.router.navigate(['/', AppUrls.PLACES, AppUrls.DISCOVER])
      },
      {
        title: 'Your Bookings',
        icon: 'checkbox-outline',
        handle: () => this.router.navigate(['/', AppUrls.BOOKINGS])
      },
      {
        title: 'Logout',
        icon: 'exit',
        handle: this.onLogout.bind(this)
      }
    ];
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/', AppUrls.AUTH]);
  }
}
