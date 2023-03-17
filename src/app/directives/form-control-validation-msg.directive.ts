import { Directive, Input, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationMsgService } from '../services/validations/validation-msg.service';

@Directive({
  selector: '[appFormControlValidationMsg]'
})
export class FormControlValidationMsgDirective implements OnInit, OnDestroy {

  constructor(private elRef: ElementRef,
    private control: NgControl,
    private validationMsgService: ValidationMsgService
  ) { }

  @Input('validationMsgId') validationMsgId!: string;
  errorSpanId: string = '';

  statusChangeSubscription!: Subscription;

  ngOnInit(): void {
    this.errorSpanId = this.validationMsgId + new Date() + '-error-msg';
    this.statusChangeSubscription = this.control.statusChanges!.subscribe(
      (status) => {
        if (status == 'INVALID') {
          this.showError();
        } else {
          this.removeError();
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.statusChangeSubscription.unsubscribe();
  }

  @HostListener('blur', ["$event"])
  handleBlurEvent(event: any) {
    //This is needed to handle the case of clicking a required field and moving out.
    //Rest all are handled by status change subscription
    if (this.control.value == null || this.control.value == '') {
      if (this.control.errors) this.showError();
      else this.removeError();
    }
  }

  private showError() {
    this.removeError();
    const valErrors: ValidationErrors = this.control.errors!;
    const firstKey = Object.keys(valErrors)[0];
    const errorMsgKey = firstKey + '_msg';
    let errorMsg = this.validationMsgService.getValidationMsg(errorMsgKey);
    if(errorMsg.includes('minlength')){
      errorMsg = errorMsg.replace('{{minlength}}', valErrors['minlength']['requiredLength']);
    }
    const errSpan = '<div class="error"><span id="' + this.errorSpanId + '">' + errorMsg + '</span> </div>';
    this.elRef.nativeElement.style.border = 'solid 1px red';
    this.elRef.nativeElement.insertAdjacentHTML('afterEnd', errSpan);
  }

  private removeError(): void {
    this.elRef.nativeElement.style.border = '';
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) errorElement.remove();
  }

}
