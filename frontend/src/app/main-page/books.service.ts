import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Book } from './book';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class BooksService {
  booksUrl = 'http://localhost:3000/api/books';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('BooksService');
  }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
        catchError(this.handleError('getBooks', []))
      );
  }
  searchBooks(term: string): Observable<Book[]> {
    term = term.trim();

    const options = term ?
      { params: new HttpParams().set('title', term) } : {};

    return this.http.get<Book[]>(this.booksUrl, options)
      .pipe(
        catchError(this.handleError<Book[]>('searchBooks', []))
      );
  }
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions)
      .pipe(
        catchError(this.handleError('addBook', book))
      );
  }
  deleteBook(id: string): Observable<{}> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteBook'))
      );
  }
  updateBook(book: Book): Observable<Book> {
    // httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.put<Book>(this.booksUrl, book, httpOptions)
      .pipe(
        catchError(this.handleError('updateBook', book))
      );
  }
}
