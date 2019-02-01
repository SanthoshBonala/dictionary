import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SynoynmsDialogComponent } from '../synoynms-dialog/synoynms-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  showSynoynms(synoynms: [string]) {
    this.matDialog.open(SynoynmsDialogComponent, {
      width: '40%',
      height: '40%',
      position: { top: "10%" },
      data: synoynms
    })
  }


}
