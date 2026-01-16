import { Component } from '@angular/core';
import {Userlist} from '../userlist/userlist';
import {Form} from '../form/form';


@Component({
  selector: 'app-test',
  imports: [Userlist, Form],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {

}
