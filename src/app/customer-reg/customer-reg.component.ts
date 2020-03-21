import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {MediumService} from '../medium.service';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {
  firstName:string;
  LastName:string;
  email:string;
  address:string;
  city:string;
  state:string;
  constructor( private router:Router,private medium:MediumService) { }

  ngOnInit(): void {
  }
  onSubmit(value:any){
    console.log(value);
    this.medium.customerData(value);
    alert("Registered Successfully...");
    this.router.navigateByUrl('/');

  }

}
