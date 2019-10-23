import { Injectable } from '@angular/core';
import {INPUTS} from "./mock-inputs";

@Injectable({
  providedIn: 'root'
})
export class ChildInputService {
  setInputs(input: string):void{

  }
  getInputs():string{
    for(let input of INPUTS){
      return input;
    }
  }
}
