import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostService } from 'src/services/post.service';
import { Post } from '../models/post';
import { BulletinDialogComponent } from '../bulletin-dialog/bulletin-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {
  posts$: Observable<Post[]> = new Observable();
  rowHeight: BehaviorSubject<string> = new BehaviorSubject('4:1');

  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchPosts();
    this.postService.getPosts().subscribe({
      next: (posts) => {
        this.rowHeight.next(`${posts.length/1.5}:1`);
      }
    });
  }

  // deletePost(id: string): void {
  //   this.postService.deletePost(id).subscribe({
  //     next: () => this.fetchEmployees()
  //   });
  // }

  private fetchPosts(): void {
    this.posts$ = this.postService.getPosts();
  }

  flip(id: any) {
    document.getElementById(id)?.classList.toggle('flipped');
  }

  openDialog(){
    var postDialog = this.dialog.open(BulletinDialogComponent, { height: '700px', width: '500px'
    });

    postDialog.afterClosed().subscribe(result => {
      if(result){
      this.postService.createPost(result as Post).subscribe({
        next: () => this.fetchPosts()
      });
    }
    });
  }
 }
