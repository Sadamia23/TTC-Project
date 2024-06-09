import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { INews } from '../../interfaces/news.model';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrl: './all-news.component.css',
})
export class AllNewsComponent {
  allNews: INews[] = [];
  currentPageNews: INews[] = [];
  pageIndex = 1;
  itemsPerPage = 9;
  isLoading: boolean = false;

  constructor(newsService: NewsService) {
    this.showSpinner();

    // timout-ს ვიყენებ რომ გამოჩნდეს spinner
    setTimeout(() => {
      newsService.getNews().subscribe(
        (data) => {
          this.allNews = data.articles;
          this.updateCurrentPageNews();
          this.hideSpinner();
        },
        (error) => {
          console.log(error);
          this.hideSpinner();
        }
      );
    }, 2000);
  }

  updateCurrentPageNews() {
    const startIndex = (this.pageIndex - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentPageNews = this.allNews.slice(startIndex, endIndex);
  }

  onPageChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.updateCurrentPageNews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  showSpinner() {
    this.isLoading = true;
  }

  hideSpinner() {
    this.isLoading = false;
  }
}
