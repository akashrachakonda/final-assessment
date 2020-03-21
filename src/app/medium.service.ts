import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor(private http:HttpClient) { }

  customerData(formDetails: any) {
    console.log('Customer Service is Executing');

    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/api/customer-ins', JSON.stringify(formDetails), {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });



    console.log('Customer Service is Terminating');
  }


  customerGetData():any{
return this.http.get('http://localhost:3000/api/customer-get');
  }

  customerSingleData(id:any):any{
    return this.http.get('http://localhost:3000/api/customer-profile/'+id);
  }



  customerUpdateData(formDetails: any) {
    console.log('Customer Service is Executing');
console.log(formDetails);
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

    this.http.put('http://localhost:3000/api/customer-update', JSON.stringify(formDetails), {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });



    console.log('Customer Service is Terminating');
  }
data_id:any;
  deleteProfile(id:any):any{
    
    this.data_id=id;
    console.log(this.data_id);
    this.http.delete('http://localhost:3000/api/customer-delete/'+this.data_id).subscribe(data => {
      console.log(data);
    });

  }
searchValue:any;
  searchData(value:any){
    this.http.get('http://localhost:3000/api/customer-search/'+value).subscribe(data => {
      console.log(data);
      this.searchValue=data;
    });
    
  }


}
