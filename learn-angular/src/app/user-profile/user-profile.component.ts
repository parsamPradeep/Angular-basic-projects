import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatestWith } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile:any;
  constructor(private http: HttpClient,private route: ActivatedRoute, private navigate: Router) { }

  submit(){
    this.navigate.navigate(['/users'], {queryParams: {page: 1, order: 'newest'}});
  }

  ngOnInit(): void {

   this.route.paramMap.pipe(
      combineLatestWith(this.route.queryParamMap),
      ).subscribe( combined => {
        let params = combined[0];
        let queryParam = combined[1];

        let id = Number(params.get('id'));
        this.http.get('https://jsonplaceholder.typicode.com/users/'+id).subscribe( res =>{
        this.userProfile=res;
        });

        console.log(params);
        console.log(queryParam);
      });

  }

}
