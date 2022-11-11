import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from '../model/model';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent implements OnInit {
  categories: category[];
  filmName: string;
  filmId: string;
  categoryId: string;
  description: string;
  director: string;
  imageSrc: string;

  constructor(private service: FilmService, private router: Router) {}

  handleKeyupFilmName() {
    this.filmId = kebabCase(this.filmName);
  }

  save() {
    const categoryIndex = this.categories.findIndex(
      (item) => item.categoryId === this.categoryId
    );
    const list = this.categories[categoryIndex];
    const nextIndex = this.categories[categoryIndex].nextIndex;
    this.service.saveNewFilm(
      {
        categoryIndex,
        nextIndex,
        filmId: this.filmId,
        filmName: this.filmName,
        description: this.description,
        director: this.director,
        imageSrc: this.imageSrc,
      },
      () => {
        this.router.navigate(['category/', this.categoryId]);
      }
    );
  }

  ngOnInit(): void {
    this.service.changes.subscribe({
      next: (data: category[]) => {
        this.categories = data;
      },
      error: (msg) => {
        console.log('Error: ', msg);
      },
    });
  }
}

function kebabCase(text: string): string {
  return text
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}
