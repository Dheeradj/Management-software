import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeverancierService {
  url = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(data:any){
    return this.httpClient.post(this.url+"/leverancier/add/",data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  update(data:any){
    return this.httpClient.patch(this.url+"/leverancier/update/",data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  getLeverancier(){
    return this.httpClient.get(this.url+"/leverancier/get/");
  }

  updateStatus(data:any){
    return this.httpClient.patch(this.url+"/leverancier/updateStatus/",data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  delete(id:any){
    return this.httpClient.delete(this.url+"/leverancier/delete/"+id,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

}
