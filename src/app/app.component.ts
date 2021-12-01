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
    fetch('http://192.168.1.250/leds.cgi?led=0', {
      body: null,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'no-cors'
    }).then(res => {
      console.log("OPEN...");
      setTimeout(()=>{                           // <<<---using ()=> syntax
        fetch('http://192.168.1.250/leds.cgi?led=0', {
          body: null,
          headers: {
          'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }).then(res => {
          console.log("CLOSE...");
        });
      }, 3000);
    })
  }
}
