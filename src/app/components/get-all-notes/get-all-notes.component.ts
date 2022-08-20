import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notelist: any
  NoteArray = []
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getallnotes()

  }

  getallnotes() {
    console.log("call  getallnotelist API here");
    this.noteService.GetAllNotes().subscribe((response: any) => {
      console.log(response)
      this.NoteArray = response.data.filter((object: any) => {
        return object.trash !== false
      })
      this.notelist = this.NoteArray
      console.log(this.notelist)
    })
  }
  getallnotesfromarchive() {
    console.log("call  getallnotelist API here");
    this.noteService.GetAllNotes().subscribe((response: any) => {
      console.log(response)
      this.NoteArray = response.data.filter((object: any) => {
        return object.archieve !== false
      })
      this.notelist = this.NoteArray
      console.log(this.notelist)
    })
  }
  getallnotes2() {
    console.log("Got message from display to refresh getalnotes api ");
    this.getallnotes()

  }
}
