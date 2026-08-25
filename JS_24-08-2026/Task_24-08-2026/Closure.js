function createSpeedController() {
  let speed = 0;

  return function () {
    speed += 10;

    document.getElementById("speed").innerText =
      speed + " km/h";
  };
}

const increaseSpeed = createSpeedController();