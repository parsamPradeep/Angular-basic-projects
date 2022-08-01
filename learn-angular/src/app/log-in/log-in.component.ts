import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/security/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  inValidLogIn: boolean = false;

  constructor(private route: Router, 
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  signIn(cred: any){
    this.authService.logIn(cred).subscribe(res => {
      if(res){
        let returnUrl =  this.activatedRoute.snapshot.queryParamMap.get('returnUrl')
      this.route.navigate([returnUrl || '/']);
      
    }else{
      this.inValidLogIn=true;
    }
  }
  );
  }

  ngOnInit(): void {
  }

}
