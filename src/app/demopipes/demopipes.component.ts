import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="banglore";
today=Date();

user={
  id:100,
  name:"steeve",
  DOB:"21-07-2022",
  salary:250000
}
}

