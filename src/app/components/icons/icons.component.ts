import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() NoteID:any;
  @Output() autoRefreshmessageEvent = new EventEmitter<any>();
  constructor(private noteService:NoteService) { }
 
  ngOnInit(): void {
  }

  Delete() {
    {
      let reqData={
        noteID:this.NoteID,
        trash:false
      }
      console.log(reqData)
      this.noteService.TrashNote(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
      this.autoRefreshmessageEvent.emit()
      },
      error => {
        console.log(error);
     })
    }
  }

  Archive(){
    {
      let reqData={
        noteID:this.NoteID,
        archieve:false
      }
      console.log(reqData)
      this.noteService.ArchiveNote(reqData).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      this.autoRefreshmessageEvent.emit()
      },
      error => {
        console.log(error);
     })
    }
  }
}
