import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        alert('An unexpected error occured');
        console.log(error);
    }
    
}