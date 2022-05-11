import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  spinner: boolean = false;
  book$!: Observable<Book>;
  subcjet = new Subject<string>();
  constructor(private bookService: BookService) {}

  getBook(isbn: string): void {
    this.subcjet.next(isbn.replace('-', ''));
  }

  ngOnInit(): void {
    this.book$ = this.subcjet.pipe(
      tap(() => (this.spinner = true)),
      switchMap((value) => this.bookService.getBook(value)),
      tap(() => (this.spinner = false))
    );
  }
}
