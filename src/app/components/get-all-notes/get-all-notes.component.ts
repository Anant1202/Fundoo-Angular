import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  NoteArray=[]
  constructor(private noteService: NoteService ) { }

  ngOnInit():void {
    this.getallnotes()
  }

  getallnotes(){
    console.log("call  getallnotelist API here");
    this.noteService.GetAllNotes().subscribe((response:any)=>
    {
      this.NoteArray=response.data;
    })
  }

}
