import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  links = [
    {
      id: 1,
      link: 'home',
      text: 'Home'
    },{
      id: 2,
      link: 'home',
      text: 'Team'
    },{
      id: 3,
      link: 'home',
      text: 'About us'
    },{
      id: 4,
      link: 'home',
      text: 'Contact'
    },
  ]

  constructor(private breakpointObserver: BreakpointObserver) {}

  categorySelect(event: any, category:string) {
    console.log(event.target)
    console.log(category)
  }
}
