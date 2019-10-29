import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  users$: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.users$ = this.http.get('/api/users');
  }

}
