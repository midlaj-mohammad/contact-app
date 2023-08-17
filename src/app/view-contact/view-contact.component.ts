import { Component, OnInit } from '@angular/core';
import { FormGroupName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyContact } from 'src/Models/MyContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})                                    
                                          // 2 
export class ViewContactComponent implements OnInit{
  contactId:any
  contact:MyContact={}
  groupId:string=""
  groupName:string=""
  // dependancy injuction
  // 1.
  constructor(private api:ApiService, private activatedRoute:ActivatedRoute){

  }
  // 3.
  ngOnInit(): void {
    // /to get path parameter from url
                        // 4.
    this.activatedRoute.params
      //  5.its and observable
    .subscribe((data:any)=>{
      console.log(data['id']);
      this.contactId = data['id']
      
    })
    // we have to call api to get perticular
    this.api.viewContact(this.contactId)
    .subscribe((result:any)=>{
      console.log(result);
      this.contact = result
      this.groupId = result.groupId
      console.log(this.groupId);
      // 3.api call to get 
      this.api.getGroup(this.groupId)
      .subscribe((result:any)=>{
        console.log(result);
        this.groupName = result.name
        
      
      
    })
   
      
    })
  }

}
