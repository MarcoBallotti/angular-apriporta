import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) { }

  status: string = "APRI";
  title = 'angular-apriporta';
  active: boolean = true;

  ngOnInit(){

  }

  openDoor(){
    this.active = false;
    this.http.get('http://192.168.1.250/leds.cgi?led=0').subscribe(res => {
      console.log("OPEN");
      setTimeout(()=>{                           // <<<---using ()=> syntax
        this.http.get('http://192.168.1.250/leds.cgi?led=0').subscribe(res => {
        console.log("CLOSE");
        this.active = true;
        })
    }, 3000);


    })
  }
}
