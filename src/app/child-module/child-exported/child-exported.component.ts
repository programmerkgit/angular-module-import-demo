import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-exported',
  templateUrl: './child-exported.component.html',
  styleUrls: ['./child-exported.component.scss']
})
export class ChildExportedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
