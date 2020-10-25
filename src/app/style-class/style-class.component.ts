import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class',
  templateUrl: './style-class.component.html',
  styleUrls: ['./style-class.component.scss']
})
export class StyleClassComponent implements OnInit {
    name = '';
    isGeometry = false;
    evenStyle = {
        color: 'red',
        fontSize: '30px'
    };
    oddStyle = {
            color: 'black',
            fontSize: '30px'
        };
    currentClass = {
        circle: this.isGeometry,
        square: !this.isGeometry
    };


  constructor() { }

  ngOnInit(): void {
  }



    geometry() {
        this.isGeometry = !this.isGeometry;
    }
}
