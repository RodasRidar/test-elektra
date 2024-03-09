import { Component, OnInit } from '@angular/core';
import { IonCardHeader ,IonCard, IonCardTitle, IonContent, IonHeader, IonToolbar, IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [IonCard,IonCardHeader,IonCardTitle,IonContent,IonHeader,IonToolbar,IonTitle],

  standalone: true
})
export class WelcomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
