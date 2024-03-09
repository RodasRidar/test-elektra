import { Component } from '@angular/core';
import { LoaderComponent } from '../../component/loader/loader.component';
import { IonButton, IonContent, IonHeader, IonLoading, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [LoaderComponent,IonButton,IonContent,IonHeader,IonToolbar,IonTitle,IonLoading],
  standalone: true
})
export class HomeComponent {
  interval=1000;
  constructor() {

  }
  images = [
    { url: 'assets/image1.png', text: 'Cargando ...' },
    { url: 'assets/image2.png', text: 'Espere un momento...' },
    { url: 'assets/image3.png', text: 'Un momento mas...' },
    { url: 'assets/image4.png', text: 'Ya casi...' },
  ];
  
  isLoading = false;
  showLoader(){
    this.isLoading = true;
  }
}
