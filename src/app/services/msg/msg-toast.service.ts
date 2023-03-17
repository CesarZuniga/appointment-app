import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MsgToastService {

  constructor(private toast: ToastrService) { }

  succes(msg: string, title: string = 'Correcto') {
    return this.toast.success(msg, title);
  }
  error(msg: string, title: string = 'Error') {
    return this.toast.error(msg, title);
  }
  warning(msg: string, title: string = 'Precaución') {
    return this.toast.warning(msg, title);
  }
  info(msg: string, title: string = '') {
    return this.toast.info(msg, title);
  }
}
