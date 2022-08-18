import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
title:any
description:any
noteID:any

  constructor(
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private noteService:NoteService) {
     console.log("dialog data in dialog box",data);
     this.title=data.title,
     this.description=data.description
     this.noteID=this.data.noteID
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateNote(){
     let reqBody={
      title:this.title,
      description:this.description
    
     }
     this.noteService.UpdateNote(reqBody,this.noteID).subscribe((response: any) => {
      console.log(response);
      this.dialogRef.close("Note updated successfully");
     
     })

  }

  ngOnInit(): void {
  }

}
