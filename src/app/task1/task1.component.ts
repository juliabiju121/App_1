import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon";
  btnclick(){
   // alert("Hello from "+this.title)
   const service=new myservice();
   service.onclickbtn(this.title)
   }
}
