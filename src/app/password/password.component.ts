import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  showPassword: boolean = false;
  passwordLogs = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetails() {
    // toggle
    this.showPassword = !this.showPassword;
    // this.passwordLogs.push(this.passwordLogs.length + 1);
    this.passwordLogs.push(new Date());
  }

}
