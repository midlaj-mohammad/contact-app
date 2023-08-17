import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/Models/MyContact';
import { MyGroup } from 'src/Models/MyGroups';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  contact:MyContact={}
  allGroups:MyGroup[]=[]

  constructor(private api:ApiService,private router:Router){
    this.contact.groupId = "Select A Group"
  }
  ngOnInit(): void {
    this.api.getAllGroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.allGroups = result
      

    })

}
addContact(){
  this.api.addContact(this.contact)
  .subscribe(
    (result:any)=>{
      console.log(result);
      // redirect to all contact page

      this.router.navigateByUrl('')
  })
}
}