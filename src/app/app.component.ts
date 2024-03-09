import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './component/loader/loader.component';
import { IonApp, IonButton, IonContent, IonHeader, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IonRouterOutlet,IonApp],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-elektra';

 
}
