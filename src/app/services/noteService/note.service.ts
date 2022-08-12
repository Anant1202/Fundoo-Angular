import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any
  constructor(private httpService: HttpService) { }
  CreateNote(reqData: any) {
    console.log(reqData);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`Note/Create`, reqData, true, httpOptions)
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
  UpdateNote(reqData: any) {
    console.log(reqData);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    this.httpService.putService('Note/Update',reqData, true, httpOptions)
  }
  DeleteNote(reqData: any) {
    console.log(reqData);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    this.httpService.delete('Note/Delete', true, httpOptions)
  }
}


