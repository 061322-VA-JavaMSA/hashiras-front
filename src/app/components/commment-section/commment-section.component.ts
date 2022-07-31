import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-commment-section',
  templateUrl: './commment-section.component.html',
  styleUrls: ['./commment-section.component.css']
})
export class CommmentSectionComponent implements OnInit {

  comment: Comment[];
  animeId : number;
  userId: number;


  constructor(private http: HttpClient) {
  }
    
  
  
  submit(comment : string): void {
    console.log(comment)

  }

  ngOnInit(): void {
    // this.comment = new Comment(1, 1, "This is a comment");
    // this.loadComments(1);
    this.animeId = 38000;
    this.userId = 1;
    this.getComments().subscribe(
      (comments) => {
        this.comment = comments;
      })
  }

  loadComments(animeId : number): void {
    // this.getComments().subscribe(
    //   (comments) => {
    //     this.comment = comments;
    //   }
    // )
  }


  getComments() : Observable<Comment[]> {
  //   return this.http.get(`localhost:8080/comment/${this.animeId}`).subscribe( 
  //     data => {


  //     }, console.error();
      
  //     // map(
  //     //   response => response as Comment[]
  //     // )
  //   );

  return this.http.get(`http://localhost:8080/comment/${this.animeId}`).pipe(
    map(
      response => response as Comment[]
    )
  );
  }

}
