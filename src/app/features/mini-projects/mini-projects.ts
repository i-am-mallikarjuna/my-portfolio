import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mini-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './mini-projects.html',
  styleUrl: './mini-projects.scss',
})
export class MiniProjects {
  projects = [
    { title: 'Digital Wish Tree', path: '/mini-projects/DigitalWishTree.html', description: 'An interactive digital tree for sharing wishes.' },
    { title: 'Boo', path: '/mini-projects/Boo.html', description: 'A playful interactive experience.' },
    { title: 'Funny Black Holes', path: '/mini-projects/FunnyBlackHoles.html', description: 'A cosmic journey into gravitational anomalies.' },
    { title: 'Happy Birthday Tuffy', path: '/mini-projects/HappyBirthdayTuffy.html', description: 'A celebratory personalized birthday page.' },
    { title: 'Happy Birthday Yaari', path: '/mini-projects/HappyBirthdayYaari.html', description: 'A friendly and colorful birthday celebration.' },
    { title: 'HBD Dosthi', path: '/mini-projects/HBD(Dosthi).html', description: 'A heartfelt birthday tribute to a friend.' },
    { title: 'Happy Diwali', path: '/mini-projects/HappyDiwali.html', description: 'A festive celebration of the festival of lights.' },
    { title: 'Happy New Year', path: '/mini-projects/HappyNewYear.html', description: 'A sparkling celebration of the new year.' },
    { title: 'OpenCam', path: '/mini-projects/Open-cam.html', description: 'Experimental camera access and manipulation.' },
    { title: 'Particles Touching', path: '/mini-projects/ParticlesTouching.html', description: 'An interactive particle physics simulation.' },
    { title: 'PeekaBoo', path: '/mini-projects/PeekaBoo.html', description: 'A whimsical hide-and-seek interactive experience.' },
    { title: 'Plants Panda', path: '/mini-projects/Plants-Panda.html', description: 'A cute interactive panda and plant simulation.' },
    { title: 'Beating Heart', path: '/mini-projects/beating-heart.html', description: 'A rhythmic animation of a beating heart.' },
    { title: 'Button Bear', path: '/mini-projects/button-bear.html', description: 'An adorable interactive bear button.' },
    { title: 'Circle Lines', path: '/mini-projects/circleLines.html', description: 'A geometric exploration of lines and circles.' },
    { title: 'Glowing Text', path: '/mini-projects/glowingText.html', description: 'An experiment in neon and glowing typography.' },
    { title: 'Popping Bubbles', path: '/mini-projects/popingBubbles.html', description: 'A satisfying interactive bubble popping game.' },
    { title: 'Space Globe', path: '/mini-projects/Space-globe.html', description: 'A 3D-like exploration of a celestial sphere.' },
    { title: 'Thank You', path: '/mini-projects/thank-you.html', description: 'A minimal and elegant thank you page.' },
    { title: 'Web', path: '/mini-projects/WEB.html', description: 'A structural web-based interactive experience.' },
    { title: 'Vibrate', path: '/mini-projects/vibrate.html', description: 'Testing the Vibration API for mobile haptics.' },
    { title: 'Wish Panda', path: '/mini-projects/wishPanda.html', description: 'A whimsical panda-themed wishing well.' },
    { title: 'You Are', path: '/mini-projects/you-are.html', description: 'A poetic interactive experience.' },
  ];
}
