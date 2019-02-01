import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-synoynms',
  templateUrl: './synoynms.component.html',
  styleUrls: ['./synoynms.component.css']
})
export class SynoynmsComponent implements OnInit {

  @Input() synoymnsChild: [string]

  constructor() { }

  ngOnInit() {
    console.log(this.synoymnsChild)
  }

}
