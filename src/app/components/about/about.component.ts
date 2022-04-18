import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from '../../book.service';
import { Book } from 'src/app/models/book';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bookDetails?: Book;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    // this.route.params.subscribe((val: any) => {
    //   this.bookName = val.bookName;
    // });
    // this.route.paramMap.subscribe((param: ParamMap) => {
    //   const bookId = param.get('bookId');
    //   this.bookService.getBookDetails(bookId)
    //       .subscribe((bookDetails: Book) => {
    //         this.bookDetails = bookDetails;
    //       });
    // });

    this.route.paramMap  //obs1
      .pipe(
        switchMap((param: ParamMap) => this.bookService.getBookDetails(param.get('bookId')))
      )
      .subscribe((bookDetails: Book) => {
        this.bookDetails = bookDetails;
      });
    


  }

}
