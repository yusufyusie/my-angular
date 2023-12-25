import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit { 

  totalAssets: number = 0;
  distrubuteAssets: number = 0; 
  transferAssets: number = 0; 
  distroyAssets: number = 0; 
  
  constructor() { }
  
  ngOnInit(): void { 
    this.totalAssets = 200;
    this.distrubuteAssets = 200;
    this.transferAssets = 200;
    this.distroyAssets = 200;     
  } 
}



