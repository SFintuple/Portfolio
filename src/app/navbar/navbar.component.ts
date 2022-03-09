import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarCollapsed: boolean = true;
  downloadFile(){
    let link = document.createElement("a");
    link.download = "Shagun Bhardwaj Resume";
    link.href = "assets/pdf/resume.pdf";
    link.click();
  }

  ngOnInit(): void {
  }

}
