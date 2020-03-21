import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediumService } from '../medium.service';



@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  firstName:string;
  lastName:string;
  email:string;
  address:string;
  state:string;
  city:string;
  id:any;

  constructor(private router:Router,private ac:ActivatedRoute,private medium:MediumService) { }
  customerProfileData:any;
  ngOnInit(): void {
    const id=this.ac.snapshot.params.id;
    console.log(id);
    this.medium.customerSingleData(id).subscribe(data => {
      console.log(data);
      this.firstName=data.firstName;
      this.lastName=data.lastName;
      this.email=data.email;
      this.address=data.address;
      this.state=data.state;
      this.city=data.city;

      
    });

  }
  customerNewData:any;
  onEdit(){
    const id=this.ac.snapshot.params.id;
    console.log(id);
    this.customerNewData={id:id,firstName:this.firstName,lastName:this.lastName,email:this.email,address:this.address,state:this.state,city:this.city};

    console.log(this.customerNewData);
    this.medium.customerUpdateData(this.customerNewData);
    alert("Details updated...");
    this.router.navigateByUrl('/');

  }
  back(){
    this.router.navigateByUrl('/');
  }
  onDelete()
  {
    const id=this.ac.snapshot.params.id;
    this.medium.deleteProfile(id);
    alert("Profile Deleted...");
    this.router.navigateByUrl('/');



  }

}
