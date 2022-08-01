import { NotFoundError } from './../errors/not-fount-error';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../errors/app-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any=[];
 
  constructor(private service: PostService) { 
    
  }

  createPost(input: HTMLInputElement){
    let post:any ={title: input.value};
    input.value="";
   this.service.create(post).subscribe( (response: any) => {
     post['id']=response.id;
     this.posts.splice(0,0,post);
    });
  }

  updatePost(post: any){
    this.service.update(post).subscribe(response => {
      console.log(response);
    })
  }

  deletePost(post: any){
   this.service.delete(234555).subscribe( 
    { 
      next: (res) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      error:  (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has already been deleted');
        else
          throw error;   
     }
    })
  }
  ngOnInit(): void {
    this.service.get().subscribe( response =>{
      this.posts=response;
     })
  }

}
