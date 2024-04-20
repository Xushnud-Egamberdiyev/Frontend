import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrl: './getall.component.scss'
})
export class GetallComponent implements OnInit {
  constructor(private crudService : CrudService){ }

  ngOnInit(): void {
    this.getAllUser();
  }

  users! : User[];

  getAllUser(){
    this.crudService.getAll().subscribe({
      next: (data) =>{
        this.users = data;
        console.log(data);
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}
