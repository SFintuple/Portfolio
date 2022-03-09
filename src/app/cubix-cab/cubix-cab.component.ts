import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubix-cab',
  templateUrl: './cubix-cab.component.html',
  styleUrls: ['./cubix-cab.component.css']
})
export class CubixCabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLight(){
    window.location.href='https://www.figma.com/proto/5MywROM0t5g6yVUnzDJDZp/Car-Rental-Light?page-id=0%3A1&node-id=1%3A261&viewport=241%2C48%2C0.5&scaling=scale-down&starting-point-node-id=1%3A256&show-proto-sidebar=1';
  }
  goToDark(){
    window.location.href='https://www.figma.com/proto/Zpm3BQYdn8kIM4qFxzkEfr/Car-Rental?page-id=0%3A1&node-id=66%3A4&viewport=241%2C48%2C0.18&scaling=scale-down&starting-point-node-id=56%3A3';
  }
}
