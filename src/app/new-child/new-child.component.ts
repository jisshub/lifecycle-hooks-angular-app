import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnClickThis(){
    return "red";
  }

  OnGet(){
    
  }
}
