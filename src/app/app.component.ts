import { Component } from '@angular/core';
import { MediumService } from './medium.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private medium:MediumService){}
  title = 'final-exam';
  searchVar:string;
  search()
  {
  //console.log(this.searchVar);
   this.medium.searchData(this.searchVar);
  }
}
