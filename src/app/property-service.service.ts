import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  properties: Property[] = []
  constructor(private http: HttpClient) { }

  getProperties(){
    let endPoint = 'https://pro-finder.herokuapp.com/api/properties';
    let promise = new Promise((resolve, reject)=>{
      this.http.get(endPoint).toPromise().then(
        (results)=>{
          for(let i=0; i < Object.keys(results).length; i++){
            let name = results[i]['name']
            let description = results[i]['description']
            let price = results[i]['price']
            let length = results[i]['size_length']
            let width = results[i]['size_width']
            let total = results[i]['size_total']
            let pro = new Property(name, description, price, length, width, total)
            this.properties.push(pro)
            // console.log(results['data'])
          }
          console.log(this.properties)
          resolve()
        },
        (error)=>{
          console.log(error)
          reject()
        }
      )
    })
    return promise;
  }
}
