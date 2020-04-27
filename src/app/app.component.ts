import { Component, SimpleChanges, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, 
AfterViewChecked{
  ngOnChanges(changes: SimpleChanges): void{

  }
  title = 'lifecycle-hooks-app';
  constructor(){
    alert("1. on chnages called");
  }
  ngDoCheck(): void{
    alert("3. do check is called!")
  }

  ngAfterContentInit(): void{
    alert("4. after content init called");
  }
  ngAfterContentChecked(): void{
    alert("5. afetr content projected is checked")
  }
  ngAfterViewInit(): void{
    alert("6. after view init is called")
  }

  ngAfterViewChecked(): void{
    alert("7. after view is checked")
  }

  ngOnDestroy(): void{
    alert("8. on destroy is called")
  }
  
}

// ngOnChanges()
// This hook is basically called after the constructor is called and any other time there is a property change inside your component.here alert will pop up before the component is loaded.



// ngDoCheck()
//  It is called during every change detection run, Angular has an internal system that goes around the component processes every so often looking for changes that the compiler cannot detect on its own. This hook is called at every change detection run, usually after the ngOnInit hook is called.

//ngAfterContentInit()

// this hook is called afetr ng-content.
// ie afetr projecting contents to chils component from root component.


// ngAfterContentChecked()

// this hook is called after AfterContentInit is called, also after DoCheck() is called.

//ngAfterViewInit()
// called after component view and its
// subsequent view has been initialized.

// ngAfterviewChecked()
// called after ngAfterViewInit() and ngAfterContentChecked().

// ngOnDestroy()
// called once a component is destroyed


// NOTE:
// ngDoCheck, ngAfterContentChecked and ngAfterViewChecked hooks to be called multiple times as changes occurs in the component.a

