import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {}

  constructor(private accountservice: AccountService) { }

  ngOnInit() {
  }

  register(){
   this.accountservice.register(this.model).subscribe(
    {next: () => {
      this.cancel();
    },
    error: error => console.log(error) 
  }
   )
  }

  cancel(){
    this.cancelRegister.emit(false)
  }
}