import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookmarkService } from '../_services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarksChild: [Bookmark]

  @Output() showSynoynmsEvent = new EventEmitter<[string]>(); 

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarksChild = this.bookmarkService.getBookmarks()
  }

  showSynoynms(synoynms: [string]) {
    this.showSynoynmsEvent.emit(synoynms)
  }

}
