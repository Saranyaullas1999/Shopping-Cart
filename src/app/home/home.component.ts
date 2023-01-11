import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

   fetchData=()=>{
    this.myapi.viewProduct().subscribe(
      (data)=>{
        this.productData=data
      }
    )
   }

  productData:any=[]

  ngOnInit(): void {
  }

}
