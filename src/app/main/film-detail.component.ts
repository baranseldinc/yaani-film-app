import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category, film } from '../model/model';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'film-detail',
  templateUrl: 'film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  filmId: string | null;
  filmIndex: number;
  film: film | undefined;
  categoryId: string | null;
  categoryIndex: number;

  constructor(private route: ActivatedRoute, private router: Router, private service: FilmService) { }

  handleClickDeleteFilm() {
    if (
      confirm(
        `${this.film?.filmName} isimli filmi silmek istediğinize emin misiniz?`
      )
    ) {
      this.service.deleteFilm(this.categoryIndex!, this.filmIndex!, () => {
        this.router.navigate(['/category/', this.categoryId]);
      })
    }
  }

  ngOnInit() {
    this.route.parent?.paramMap.subscribe((paramMap) => {
      this.categoryId = paramMap.get('id');
    });

    this.route.paramMap.subscribe((paramMap) => {
      this.filmId = paramMap.get('id');
      this.subscribeToDataChanges();

    });

    this.subscribeToDataChanges
  }

  subscribeToDataChanges(): void {
    this.service.changes.subscribe({
      next: (data: category[]) => {
        this.categoryIndex = data.findIndex((cat) => cat.categoryId === this.categoryId);
        const category = data[this.categoryIndex];
        this.filmIndex = category?.list.findIndex(film => film.filmId === this.filmId)!;
        this.film = category?.list[this.filmIndex];
        window.scrollTo(0, document.body.scrollHeight);
      },
      error: (msg) => {
        console.log('Error: ', msg);
      }
    });
  }
}
