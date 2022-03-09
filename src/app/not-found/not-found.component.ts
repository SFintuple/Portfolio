import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
 

  constructor(private titleService: Title,private router: Router){
    this.titleService.setTitle("Page Not Found - Shagun Bhardwaj");
    }

  ngOnInit(): void {
  }
  goToHome(){
    this.router.navigate([''])
  }
}
