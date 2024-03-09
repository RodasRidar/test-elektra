import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardHeader, IonCardTitle, IonLoading, LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports: [IonLoading, IonCard, IonCardHeader, IonCardTitle],
  standalone: true
})
export class LoaderComponent implements OnInit {

  @Input() images: { url: string; text: string }[] = [];
  @Input() interval: number = 2000;

  currentImageIndex: number = 0;
  currentImage: string = '';
  currentTextIndex: number = 0;
  currentText: string = '';

  private intervalId: any;

  constructor(private router: Router, private loadingController: LoadingController) { }
  
  ngOnInit() {

    this.startLoader();

    this.showNextImage();

    this.intervalId = setInterval(() => {
      this.showNextImage();
    }, this.interval);

  }

  showNextImage() {

    if (this.currentImageIndex < this.images.length) {
      this.currentImage = this.images[this.currentImageIndex].url;
      this.currentText = this.images[this.currentTextIndex].text;
      this.currentImageIndex++;
      this.currentTextIndex++;
    } else {
      this.currentImageIndex = 0;
      this.currentTextIndex = 0;
    }

  }

  async startLoader() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      cssClass: 'custom-loading',
    });
    await loading.present();

    setTimeout(() => {
      this.router.navigate(['/welcome']);
      loading.dismiss();
      clearInterval(this.intervalId);
    }, 5000);
  }
}
