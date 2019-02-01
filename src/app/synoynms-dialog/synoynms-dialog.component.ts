import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synoynms-dialog',
  templateUrl: './synoynms-dialog.component.html',
  styleUrls: ['./synoynms-dialog.component.css']
})
export class SynoynmsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public synoynms) {  }

  ngOnInit() { }

}
