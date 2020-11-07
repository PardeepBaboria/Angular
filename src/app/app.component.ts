import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  firms: any;
  title = 'First APP';
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.http.get("http://localhost:5002/kma/users-type").subscribe(
      response=>{
        this.firms = response["data"];
      },
      error=>{
        console.error(error);
      });
  };
  registerMode = false;


  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
