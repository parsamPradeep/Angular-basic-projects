import { AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";

export class UserNameValidator {

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(control.value);
                if(control.value  == 'pradeep')
                    resolve({ "unique": true});
                else 
                    resolve(null);   
            }, 2000);
        });
    }
}