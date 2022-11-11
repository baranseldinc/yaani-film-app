import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';
import { Observable } from 'rxjs';
import { category, film } from '../model/model';

const firebaseConfig = {
  apiKey: 'AIzaSyDt10hIQ8E1or75zVRiM7ttyNS6qHFx6Lg',
  authDomain: 'yaani-film-app.firebaseapp.com',
  projectId: 'yaani-film-app',
  storageBucket: 'yaani-film-app.appspot.com',
  messagingSenderId: '907245607126',
  appId: '1:907245607126:web:c0ea596e5aa0e3e3e75177',
  databaseURL:
    'https://yaani-film-app-default-rtdb.europe-west1.firebasedatabase.app',
};

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private app: any;
  private db: any;
  changes: Observable<any>;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getDatabase(this.app);
    this.changes = new Observable((observer) => {
      onValue(ref(this.db, '/categories'), (snapshot) => {
        const data = snapshot && snapshot.val();
        data.forEach((item: category) => {
          if (!item.list) item.list = [];
          item.list = item.list.filter((item) => !item.isDeleted);
        });
        observer.next(data);
      });
    });
  }

  saveNewFilm(payload: any, callback: Function) {
    set(
      ref(
        this.db,
        `categories/${payload.categoryIndex}/list/${payload.nextIndex}`
      ),
      {
        filmId: payload.filmId,
        filmName: payload.filmName,
        description: payload.description,
        director: payload.director,
        imageSrc: payload.imageSrc,
      }
    )
      .then(() => {
        callback();
      })
      .catch((e) => {
        console.log(e);
        alert('Beklenmeyen bir hata meydana geldi');
      });
  }

  deleteFilm(
    categoryIndex: number,
    filmIndex: number,
    film: film,
    callback: Function
  ) {
    set(ref(this.db, `categories/${categoryIndex}/list/${filmIndex}`), {
      ...film,
      isDeleted: true,
    })
      .then(() => {
        callback();
      })
      .catch((error: any) => {
        console.log(error);
        alert('Beklenmeyen bir hata meydana geldi');
      });
  }
}
