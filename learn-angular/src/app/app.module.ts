import { AuthGuard } from '../app/service/security/auth-guard.service';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendFactoryProvider } from './fake-backend/fake-backEnd';
import { AuthService } from '../app/service/security/auth.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostService } from './service/post.service';
import { SummaryPipe } from './courses/summary.pipe';
import { CourseService } from './courses/course.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { RatingComponent } from './rating/rating.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormateDirective } from './input-formate.directive';
import { ContactFormComponent } from './template-driven-contact-form/contact-form.component';
import { SingupFormComponent } from './reactive-singup-form/singup-form.component';
import { NewCourseFromComponent } from './new-course-from/new-course-from.component';
import { PostsComponent } from './posts/posts.component';
import { GlobalErrorHandler } from './errors/global-error';
import { DataService } from './service/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AdminAuthGuardService } from '../app/service/security/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RatingComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFormateDirective,
    ContactFormComponent,
    SingupFormComponent,
    NewCourseFromComponent,
    PostsComponent,
    NavbarComponent,
    UserComponent,
    HomeComponent,
    UserProfileComponent,
    NotFoundComponent,
    LogInComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent,  canActivate: [AuthGuard]},
      {path: 'users/:name/:id', component: UserProfileComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'login', component: LogInComponent},
      {path: 'users', component: UserComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [ 
    AuthService,
    fakeBackendFactoryProvider,
    MockBackend,
    BaseRequestOptions,
    CourseService,
    PostService,
    DataService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
