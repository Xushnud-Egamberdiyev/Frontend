import { Component } from '@angular/core';
import { CreateUser } from '../../model/createUser';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  isDeleted: boolean = false;

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
  deleteUserByid(){
    this.http.delete(this.myid).subscribe({
      next: (data) =>{
        console.log(data);
        this.isDeleted = true;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

}
