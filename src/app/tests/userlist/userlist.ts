import {Component, OnInit} from '@angular/core';
import {User, user} from '../servicetest/user';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-userlist',
  imports: [CommonModule],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist implements OnInit {

  users: user[]=[];
  loading = true;
  error = '';

  constructor(private userService: User) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: data => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = "Error getting users";
        this.loading = false;
      }
      }

    )
  }

}
