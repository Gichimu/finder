import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../property-service.service';
import { Property } from '../property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties: Property[]
  constructor(public propertyService: PropertyServiceService, private router: Router) { }

  ngOnInit() {
    this.findProperties()
  }
  findProperties(){
    this.propertyService.getProperties().then(()=>{
      this.properties = this.propertyService.properties;
      console.log(this.properties)
    },
    (error)=>{
      console.log(error)
    }
    )
  }

  login(){
    this.router.navigate(['profile'])
  }
}
