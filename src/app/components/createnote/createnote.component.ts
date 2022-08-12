import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  Display=false;
  createnoteForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private noteService: NoteService,private snackbar:MatSnackBar) { }
  
  toggleDisplay(){
    this.Display=true;
  }
  ngOnInit() {
    this.createnoteForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]

    });
  }

  createnote() {
    this.Display=false;
    if (this.createnoteForm.valid) {
     this.noteService.CreateNote(this.createnoteForm.value).subscribe((response: any) => {
      console.log(response);
        this.snackbar.open('note created successful','',{
          duration:2000,
        });
       
      }, (error: any) => {
        console.log(error);
        this.snackbar.open('Invalid data','',{
          duration:2000,
        });
      })
    } else {
      this.snackbar.open('Please enter data','',{
        duration:2000,
      });
    }
  }
}
