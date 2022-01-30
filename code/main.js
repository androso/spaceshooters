import kaboom from 'kaboom';

kaboom({
  background: [0, 0, 0],
  width: 440,
  height: 275,
  scale: 1.5
})

loadRoot("sprites/");
loadSprite("stars", "stars.png");
loadSprite("gem", "gem.png");
loadSprite("spaceship", "spaceship.png");
loadSprite("alien", "alien.png");

loadRoot("sounds/");
loadSound("explosion", "explosion.wav");
loadSound("music", "music.mp3");
loadSound("score", "score.wav");
loadSound("shoot", "shoot.wav");