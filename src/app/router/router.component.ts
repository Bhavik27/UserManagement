import { Component, OnInit } from '@angular/core';
import { RoleModel } from '../Shared/Models/RoleModel';
import { ApiService } from '../Shared/Services/api.service';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  _Role: RoleModel[];
  displayColumns: string[] = ['Role','actions']
  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this._Role = [];
    this.GetRoles();
  }


  GetRoles() {
    this.apiServices.get('Role/getRoles').subscribe(
      data => {
        console.log(data)
        this._Role = this.converter(data[0])
      }
    )
  }

  converter(value: any): RoleModel[] {
    const data = []
    console.log(value)
    if (value != null && value.length != 0) {
      for (var v of value) {
        data.push({
          Id: v.Id,
          Role: v.Role,
        });
      }
    }
    return data;
  }

}
