import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team1',
  templateUrl: './team1.component.html',
  styleUrls: ['./team1.component.css']
})
export class Team1Component  {

  panels = [
    {
      active     : true,
      disabled   : false,
      name       : '这是计划页 1',
      childPannel: [
        {
          active  : false,
          disabled: true,
          name    : '这是计划页 1-1'
        }
      ]
    },
    {
      active  : false,
      disabled: true,
      name    : '这是计划页 2'
    },
    {
      active  : false,
      disabled: false,
      name    : '这是计划页 3'
    }
  ];
}