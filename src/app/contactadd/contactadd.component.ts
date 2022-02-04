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
export class ContactaddComponent implements OnInit {

  msg:string ='';
  myForm!: FormGroup;
  isEdit: Boolean = false;

  constructor(
    private contactService: ContactService,
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
      mobile: new FormControl(''),
    })
      this.route.params.subscribe(param => {
        console.log(param)
        if(param ){
          let student = this.contactService.getData();
          if(student){
            this.myForm.setValue(student);
            this.isEdit = true;
            }
          else this.router.navigate(['/students'])
        }
      })
  }
  onSubmit(){
    localStorage.setItem("formdata",JSON.stringify(this.myForm.value));
  }
  resetForm(){
    this.myForm.reset();
  }
  add(){
    if(this.myForm.valid){
      this.contactService.contactList.push(this.myForm.value);
      this.resetForm();
    }
      else {
        this.msg = 'Please complete form'
      }
  }
  edit(){
    this.msg = '';
    if(this.myForm.valid){
      if(this.contactService.contactEdit(this.myForm.value)){
        this.router.navigate(['/students'])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  } 
}
