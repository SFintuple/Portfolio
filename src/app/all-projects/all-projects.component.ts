import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})


export class AllProjectsComponent implements OnInit {
  constructor(private titleService: Title,private router: Router){
    this.titleService.setTitle("All Projects - Shagun Bhardwaj");
  }
  ngOnInit(): void {
  }
  goToQmenu(){
    this.router.navigate(['qmenu'])
  }
  goToCubix(){
    this.router.navigate(['carRental'])
  }
}
