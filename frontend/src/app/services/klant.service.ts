import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KlantService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  add(data:any){
    return this.httpClient.post(this.url+"/klant/add",data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  update(data:any){
    return this.httpClient.patch(this.url+"/klant/update",data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  getKlant(){
    return this.httpClient.get(this.url+"/klant/get");
  }

  updateStatus(data:any){
    return this.httpClient.patch(this.url+"/klant/updateStatus",data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  delete(id:any){
    return this.httpClient.delete(this.url+"/klant/delete/"+id,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

}
