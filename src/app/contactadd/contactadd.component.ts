import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact-interface';

@Component({
  selector: 'contactadd',
  templateUrl: './contactadd.component.html',
  styleUrls: ['./contactadd.component.css']
})
export class ContactaddComponent {
 
  constructor(private contactService: ContactService) { }
 

}