import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { imageUrl: 'assets/biking.jpeg', title: 'Dağ Bisikleti', username: '@cbdag', content: 'Çok hızlı sürdüm.' },
    { imageUrl: 'assets/mountain.jpeg', title: 'Tırmanış', username: '@cbuludag', content: 'Bugün de iyi turmandım.' },
    { imageUrl: 'assets/tree.jpeg', title: 'Doğa Yürüyüşü', username: '@cbdoga', content: 'Hadi biraz Maçka Parkında turlayalım.' },
  ];

  title = 'card-app';
}
