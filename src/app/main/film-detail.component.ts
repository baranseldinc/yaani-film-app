import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { data, film } from '../model/model';

@Component({
    selector: 'film-detail',
    templateUrl: 'film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})

export class FilmDetailComponent implements OnInit {
    filmId: string;
    film: film | undefined;
    categoryId: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.url.subscribe((url: UrlSegment[]) => {
            this.filmId = url[1].path;
            const films: film[] = data.reduce((acc: film[], item: any) => {
                acc = [...acc, ...item.list];
                return acc;
            }, []);
            this.film = films.find(item => item.filmId === this.filmId);
            window.scrollTo(0, document.body.scrollHeight);
        });
    }
}