import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  public datas:any = [];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.datas = this.contactService.getData();
  }
  
}
