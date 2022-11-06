import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { data, film } from '../model/model';

@Component({
    selector: 'film-detail',
    templateUrl: 'film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})

export class FilmDetailComponent implements OnInit {
    filmId: string | null;
    film: film | undefined;
    categoryId: string | null;

    constructor(private route: ActivatedRoute) { }

    handleClickDeleteFilm() {
        if (confirm(`${this.film?.filmName} isimli filmi silmek istediğinize emin misiniz?`)) {
            const cat = data.find(cat => cat.categoryId === this.categoryId);
            const index = cat?.list.findIndex(film => film.filmId === this.filmId);
            if (index)
                cat?.list.splice(index, 1);
        }
    }

    ngOnInit() {
        this.route.parent?.paramMap.subscribe(paramMap => {
            this.categoryId = paramMap.get('id');
        })

        this.route.paramMap.subscribe(paramMap => {
            this.filmId = paramMap.get('id');
            const category = data.find(cat => cat.categoryId === this.categoryId);
            this.film = category?.list.find(film => film.filmId === this.filmId);
            window.scrollTo(0, document.body.scrollHeight);
        });
    }
}