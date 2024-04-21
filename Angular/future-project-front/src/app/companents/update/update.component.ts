import { Component } from '@angular/core';
import { CreateUser } from '../../model/createUser';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
  export class UpdateComponent {
     
    myid!: number;
    user: CreateUser ={
      name: '',
      email: '',
      password: '',
      login: '',
      role: ''
    }; 

    setValue: CreateUser ={
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

    setUser(){
      this.http.update(this.myid, this.setValue).subscribe({
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
