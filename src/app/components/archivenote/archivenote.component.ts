import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  archivelist:any
  ArchiveList=[]

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }
  getallnotes() {
    console.log("call  getallnotelist API here");
    this.noteService.GetAllNotes().subscribe((response: any) => {
      console.log(response)
      this.ArchiveList = response.data.filter((object: any) => {
        return object.archieve !== true

      })
      this.archivelist = this.ArchiveList
      console.log(this.archivelist)
    })
  }
}
