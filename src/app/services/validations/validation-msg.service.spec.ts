/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidationMsgService } from './validation-msg.service';

describe('Service: ValidationMsg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationMsgService]
    });
  });

  it('should ...', inject([ValidationMsgService], (service: ValidationMsgService) => {
    expect(service).toBeTruthy();
  }));
});
