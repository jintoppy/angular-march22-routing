import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param: ParamMap) => {
      const searchTxt = param.get('q');
      if(searchTxt){
        this.bookService.searchBook(searchTxt)
          .subscribe((books: Book[]) => {
            this.books = books;
          });
      }
  
    });
  }

  onSearch(txt: string){
    this.router.navigateByUrl(`/?q=${txt}`);

  }

}
