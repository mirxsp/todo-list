import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  date: number;
  month: string;

  private monthNames = new Map([
    [0, "JAN"],
    [1, "FEB"],
    [2, "MAR"],
    [3, "APR"],
    [4, "MAY"],
    [5, "JUN"],
    [6, "JUL"],
    [7, "AUG"],
    [8, "SEP"],
    [9, "OCT"],
    [10, "NOV"],
    [11, "DEC"],
  ]);

  constructor() { 
    const date = new Date();
    this.date = date.getDate();
    this.month = this.monthNames.get(date.getMonth()) ?? "UNK";
  }

  ngOnInit(): void {
  }

}
