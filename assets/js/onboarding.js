const scriptURL =
  "https://script.google.com/macros/s/AKfycbybcSZK8z61kkqBvWxfxpe0k9Mq-RJj5AYDHdAaEai5VtZ0En0GQUtT5n2sGHnMlvELBA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = new FormData(form);

  document.querySelector(".submit-button").textContent = "Loading...";
  fetch(scriptURL, { method: "POST", body: userData })
    .then((response) => {
      console.log("Success!", response);
      // 隱藏form
      // form.style.display = "none";

      // 放煙火
      startFirework();
      alert("送出成功");
      // 清除表單
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
function startFirework() {
  // create element
  const fireworksElement = document.createElement("div");
  fireworksElement.classList.add("fireworks");
  document.querySelector("main").appendChild(fireworksElement);
  // firework effect
  const container = document.querySelector(".fireworks");
  const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: "round",
    hue: {
      min: 0,
      max: 360,
    },
    delay: {
      min: 30,
      max: 60,
    },
    rocketsPoint: {
      min: 0,
      max: 100,
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3,
      },
      trace: {
        min: 1,
        max: 2,
      },
    },
    brightness: {
      min: 50,
      max: 80,
    },
    decay: {
      min: 0.015,
      max: 0.03,
    },
    mouse: {
      click: false,
      move: false,
      max: 1,
    },
  });
  fireworks.start();
}
// menu
const hamburger = document.querySelector(".nav-hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});
document.onclick = function (e) {
  if (e.target.id !== "nav-hamburger") {
    hamburger.classList.remove("is-active");
  }
};
