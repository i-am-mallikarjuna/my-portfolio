import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-mini-projects',
  standalone: true,
  imports: [MatIconModule, Reveal],
  templateUrl: './mini-projects.html',
  styleUrl: './mini-projects.scss',
})
export class MiniProjects {
  readonly projects = [
    { emoji: '🌳', title: 'Digital Wish Tree', path: 'mini-projects/DigitalWishTree.html', description: 'An interactive digital tree for sharing wishes.' },
    { emoji: '👻', title: 'Boo', path: 'mini-projects/Boo.html', description: 'A playful interactive experience.' },
    { emoji: '🕳️', title: 'Funny Black Holes', path: 'mini-projects/FunnyBlackHoles.html', description: 'A cosmic journey into gravitational anomalies.' },
    { emoji: '🎂', title: 'Happy Birthday Tuffy', path: 'mini-projects/HappyBirthdayTuffy.html', description: 'A celebratory personalized birthday page.' },
    { emoji: '🎉', title: 'Happy Birthday Yaari', path: 'mini-projects/HappyBirthdayYaari.html', description: 'A friendly and colorful birthday celebration.' },
    { emoji: '🎈', title: 'HBD Dosthi', path: 'mini-projects/HBD(Dosthi).html', description: 'A heartfelt birthday tribute to a friend.' },
    { emoji: '🪔', title: 'Happy Diwali', path: 'mini-projects/HappyDiwali.html', description: 'A festive celebration of the festival of lights.' },
    { emoji: '🎆', title: 'Happy New Year', path: 'mini-projects/HappyNewYear.html', description: 'A sparkling celebration of the new year.' },
    { emoji: '📷', title: 'OpenCam', path: 'mini-projects/Open-cam.html', description: 'Experimental camera access and manipulation.' },
    { emoji: '✨', title: 'Particles Touching', path: 'mini-projects/ParticlesTouching.html', description: 'An interactive particle physics simulation.' },
    { emoji: '🙈', title: 'PeekaBoo', path: 'mini-projects/PeekaBoo.html', description: 'A whimsical hide-and-seek interactive experience.' },
    { emoji: '🐼', title: 'Plants Panda', path: 'mini-projects/Plants-Panda.html', description: 'A cute interactive panda and plant simulation.' },
    { emoji: '❤️', title: 'Beating Heart', path: 'mini-projects/beating-heart.html', description: 'A rhythmic animation of a beating heart.' },
    { emoji: '🧸', title: 'Button Bear', path: 'mini-projects/button-bear.html', description: 'An adorable interactive bear button.' },
    { emoji: '🌀', title: 'Circle Lines', path: 'mini-projects/circleLines.html', description: 'A geometric exploration of lines and circles.' },
    { emoji: '💡', title: 'Glowing Text', path: 'mini-projects/glowingText.html', description: 'An experiment in neon and glowing typography.' },
    { emoji: '🫧', title: 'Popping Bubbles', path: 'mini-projects/popingBubbles.html', description: 'A satisfying interactive bubble popping game.' },
    { emoji: '🪐', title: 'Space Globe', path: 'mini-projects/Space-globe.html', description: 'A 3D-like exploration of a celestial sphere.' },
    { emoji: '🙏', title: 'Thank You', path: 'mini-projects/thank-you.html', description: 'A minimal and elegant thank you page.' },
    { emoji: '🕸️', title: 'Web', path: 'mini-projects/WEB.html', description: 'A structural web-based interactive experience.' },
    { emoji: '📳', title: 'Vibrate', path: 'mini-projects/vibrate.html', description: 'Testing the Vibration API for mobile haptics.' },
    { emoji: '🎋', title: 'Wish Panda', path: 'mini-projects/wishPanda.html', description: 'A whimsical panda-themed wishing well.' },
    { emoji: '💫', title: 'You Are', path: 'mini-projects/you-are.html', description: 'A poetic interactive experience.' },
  ];

  readonly query = signal('');
  readonly filteredProjects = computed(() => {
    const q = this.query().trim().toLowerCase();
    return q
      ? this.projects.filter((p) => `${p.title} ${p.description}`.toLowerCase().includes(q))
      : this.projects;
  });
}
