import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  output: string;
  outputArr : string[] =[];

  constructor() { }

  ngOnInit() {
  }

  setArr():void{
    if(this.output){
      this.outputArr.push(this.output);
    }
  }

  log():void{
    console.log(this.output);
    this.setArr();
  }
}
