import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors|null{
        if ((control.value as string).indexOf(' ')>=0){
            return {cannotContainSpace:true}
        }
        return null
    }
    static abCannotAppearTogether(control:AbstractControl):ValidationErrors|null{
        if ((control.value as string).indexOf('ab') >= 0){
            return {abCannotAppear:true}
        }
        return null
    }
    static numberValidate(control:AbstractControl) : ValidationErrors|null{
        if((control.value as number)>15){
            return {numberValidator:true}
        }else{
            return null
        }
    }
    static noNumber(control:AbstractControl) : ValidationErrors|null{
        let numbers = [1,2,3,4,5,6,7,8,9]
        let str = control.value as string
        let numberPresent = false
        numbers.forEach((item)=>{
            if (str.indexOf(String(item))>=0 ){
                numberPresent = true
            }
        })
        if (numberPresent){
            return {noNumber:true}
        }
        return null
    }
    static asyncCheck(control:AbstractControl) : Promise<ValidationErrors|null> {
        return new Promise((res,rej)=>{
            setTimeout(() => {
                if (control.value as string == 'mosh'){res({asyncCheck:true})}            
                else {res(null)}
            }, 2000);
        })
    }
}