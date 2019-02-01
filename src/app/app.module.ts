import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SynoynmsComponent } from './synoynms/synoynms.component';
import { SynoynmsDialogComponent } from './synoynms-dialog/synoynms-dialog.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { InterceptorService } from './_services/interceptor.service';
import { DictionaryService } from './_services/dictionary.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BookmarkService } from './_services/bookmark.service';
import { DialogService } from './_services/dialog.service';


const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
]

@NgModule({
  declarations: [
    AppComponent,
    SynoynmsComponent,
    SynoynmsDialogComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [...interceptors, DictionaryService, BookmarkService, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [SynoynmsDialogComponent]
})
export class AppModule { }
