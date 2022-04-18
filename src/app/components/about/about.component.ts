import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bookName: string | null = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe((val: any) => {
    //   this.bookName = val.bookName;
    // });
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.bookName = param.get('bookName');
    });
  }

}
