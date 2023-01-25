import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../models/post';

@Component({
  selector: 'app-bulletin-dialog',
  templateUrl: './bulletin-dialog.component.html',
  styleUrls: ['./bulletin-dialog.component.scss']
})
export class BulletinDialogComponent implements OnInit {
    post = new Post();
    nameControl = new FormControl();
    relationControl = new FormControl();
    positionControl = new FormControl();
    descriptionControl = new FormControl();
    reviewForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BulletinDialogComponent>,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  submit(){
    console.log(this.relationControl.value, this.nameControl.value, this.positionControl.value, this.descriptionControl.value)
    var post = new Post(this.nameControl.value ?? "",
                        this.relationControl.value ?? "",
                        this.positionControl.value ?? "",
                        this.descriptionControl.value ?? "");
    this.dialogRef.close(post);
  }

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      name:[this.nameControl],
      relation:[this.relationControl],
      position:[this.positionControl],
      description:[this.descriptionControl]
    });
  }

}
