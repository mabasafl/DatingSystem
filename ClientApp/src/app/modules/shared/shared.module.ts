import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],exports: [
    BsDropdownModule,
    ToastrModule
  ],
  declarations: []
})
export class SharedModule { }
