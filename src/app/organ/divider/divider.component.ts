import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

  isSpinning=true;
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.isSpinning = false
      }, 1500);
  }

}
