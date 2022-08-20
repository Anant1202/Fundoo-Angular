import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  trashlist:any
  TrashList=[]

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }
  getallnotes() {
    console.log("call  getallnotelist API here");
    this.noteService.GetAllNotes().subscribe((response: any) => {
      console.log(response)
      this.TrashList = response.data.filter((object: any) => {
        return object.trash !== true

      })
      this.trashlist = this.TrashList
      console.log(this.trashlist)
    })
  }
}
