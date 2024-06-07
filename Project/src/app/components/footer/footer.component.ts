import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  Date!: string;
  constructor() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    this.Date = `${day}.${month}.${year}`;
  }

  scrollToTop() {
    const scrollDuration = 300; //
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    function animateScroll() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(animateScroll);
      }
    }

    animateScroll();
  }
}
