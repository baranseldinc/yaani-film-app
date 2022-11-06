import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { category, data } from '../model/model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories: category[] = data;
  activePage: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      // TODO search for bestpractice to get path param

      if (val instanceof RoutesRecognized) {
        this.activePage = val.state.root.firstChild?.params['id'];
      }
    });
  }

}
