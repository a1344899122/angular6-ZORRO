import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {


  array = [ 1, 2, 3, 4 ];
  
  constructor() { }

  ngOnInit() {
  }

}
