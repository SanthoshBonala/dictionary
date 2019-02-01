import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor() { }

  addToBoomarks(bookmarkItem: Bookmark){
    let bookmarks:[Bookmark] = [bookmarkItem]
    if(localStorage.getItem("bookmarks")){
       bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
      bookmarks.push(bookmarkItem)
    }
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks))  
  }

  getBookmarks (): [Bookmark] {
    return JSON.parse(localStorage.getItem("bookmarks"))
  }

}
