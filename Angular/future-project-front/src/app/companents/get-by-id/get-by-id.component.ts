import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { CreateUser } from '../../model/createUser';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdComponent implements OnInit{

  myid!: number;
  user: CreateUser ={
    name: '',
    email: '',
    password: '',
    login: '',
    role: ''
  }; 

  constructor(private http : CrudService){
    this.getByid();
  }

  ngOnInit(): void {
    this.getByid();
  }

  getByid(){
    this.http.getbyid(this.myid).subscribe({
      next: (data) =>{
        this.user = data;
        console.log(data);
      },
      error: (err) =>{
        console.log(err);
      }
    })

  }

}
