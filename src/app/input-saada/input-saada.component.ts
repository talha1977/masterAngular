import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'app-input-saada',
  templateUrl: './input-saada.component.html',
  styleUrls: ['./input-saada.component.css']
})
export class InputSaadaComponent{
  selectOpt=[
    {
      id:1,
      name:"pakistan"
    },
    {
      id:2,
      name:"india"
    },
    {
      id:3,
      name:"sri lanka"
    }
  ]
  form1:FormGroup = new FormGroup({
    firstname: new FormControl('gsdfgjhasg',[Validators.required,Validators.minLength(5),UsernameValidators.abCannotAppearTogether]),
    lastname: new FormControl('asbdasvbdgjklj',[Validators.required,Validators.minLength(4),UsernameValidators.cannotContainSpace]),
    age: new FormControl('5',[Validators.required,UsernameValidators.numberValidate]),
    select: new FormControl('2',[Validators.required]),
    password:new FormControl('hajksdhkahd',[Validators.required,Validators.minLength(10)]),
    retypePassword:new FormControl('basdgasgd',[UsernameValidators.noNumber],[UsernameValidators.asyncCheck]),
    
  })
  log(){
    let formGrp =  Object.values(this.form1.controls)
    let err = false;
    formGrp.forEach(element => {
      if (element.errors != null){
        err =true
      }
    });
    if (err){
      this.form1.setErrors({
        err:"error in form",
      })
    }
    console.log('form errors = ')
    console.log(this.form1.errors)
  }

  
}
