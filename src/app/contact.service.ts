import { Injectable } from '@angular/core';
import { Contact } from './contact-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
     
  constructor() { }
  getData(){
    return [
        {"id":1, "name":"uddav", "mobile":1234567830},
        {"id":2, "name":"biplab", "mobile":1234567835},
        {"id":3, "name":"channi", "mobile":1234567840},
        {"id":4, "name":"patnaik", "mobile":1234567845},
    ];
  }
  
}
/*contactEdit(contact:any){
    let present: Boolean = false;
    this.contactList.map((val, index)=>{
      if(val.id == contact.id) {this.contactList[index] = contact;present=true}
    });
    return present;
  }*/ 