import { NotFoundError } from './../errors/not-fount-error';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AppError } from '../errors/app-error';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  get(){
    return this.http.get(this.url).pipe(catchError(this.handlerError));
  }

  delete(id: any){
    return  this.http.delete(this.url+'/ldd/'+id).pipe(catchError(this.handlerError));
  }

  update(resource: any){
    return this.http.patch(this.url + '/'+resource.id, JSON.stringify({isRead: true})).
    pipe(catchError(this.handlerError));
  }

  create(resource: any){
    return  this.http.post(this.url, JSON.stringify(resource));
  }
  private handlerError(error: Response){
    if(error.status==404)
    return throwError(() => new NotFoundError(error));
  return throwError(() => new AppError(error))
  }
}
