import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BooksService } from './books.service';
import { Book } from './book';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  providers: [ BooksService ],
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  books: Book[];
  editBook: Book;

  statuses: Status[] = [
    {value: 'complete', viewValue: 'Complete'},
    {value: 'wip', viewValue: 'WIP'},
    {value: 'dropped', viewValue: 'Dropped'}
  ];
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks()
      .subscribe(books => this.books = books);
  }

  add(title: string, author: string, chapters: number, status: string): void {
    this.editBook = undefined;
    title = title.trim();
    author = author.trim();
    if (!title) { return; }
    if (!author) { return; }
    if (!chapters) { return; }
    if (!status) { return; }
    const newBook: Book = { title, author, chapters, status } as Book;
    this.booksService.addBook(newBook).subscribe(book => {
      this.books.push(book);
    });
  }

  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.booksService.deleteBook(book._id).subscribe();
  }

  edit(book) {
    this.editBook = book;
  }

  search(searchTerm: string) {
    this.editBook = undefined;
    if (searchTerm) {
      this.booksService.searchBooks(searchTerm)
        .subscribe(books => this.books = books);
    }
  }

  update() {
    if (this.editBook) {
      this.booksService.updateBook(this.editBook)
        .subscribe(book => {
          const ix = book ? this.books.findIndex(b => b._id === book._id) : -1;
          if (ix > -1) { this.books[ix] = book; }
        });
      this.editBook = undefined;
    }
  }
}
