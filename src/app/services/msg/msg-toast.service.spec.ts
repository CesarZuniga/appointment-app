/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MsgToastService } from './msg-toast.service';

describe('Service: MsgToast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgToastService]
    });
  });

  it('should ...', inject([MsgToastService], (service: MsgToastService) => {
    expect(service).toBeTruthy();
  }));
});
