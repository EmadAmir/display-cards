import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent,  NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'display-cards';
  posts = [
    {
      title:'Naruto Uzumaki',
      imageUrl:'naruto.png',
      username: 'naruto',
      content:'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.'
    },
    {
      title:'Sasuke Uchiha',
      imageUrl:'sasuke.png',
      username: 'sasuke',
      content:'Sasuke Uchiha is one of the last surviving members of Konohagakure\'s Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi.'
    },
    {
      title:'Sakura Haruno',
      imageUrl:'sakura.png',
      username: 'sakura',
      content:'Sakura Haruno is a kunoichi of Konohagakure. When assigned to Team 7, Sakura quickly finds herself ill-prepared for the duties of a shinobi. However, after training under the Sannin Tsunade, she overcomes this, and becomes recognised as one of the greatest medical-nin in the world. '
    },
    {
      title:'Kakashi Hatake',
      imageUrl:'kakashi.png',
      username: 'copy-ninja',
      content:'Kakashi Hatake is a shinobi of Konohagakure\'s Hatake clan. Famed as Kakashi of the Sharingan and the Copy Ninja, he is one of Konoha\'s most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility.'
    }
  ]
}
