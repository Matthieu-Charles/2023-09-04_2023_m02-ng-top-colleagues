import { HttpClient } from '@angular/common/http';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective,
    multi: true
  }]
})
export class PseudoValidatorDirective implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    return this.http.get<string>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/' + control.value)
      .pipe(
        map((res) => {
          return Observable<ValidationErrors>;
        }),
        catchError((err) => {
          return of(null);
        })
      )
  }
}
