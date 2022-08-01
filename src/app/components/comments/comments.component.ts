import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../models/comment';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  newComment: Comment;
  animeId: number;
  userId: number;



  constructor(private http: HttpClient, private cs: CommentService, private fav: FavoritesComponent) { }
  
    
  
  
  submit(comment : string): void {
    this.newComment = new Comment(this.animeId, this.userId, comment);
    this.cs.addComment(this.newComment)
    this.ngOnInit();
    this.ngOnInit();
  }

  ngOnInit(): void {
      this.animeId = this.fav.animeInfo.mal_id;
      this.userId = this.fav.loggedInUser.id;
      this.displayComments(this.animeId);
  }

  displayComments(animeId: number): void {
    this.cs.getCommentsByAnimeId(animeId).subscribe(data => {
      this.getComments(data);
    }
    );
  }
  getComments(data: any) {
    this.comments = data;
    console.log(this.comments);
    // this.comment.forEach(element => {
    //   console.log(element);
    //   this.username = element['author']['username'];
    //   this.commentText = element['comment'];
    // });
  }


}
