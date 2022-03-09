import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qmenu-concept',
  templateUrl: './qmenu-concept.component.html',
  styleUrls: ['./qmenu-concept.component.css']
})
export class QmenuConceptComponent implements OnInit {

  constructor(private router: Router){ }

  ngOnInit(): void {
  }
  goToQmenu(){
    window.location.href='https://www.figma.com/proto/2rxninfxuL6u7WkCVILC4v/Q-Menu-Without-Cards?page-id=0%3A1&node-id=0%3A24&viewport=241%2C48%2C0.05&scaling=scale-down&starting-point-node-id=0%3A3&show-proto-sidebar=1';
  }
}
