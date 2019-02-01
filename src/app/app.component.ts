import { Component, ViewChild } from '@angular/core';
import { DictionaryService } from './_services/dictionary.service';
import { FormBuilder } from '@angular/forms';
import { BookmarkService } from './_services/bookmark.service';
import * as _ from "underscore";
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { DialogService } from './_services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(BookmarksComponent) bookmarkComponent: BookmarksComponent;

  synonyms: [string]

  searchForm = this.formBuilder.group({
    searchText: ['']
  })

  constructor(private dictionaryService: DictionaryService, 
              private formBuilder: FormBuilder,
              private bookmarkService: BookmarkService,
              private dialogService: DialogService) { }

  getSynonyms() {
    this.dictionaryService
      .getSynonyms(this.searchForm.value.searchText)
      .subscribe(synonyms => {
          this.synonyms = _.pluck(synonyms, "text")
        },
        error => {
          console.log(error)
        })
  }

  addToBookmarks () {
    const bookmarkItem: Bookmark = {
      searchText: this.searchForm.value.searchText,
      synoynms: this.synonyms
    }
    this.bookmarkService.addToBoomarks(bookmarkItem)
    this.bookmarkComponent.ngOnInit()
  }


  openDialog (event: [string]) {
    this.dialogService.showSynoynms(event)
  }


}
