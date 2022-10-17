import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['Frameworks.png', 'Angular.png', 'work-station.jpeg'];
  headlines = ['There are many Frameworks', 'I`m learning Angular', 'Daily On My Workstation'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.showCurrentImage();
  }

  showCurrentImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 100);

    }, 5000);
  }
}
