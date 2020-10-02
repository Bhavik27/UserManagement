import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Shared/Models/UserModel';
import { ApiService } from '../Shared/Services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  _User: UserModel[];
  displayColumns: string[] = ['UserName', 'UserFullName', 'DateOfBirth', 'Gender','actions']
  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this._User = [];
    this.GetUsers();
  }


  GetUsers() {
    this.apiServices.get('User/getusers').subscribe(
      data => {
        console.log(data)
        this._User = this.converter(data[0])
      }
    )
  }

  converter(value: any): UserModel[] {
    const data = []
    console.log(value)
    if (value != null && value.length != 0) {
      for (var v of value) {
        data.push({
          Id: v.Id,
          UserName: v.UserName,
          UserFullName: v.UserFullName,
          DateOfBirth: v.DateOfBirth,
          Gender: v.Gender,
        });
      }
    }
    return data;
  }
}
