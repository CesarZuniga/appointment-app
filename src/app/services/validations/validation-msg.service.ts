import { Injectable } from '@angular/core';
import { FORM_ERRORS } from 'src/app/constantes/f-errors';

@Injectable({
  providedIn: 'root'
})

export class ValidationMsgService {

  public getValidationMsg(validationId:string):string{
      return FORM_ERRORS[validationId as keyof typeof FORM_ERRORS] || '';
  }
}
