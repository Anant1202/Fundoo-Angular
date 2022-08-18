import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Input() MyNotes: any;
  ngOnInit(): void {
  }

  openUpdateNoteDialog(noteObject:any) {
    console.log(noteObject);
    
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '350px',height:'200px',
      data: noteObject
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      
    });

  }

}
