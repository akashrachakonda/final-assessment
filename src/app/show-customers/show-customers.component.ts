import { Component, OnInit } from '@angular/core';
import {MediumService} from '../medium.service';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {

  customerData:any;
  firstName:string;
  lastName:string;
  city:string;
  address:string;
  state:string;
  _id:any;
  constructor(private medium:MediumService) { }

  ngOnInit(): void {
    this.onLoad();
  }
  onLoad(){
    this.medium.customerGetData().subscribe(data => {
      console.log(data);
      this.customerData=data;
      //console.log(this.customerData);
    });
  
  }

}
