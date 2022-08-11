import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any
  constructor(private httpService: HttpService) { }
  CreateNote(user: any) {
    console.log(user);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    this.httpService.postService('Note/Create', user, true, httpOptions)
  }

  GetAllNotes() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    this.httpService.getService('Note/Retrieve', true, httpOptions)
  }
  UpdateNote(user: any) {
    console.log(user);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    this.httpService.putService('Note/Update', user, true, httpOptions)
  }
  DeleteNote(user: any) {
    console.log(user);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    this.httpService.delete('Note/Delete', true, httpOptions)
  }
}


