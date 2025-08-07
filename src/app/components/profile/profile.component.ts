import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
authServ=inject(AuthService)
currentUserName:string|null=null;
ngOnInit(): void {
  this.authServ.currentUserNameSubject.subscribe({
   next:(value)=>{this.currentUserName=value}
  })
}}
