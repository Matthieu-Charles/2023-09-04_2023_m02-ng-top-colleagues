import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective, multi: true }
  ]
})
export class FirstLastValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.value.first == control.value.last && control.value.first && control.value.last) {
      return { firstLast: 'first name must be different from lastname' }
    }
    else return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
