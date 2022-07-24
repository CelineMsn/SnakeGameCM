import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake";

let lastRenderTime = 0;
//base for original calculation

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  // converts from milliseconds to seconds the time between each reload
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {}

function draw() {}
