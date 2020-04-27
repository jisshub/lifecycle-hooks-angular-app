import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  clickValue: boolean = false;
  tdDate:string;
  constructor() { }

  ngOnInit(): void {
    alert("2. on init is calleds");
  }


  OnChangeDate(): void{
    const dt: Date = new Date();
    this.tdDate = dt.toLocaleTimeString();
  }
  OnDisplayData(): boolean{
    this.clickValue = !this.clickValue;
    return this.clickValue;
  }

}

// ngOnit is called right after the very first
// onchanges() hook is called. calle donly once
// , it initializes the component, sets and displays component input properties. 
// It is the most important lifecycle hook in Angular as it signals the activation of the created component.
// contents will displayed 
// after it is called


