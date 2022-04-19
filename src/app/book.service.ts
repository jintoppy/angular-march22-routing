import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookSearchResult, Book } from './models/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookDetails(bookId:string | null){
    return this.http.get<Book>(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  }

  searchBook(query:string | null) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    return this.http.get<BookSearchResult>(url)
              .pipe(
                map((result: BookSearchResult) => result.items)
              )

  }

  getUsers(){
    return this.http.get('/api/users');
  }


}
