import { Component} from '@angular/core';

@Component({
  selector: 'nz-demo-table-basic',
  templateUrl: './tom.component.html',
  styleUrls: ['./tom.component.css']
})

export class TomComponent   {



  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}