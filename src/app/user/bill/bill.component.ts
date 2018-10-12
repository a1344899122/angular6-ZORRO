import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {


  current = 0;

  index = '第一个操作页面';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = '第一个操作页面';
        break;
      }
      case 1: {
        this.index = '第二个操作页面';
        break;
      }
      case 2: {
        this.index = '第三个操作页面';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor() {
  }
}