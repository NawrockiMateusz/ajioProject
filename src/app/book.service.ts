import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { authorData } from './authorData';
import { Book } from './book';
import { isbnData } from './isbnData';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookUrl = 'https://openlibrary.org/isbn/';
  private autorUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  getBook(isbn: string): Observable<Book> {
    return this.http.get<isbnData>(`${this.bookUrl}${isbn}.json`).pipe(
      switchMap(({ title, isbn_13, authors }) => {
        if (!authors) {
          return of({
            isbn: isbn_13[0],
            author: 'brak',
            title,
          });
        }
        return this.http
          .get<authorData>(`${this.autorUrl}${authors[0].key}.json`)
          .pipe(
            map(({ name }) => {
              return {
                isbn: isbn_13[0],
                author: name,
                title,
              };
            })
          );
      }),
      tap((_) => console.log(_))
    );
  }
}
