import { Component, OnInit } from '@angular/core';
import { AmazonService } from '../amazon.service';
import { Iuser } from './user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users:Iuser[]=[]
  searchTerm:string =''
  constructor(private amazonservie : AmazonService) { }

  ngOnInit(): void {
    this.amazonservie.getAllData().subscribe(res=>{
      console.log(res);
      this.users=res
      
    })
  }
  
    

}
