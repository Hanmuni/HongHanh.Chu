import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['Frameworks.png', 'Angular.png', 'work-station.jpeg'];
  headlines = ['There are many Frameworks', 'I`m learning Angular', 'Daily On My Workstation'];
  currentSlide = 0;
  showSlide = true;

  ngOnInit() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    setInterval(() => {
      this.currentSlide++;
      this.currentSlide = this.currentSlide % this.images.length;
      this.showSlide = false;

      setTimeout(() => {
        this.showSlide = true;
      }, 100);

    }, 5000);
  }

}
