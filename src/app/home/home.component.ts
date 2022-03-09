import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hireModal:boolean=false
  thankyou:boolean=false
  showhireModal(){
    this.hireModal=!this.hireModal
  }
  downloadFile(){
    let link = document.createElement("a");
    link.download = "Shagun Bhardwaj Resume";
    link.href = "assets/pdf/resume.pdf";
    link.click();
  }
  constructor(private titleService: Title,private router: Router){
  this.titleService.setTitle("Home - Shagun Bhardwaj");
  }
  AllProject(){
    this.router.navigate(['allproject'])
  }
  showThankyou(){
    this.thankyou=!this.thankyou
    this.hireModal=!this.hireModal
  }
  goToQmenu(){
    this.router.navigate(['qmenu'])
  }
  goToCubix(){
    this.router.navigate(['carRental'])
  }
  ngOnInit(): void {
  }

}
