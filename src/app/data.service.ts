import { Injectable, Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
// import { homedir } from 'os';
import { from } from 'rxjs';
// import { homedir } from 'os';
@Injectable({
  providedIn: 'root'
})
// @Component({
//   selector : 'app-home',

//   // styleUrls :['./home.component.css']
// })
export class DataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://github.com')
  }
}
