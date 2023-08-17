import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

// get-all contact function
getAllContact(){
  // api call assyncrounus
return this.http.get('http://localhost:3000/contacts')
}
// view contact fetch data from perticular contact id
// 
viewContact(contactId:any){
  // api assynchrounous
  return this.http.get('http://localhost:3000/contacts/'+contactId)



}
getGroup(groupId:string){
  return this.http.get('http://localhost:3000/groups/'+groupId)
                                                                                                    
}
// api call to fetch all group data
getAllGroups(){
  return this.http.get('http://localhost:3000/groups')
}
// 5. Api call to add / store contact detials
addContact(contact:any){
  return this.http.post('http://localhost:3000/contacts',contact)
}
// api to delete a pertivular contact form
removeContact(id:any){
  return this.http.delete('http://localhost:3000/contacts/'+id)

}
// 7.api call to updating existing contact from srrve
updateContact(id:any,contact:any){
  return this.http.put('http://localhost:3000/contacts/'+id,contact)
}
}

