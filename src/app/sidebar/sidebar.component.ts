import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { category } from '../model/model';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories: category[];
  activePage: string | null;

  constructor(private router: Router, private service: FilmService) {
  }

  addFilm() {
    this.router.navigate(['add-film']);
  }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      // TODO search for bestpractice to get path param

      if (val instanceof RoutesRecognized) {
        this.activePage = val.state.root.firstChild?.params['id'];
      }
    });

    this.subscribeToDataChanges();
  }

  subscribeToDataChanges(): void {
    this.service.changes.subscribe({
      next: (data: category[]) => {
        this.categories = data;
      },
      error: (msg) => {
        console.log('Error: ', msg);
      }
    });
  }

}
